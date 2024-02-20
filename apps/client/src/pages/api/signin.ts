// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  email: string;
  password: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const email = req.body.email;
  const password = req.body.password;
  res.status(200).json({ email: email, password: password });
}
