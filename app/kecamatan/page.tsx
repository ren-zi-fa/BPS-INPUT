import ButtonBack from "@/components/common/boilerplate/ButtonBack";
import { kecamatan } from "@/constant/menu";
import { Metadata } from "next";
import KecamatanList from "./[nama]/_components/KecamatanList";

export const metadata: Metadata = {
  title: "Kecamatan",
  description: "Form Input Kecamatan",
};

export default function Page() {
  return (
    <div className="min-h-screen w-xl mx-auto flex flex-col gap-4 justify-center">
      <h1 className="uppercase text-3xl font-bold text-center mb-5">Form Kecamatan </h1>
      <ButtonBack linkUrl="/" />
      <KecamatanList data={kecamatan} />
    </div>
  );
}
