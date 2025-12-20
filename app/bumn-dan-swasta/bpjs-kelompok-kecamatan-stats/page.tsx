"use client";
import { Button } from "@/components/ui/button";
import { KecamatanSelect } from "@/components/common/SelectKecamatan";
import { useState } from "react";
import { KecamatanCheckboxSection } from "@/components/common/loading/KecamatanCheckBoxSection";
import { useDataSubmitted } from "@/hooks/useDataSubmitted";
import { InputForm } from "@/components/common/boilerplate/InputForm";
import ButtonBack from "@/components/common/boilerplate/ButtonBack";

export default function Page() {
  const {
    data: kecamatanSubmitted,
    loading,
    refetch,
  } = useDataSubmitted("/api/bumn/bpjs_kelompok_kecamatan");

  const [form, setForm] = useState({
    kecamatan: "",
    penerima_bantuan_iuran: "",
    bukan_penerima_bantuan_iuran: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await fetch("/api/bumn/bpjs_kelompok_kecamatan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        penerima_bantuan_iuran: Number(form.penerima_bantuan_iuran),
        bukan_penerima_bantuan_iuran: Number(form.bukan_penerima_bantuan_iuran),
      }),
    });
    await refetch();
    setForm({
      kecamatan: "",
      penerima_bantuan_iuran: "",
      bukan_penerima_bantuan_iuran: "",
    });
  };
  const kelompokFields = [
    { label: "Penerima Bantuan Iuran (PBI)", name: "penerima_bantuan_iuran" },
    {
      label: "  Bukan Penerima Bantuan Iuran (Non PBI)",
      name: "bukan_penerima_bantuan_iurann",
    },
  ];
  return (
    <div className="mt-10">
      <h1 className="text-xl text-center font-semibold">
        BPJS KELOMPOK KECAMATAN
      </h1>
      <ButtonBack linkUrl="/bumn-dan-swasta" />
      <div className="flex flex-col md:flex-row gap-3 border rounded-sm p-4 mt-20">
        <KecamatanCheckboxSection loading={loading} data={kecamatanSubmitted} />
        <div className="space-y-4 w-full">
          <p className="text-sm text-red-700">
            Tabel_Badan Penyelenggara Jaminan Sosial
          </p>
          <p className="text-sm capitalize">
            Tabel 4.2.16 Jumlah Peserta BPJS Kesehatan Menurut Kelompok dan
            Kecamatan di Kabupaten Pasaman Barat, 2024
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

          <div className="flex flex-col">
            {kelompokFields.map((item) => (
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
  );
}
