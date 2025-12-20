"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BulanSelect } from "@/components/common/SelectBulan";
import { useDataSubmitted } from "@/hooks/useDataSubmitted";
import { BulanCheckboxSection } from "@/components/common/loading/BulanCheckboxSection";
import { InputForm } from "@/components/common/boilerplate/InputForm";

export default function Form2() {
  const {
    data: bulanSubmitted,
    loading,
    refetch,
  } = useDataSubmitted("/api/bumn/ibnu-sina/lanjutan-ibnu-sina-rawat-jalan");

  const [form2, setForm2] = useState({
    bulan2: "",
    penyakit_dalam: "",
    jiwa: "",
    tht: "",
    mata: "",
    neurologi: "",
    fisioterapi: "",
  });

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm2({ ...form2, [e.target.name]: e.target.value });
  };

  const handleSubmit2 = async () => {
    await fetch("/api/bumn/ibnu-sina/lanjutan-ibnu-sina-rawat-jalan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form2,
        penyakit_dalam: Number(form2.penyakit_dalam),
        jiwa: Number(form2.jiwa),
        tht: Number(form2.tht),
        mata: Number(form2.mata),
        neurologi: Number(form2.neurologi),
        fisioterapi: Number(form2.fisioterapi),
      }),
    });
    await refetch();
    setForm2({
      bulan2: "",
      fisioterapi: "",
      jiwa: "",
      mata: "",
      neurologi: "",
      penyakit_dalam: "",
      tht: "",
    });
  };
  const form2field = [
    { label: "Penyakit Dalam", name: "penyakit_dalam" },
    { label: "Jiwa", name: "jiwa" },
    { label: "THT", name: "tht" },
    { label: "Mata", name: "mata" },
    { label: "Neurologi", name: "neurologi" },
    { label: "Fisioterapi", name: "fisioterapi" },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 border rounded-sm p-4 mt-20">
        <BulanCheckboxSection loading={loading} data={bulanSubmitted} />
        <div className="space-y-4">
          <p className="text-sm text-red-700">Tabel_Ibnu Sina Yarsi </p>
          <p className="text-sm capitalize">Lanjutan Tabel 4.2.15</p>
          <div>
            <BulanSelect
              submittedItem={bulanSubmitted}
              value={form2.bulan2}
              onChange={(val) => setForm2((prev) => ({ ...prev, bulan2: val }))}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {form2field.map((item) => {
              console.log(form2[item.name as keyof typeof form2]);
              return (
                <InputForm
                  key={item.name}
                  label={item.label}
                  name={item.name}
                  onChange={handleChange2}
                  value={form2[item.name as keyof typeof form2]}
                />
              );
            })}
          </div>
          <Button onClick={handleSubmit2} className="w-full">
            Simpan Data
          </Button>
        </div>
      </div>
    </>
  );
}
