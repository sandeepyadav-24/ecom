import type { NextApiRequest, NextApiResponse } from "next";
import { Admin } from "db";
import jwt from "jsonwebtoken";
const secretKey = "sec8";
import ensureDbConnected from "@/lib/dbConnect";

type Data = {
  token?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await ensureDbConnected();
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email });

  if (!admin) {
    const cred = {
      email: email,
      password: password,
    };
    const newAdmin = new Admin(cred);
    const token = jwt.sign(cred, secretKey);
    newAdmin.save();
    res
      .status(200)
      .json({ message: "New Admin Registered Successfully", token: token });
  } else {
    res.status(403).json({ message: "Admin Already Exist " });
  }
}
