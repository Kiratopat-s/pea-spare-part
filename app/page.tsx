import MainStructure from "@/components/mainStructure";
import Image from "next/image";

export default function Home() {
  return (
    <MainStructure>
      <h1 className="text-xl font-bold">
        Let me introduce you to{" "}
        <span className="bg-red-500 text-white px-2">Spare Part</span>{" "}
        Management System for{" "}
        <span className="bg-purple-500 text-white px-2">PEA</span>
      </h1>
      <p>
        This system design for clinic-tool spare part management. To make it
        easier for the clinic to manage their spare part. and more efficient.
      </p>
    </MainStructure>
  );
}
