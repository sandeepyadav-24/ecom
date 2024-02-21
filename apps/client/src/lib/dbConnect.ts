import mongoose from "mongoose";
let alreadyDone = false;
export default function ensureDbConnected() {
  if (alreadyDone) {
    return;
  }
  alreadyDone = true;
  mongoose.connect(
    "mongodb+srv://sandeepyadav004343:2F1iskoQwDR3pS0F@cluster0.npjhskg.mongodb.net/"
  );
}
