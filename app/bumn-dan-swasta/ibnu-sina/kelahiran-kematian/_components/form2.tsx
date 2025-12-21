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
  } = useDataSubmitted("/api/bumn/ibnu-sina/lanjutan-kelahiran-kematian");
  const [form, setForm] = useState({
    bulan: "",
    hidup_laki_laki: "",
    mati_laki_laki: "",
    hidup_perempuan: "",
    mati_perempuan: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await fetch("/api/bumn/ibnu-sina/lanjutan-kelahiran-kematian", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        hidup_laki_laki: Number(form.hidup_laki_laki),
        hidup_perempuan: Number(form.hidup_perempuan),
        mati_laki_laki: Number(form.mati_laki_laki),
        mati_perempuan: Number(form.mati_perempuan),
      }),
    });
    await refetch();
    setForm({
      bulan: "",
      hidup_laki_laki: "",
      hidup_perempuan: "",
      mati_laki_laki: "",
      mati_perempuan: "",
    });
  };
  const formField = [
    {
      label: "Hidup Laki-Laki",
      name: "hidup_laki_laki",
    },
    {
      label: "Mati Perempuan",
      name: "mati_perempuan",
    },
    {
      label: "Hidup Perempuan",
      name: "hidup_perempuan",
    },
    {
      label: "Mati Laki-Laki",
      name: "mati_laki_laki",
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 border rounded-sm p-4 mt-20">
        <BulanCheckboxSection loading={loading} data={bulanSubmitted} />
        <div className="space-y-4">
          <p className="text-sm text-red-700">Tabel_Ibnu Sina Yarsi </p>
          <p className="text-sm capitalize">Lanjutan Tabel 4.2.18</p>
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
