"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BulanSelect } from "@/components/common/SelectBulan";
import { useDataSubmitted } from "@/hooks/useDataSubmitted";
import { BulanCheckboxSection } from "@/components/common/loading/BulanCheckboxSection";
import { InputForm } from "@/components/common/boilerplate/InputForm";

export default function Form1() {
  const {
    data: bulanSubmitted,
    loading,
    refetch,
  } = useDataSubmitted("/api/bumn/ibnu-sina/");
  const [form, setForm] = useState({
    bulan: "",
    bersalin: "",
    keguguran: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await fetch("/api/bumn/ibnu-sina/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        bersalin: Number(form.bersalin),
        poli_kebidanan: Number(form.keguguran),
      }),
    });
    await refetch();
    setForm({
      bulan: "",
      bersalin: "",
      keguguran: "",
    });
  };
  const formField = [
    {
      label: "Bersalin",
      name: "bersalin",
    },
    {
      label: "Keguguran",
      name: "keguguran",
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 border rounded-sm p-4 mt-20">
        <BulanCheckboxSection loading={loading} data={bulanSubmitted} />
        <div className="space-y-4">
          <p className="text-sm text-red-700">Tabel_Ibnu Sina Yarsi </p>
          <p className="text-sm capitalize">
            Tabel 4.2.18 Banyaknya Kelahiran, Lahir Hidup, Lahir Mati &
            Keguguran di RSI Ibnu Sina Simpang Empat 
          </p>
          <div>
            <BulanSelect
              submittedItem={bulanSubmitted}
              value={form.bulan}
              onChange={(val) => setForm((prev) => ({ ...prev, bulan: val }))}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {formField.map((item) => (
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
    </>
  );
}
