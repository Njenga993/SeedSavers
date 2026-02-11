// /api/health.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(_: VercelRequest, res: VercelResponse) {
  res.status(200).json({ status: "OK" });
}