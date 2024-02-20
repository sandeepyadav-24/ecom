import Image from "next/image";
import { Inter } from "next/font/google";
import { Input } from "@repo/ui/Input";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div>hello World</div>
      <Input />
    </div>
  );
}
