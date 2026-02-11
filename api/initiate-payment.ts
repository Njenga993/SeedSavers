// /api/initiate-payment.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { amount, currency = "USD", name, email, phone, purpose = "Donation" } = req.body;

  if (!amount || !email || !phone || !name) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const tx_ref = `donation-${uuidv4()}`;

    const response = await axios.post(
      "https://api.flutterwave.com/v3/payments",
      {
        tx_ref,
        amount,
        currency,
        redirect_url: `${process.env.FRONTEND_URL}/donation-success`,
        customer: { email, phonenumber: phone, name },
        customizations: {
          title: "Seed Savers Kenya Donation",
          description: purpose,
          logo: `${process.env.FRONTEND_URL}/logo.png`,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return res.status(200).json({ link: response.data.data.link });
  } catch (error: any) {
    console.error(error?.response?.data || error.message);
    return res.status(500).json({ message: "Payment initiation failed" });
  }
}