"use client";
import { Button } from "@/components/ui/button";;
import { KecamatanSelect } from "@/components/common/SelectKecamatan";
import {  useState } from "react";
import { KecamatanCheckboxSection } from "@/components/common/loading/KecamatanCheckBoxSection";
import { useDataSubmitted } from "@/hooks/useDataSubmitted";
import { InputForm } from "@/components/common/boilerplate/InputForm";
import ButtonBack from "@/components/common/boilerplate/ButtonBack";

export default function Page() {
  const {
    data: kecamatanSubmitted,
    loading,
    refetch,
  } = useDataSubmitted("/api/bumn/bpjs_kecamatan");

  const [form, setForm] = useState({
    kecamatan: "",
    kelas1: "",
    kelas2: "",
    kelas3: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await fetch("/api/bumn/bpjs_kecamatan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        kelas1: Number(form.kelas1),
        kelas2: Number(form.kelas2),
        kelas3: Number(form.kelas3),
      }),
    });
    await refetch();
    setForm({
      kecamatan: "",
      kelas1: "",
      kelas2: "",
      kelas3: "",
    });
  };
  const kelasFields = [
    { label: "Kelas I", name: "kelas1" },
    { label: "Kelas II", name: "kelas2" },
    { label: "Kelas III", name: "kelas3" },
  ];
  return (
    <div className="mt-10">
      <h1 className="text-xl text-center font-semibold">BPJS KECAMATAN</h1>
      <ButtonBack linkUrl="/bumn-dan-swasta" />
      <div className="flex flex-col md:flex-row gap-3 border rounded-sm p-4 mt-20">
        <KecamatanCheckboxSection loading={loading} data={kecamatanSubmitted} />

        <div className="space-y-4 w-full">
          <p className="text-sm text-red-700">
            Tabel_Badan Penyelenggara Jaminan Sosial
          </p>
          <p className="text-sm capitalize">
            Tabel 4.2.15 Jumlah Peserta BPJS Kesehatan dan Rata-rata Iuran Per
            Peserta Menurut Kecamatan di Kabupaten Pasaman Barat, 2025
          </p>
          <div>
            <KecamatanSelect
              submittedItem={kecamatanSubmitted}
              value={form.kecamatan}
              onChange={(val) =>
                setForm((prev) => ({ ...prev, kecamatan: val }))
              }
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {kelasFields.map((item) => (
              <InputForm
                key={item.name}
                label={item.label}
                name={item.name}
                value={form[item.name as keyof typeof form]}
                onChange={handleChange}
              />
            ))}
          </div>

          <Button onClick={handleSubmit} className="w-full">
            Simpan Data
          </Button>
        </div>
      </div>
    </div>
  );
}
