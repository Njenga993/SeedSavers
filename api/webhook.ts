// /api/webhook.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const secretHash = process.env.FLUTTERWAVE_WEBHOOK_SECRET;
  const signature = req.headers["verif-hash"] as string | undefined;

  if (!signature || signature !== secretHash) {
    return res.status(401).end();
  }

  const payload = req.body;

  if (payload.status === "successful") {
    // TODO: save transaction to DB, send confirmation email, etc.
    console.log("Payment successful:", payload);
  }

  return res.status(200).json({ received: true });
}