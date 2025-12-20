"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { UraianSelect } from "@/components/common/selectUraian";
import { useDataSubmitted } from "@/hooks/useDataSubmitted";
import { UraianCheckboxSection } from "@/components/common/loading/UraianCheckBoxSection";
import { InputForm } from "@/components/common/boilerplate/InputForm";
import ButtonBack from "@/components/common/boilerplate/ButtonBack";

export default function Page() {
  const {
    data: UraianSubmitted,
    loading,
    refetch,
  } = useDataSubmitted("/api/bumn/ibnu-sina/rawat-inap");
  const [form, setForm] = useState({
    uraian: "",
    jumlah_pasien: "",
    hari_rawat: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await fetch("/api/bumn/ibnu-sina/rawat-inap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        jumlah_pasien: Number(form.jumlah_pasien),
        hari_rawat: Number(form.hari_rawat),
      }),
    });
    await refetch();
    setForm({
      uraian: "",
      jumlah_pasien: "",
      hari_rawat: "",
    });
  };

  const dataPasienField = [
    { label: "Jumlah Pasien", name: "jumlah_pasien" },
    { label: "Hari Rawat", name: "hari_rawat" },
  ];
  return (
    <>
      <div className="mt-10">
        <h1 className="text-xl text-center font-semibold">PASIEN RAWAT INAP</h1>
        <ButtonBack linkUrl="/bumn-dan-swasta?tab=rawat-jalan" />
        <div className="flex flex-col md:flex-row gap-3 border rounded-sm p-4 mt-20">
          <UraianCheckboxSection loading={loading} data={UraianSubmitted} />
          <div className="space-y-4">
            <p className="text-sm text-red-700">Tabel_Ibnu Sina Yarsi </p>
            <p className="text-sm capitalize">
              Tabel 4.2.16 Banyaknya Pasien Yang Dirawat Inap di RSI Ibnu Sina
              Simpang Empat
            </p>
            <div>
              <UraianSelect
                submittedItem={UraianSubmitted}
                value={form.uraian}
                onChange={(val) =>
                  setForm((prev) => ({ ...prev, uraian: val }))
                }
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              {dataPasienField.map((item) => (
                <InputForm
                  key={item.name}
                  label={item.label}
                  name={item.name}
                  onChange={handleChange}
                  value={form[item.name as keyof typeof form]}
                />
              ))}
            </div>
            <Button onClick={handleSubmit} className="w-full">
              Simpan Data
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
