"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useDataSubmitted } from "@/hooks/useDataSubmitted";
import { InputForm } from "@/components/common/boilerplate/InputForm";
import ButtonBack from "@/components/common/boilerplate/ButtonBack";
import { FasilitasCheckboxSection } from "@/components/common/loading/FasilitasCheckBoxSection";
import { FasilitasSelect } from "@/components/common/SelectFasilitas";

export default function Page() {
  const {
    data: fasilitasSubmitted,
    loading,
    refetch,
  } = useDataSubmitted("/api/bumn/ibnu-sina/fasilitas-ibnu-sina");
  const [form, setForm] = useState({
    dua_ribu_20: "",
    dua_ribu_21: "",
    dua_ribu_22: "",
    dua_ribu_23: "",
    dua_ribu_24: "",
    fasilitas: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await fetch("/api/bumn/ibnu-sina/fasilitas-ibnu-sina", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        dua_ribu_20: Number(form.dua_ribu_20),
        dua_ribu_21: Number(form.dua_ribu_21),
        dua_ribu_22: Number(form.dua_ribu_22),
        dua_ribu_23: Number(form.dua_ribu_23),
        dua_ribu_24: Number(form.dua_ribu_24),
      }),
    });
    await refetch();
    setForm({
      dua_ribu_20: "",
      dua_ribu_21: "",
      dua_ribu_22: "",
      dua_ribu_23: "",
      dua_ribu_24: "",
      fasilitas: "",
    });
  };

  const dataPasienField = [
    { label: "2020", name: "dua_ribu_20" },
    { label: "2021", name: "dua_ribu_21" },
    { label: "2022", name: "dua_ribu_22" },
    { label: "2023", name: "dua_ribu_23" },
    { label: "2024", name: "dua_ribu_24" },
  ];
  return (
    <>
      <div className="mt-10">
        <h1 className="text-xl text-center font-semibold">
          FASILITAS IBNU SINA YARSI
        </h1>
        <ButtonBack linkUrl="/bumn-dan-swasta?tab=ibnu-sina-yarsi" />
        <div className="flex flex-col md:flex-row gap-3 border rounded-sm p-4 mt-20">
          <FasilitasCheckboxSection
            loading={loading}
            data={fasilitasSubmitted}
          />
          <div className="space-y-4">
            <p className="text-sm text-red-700">Tabel_Ibnu Sina Yarsi </p>
            <p className="text-sm capitalize">
              Tabel 4.2.17 Banyaknya Fasilitas yang ada di RSI Ibnu Sina Simpang
              Empat, 2020-2024
            </p>
            <div>
              <FasilitasSelect
                submittedItem={fasilitasSubmitted}
                value={form.fasilitas}
                onChange={(val) =>
                  setForm((prev) => ({ ...prev, fasilitas: val }))
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
