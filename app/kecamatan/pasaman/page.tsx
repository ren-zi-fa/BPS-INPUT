"use client";

import ButtonBack from "@/components/common/boilerplate/ButtonBack";

import JumlahNagariForm from "@/components/common/boilerplate/JumlahNagariForm";
import { NagariSelect } from "@/components/common/SelectNagari";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { wilayah } from "@/constant/data";
import { dataRanahBatahan } from "@/constant/informasi";
import { useState } from "react";
import InformasikecamatanForm from "./_components/InformasiKecamatanForm";


export default function Page() {
  const [formInformasi, setFormInformasi] = useState({
    jorong: "",
    kelas1: "",
    kelas2: "",
    kelas3: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("sasas", e.target.name);
    setFormInformasi({ ...formInformasi, [e.target.name]: e.target.value });
  };

  const selectedNagari = "Rabi Jonggor";
  const jorongList =
    wilayah
      .find((w) => w.kecamatan === "Gunung Tuleh")
      ?.nagari.find((n) => n.nama === selectedNagari)?.jorong ?? [];

  return (
    <div className=" space-y-4 mt-10">
      <ButtonBack linkUrl="/kecamatan" />
      <InformasikecamatanForm />
      <div className="w-xl space-y-8 border-2 rounded-xl p-4">
        <JumlahNagariForm kecamatan={dataRanahBatahan.title} />
      </div>
      <div className="w-xl space-y-8 border-2 rounded-xl p-4">
        <h1>6. Nama-nama Nagari dan Jorong di Kecamatan</h1>
        <div className="space-y-4">
          <NagariSelect
            value={formInformasi.jorong}
            onChange={(val) =>
              setFormInformasi((prev) => ({ ...prev, kecamatan: val }))
            }
            nagariList={wilayah[1].nagari}
          />
        </div>
        <div className="space-y-4">
          <Label>Nama Jorong</Label>
          <Input type="number" />
        </div>
      </div>
      <div className="w-xl space-y-8 border-2 rounded-xl p-4">
        <h1>7. Nama Camat </h1>
        <div className="space-y-4">
          <Label>nama</Label>
          <Input type="text" defaultValue="" disabled />
        </div>
      </div>
      <div className="w-xl space-y-8 border-2 rounded-xl p-4"></div>
    </div>
  );
}
