import mongoose from "mongoose";
let alreadyDone = false;
export default function ensureDbConnected() {
  if (alreadyDone) {
    return;
  }
  alreadyDone = true;
  mongoose.connect(
    "mongodb+srv://sandeepyadav24:MG5E4VTaQ0ZH5VKt@cluster0.wgmwmtd.mongodb.net/"
  );
}
