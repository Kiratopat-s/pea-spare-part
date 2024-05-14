import MainStructure from "@/components/mainStructure";
import Image from "next/image";

export default function Home() {
  return (
    <MainStructure>
      <h1 className="text-xl font-bold">
        This is a <span className="bg-red-500 text-white px-2">Admin</span>{" "}
        Panel <span className="bg-purple-500 text-white px-2">PEA</span>
      </h1>
      ier for the clinic to manage their spare part. and more efficient.
    </MainStructure>
  );
}
