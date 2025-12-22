"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { InputForm } from "@/components/common/boilerplate/InputForm";
import { dataRanahBatahan } from "@/constant/informasi";

const initialForm = {
  nama_kecamatan: dataRanahBatahan.nama_kecamatan,
  luas_kecamatan: dataRanahBatahan.luas_kecamatan,
  batas_kecamatan_utara: dataRanahBatahan.batas_kecamatan.utara,
  batas_kecamatan_selatan: dataRanahBatahan.batas_kecamatan.selatan,
  batas_kecamatan_barat: dataRanahBatahan.batas_kecamatan.barat,
  batas_kecamatan_timur: dataRanahBatahan.batas_kecamatan.timur,
  ketinggian_permukaan_laut: dataRanahBatahan.ketinggian_dari_permukaan_laut,
};

export default function InformasikecamatanForm() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/kecamatan/informasi-kecamatan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama_kecamatan: form.nama_kecamatan,
          luas_kecamatan: form.luas_kecamatan,
          batas_kecamatan_selatan: form.batas_kecamatan_selatan,
          batas_kecamatan_barat: form.batas_kecamatan_barat,
          batas_kecamatan_utara: form.batas_kecamatan_utara,
          batas_kecamatan_timur: form.batas_kecamatan_timur,
          ketinggian_permukaan_laut: form.ketinggian_permukaan_laut,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        // contoh: 409 dari server
        alert(result.message || "Gagal menyimpan data");
        return;
      }

      alert("Data berhasil disimpan");

      // reset hanya jika sukses
      setForm({
        nama_kecamatan: "",
        batas_kecamatan_utara: "",
        luas_kecamatan: "",
        batas_kecamatan_selatan: "",
        batas_kecamatan_barat: "",
        batas_kecamatan_timur: "",
        ketinggian_permukaan_laut: "",
      });
    } catch (error) {
      alert("Terjadi kesalahan jaringan");
    } finally {
      setLoading(false);
    }
  };

  const formField = [
    {
      label: "Nama Kecamatan",
      name: "nama_kecamatan",
    },
    {
      label: "Luas Kecamatan",
      name: "luas_kecamatan",
    },
    {
      label: "batas Kecamatan Utara",
      name: "batas_kecamatan_utara",
    },
    {
      label: "batas Kecamatan Seletan",
      name: "batas_kecamatan_selatan",
    },
    {
      label: "batas Kecamatan Barat",
      name: "batas_kecamatan_barat",
    },
    {
      label: "batas Kecamatan Timur",
      name: "batas_kecamatan_timur",
    },
    {
      label: "Ketinggian dari Permukaan Laur",
      name: "ketinggian_permukaan_laut",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full border-2 p-4 rounded-sm">
        <div className="space-y-4">
          <p className="text-lg capitalize">Informasi Kecamatan</p>
          <div className="">
            {formField.map((item) => (
              <InputForm
                key={item.name}
                label={item.label}
                type="text"
                name={item.name}
                onChange={handleChange}
                value={form[item.name as keyof typeof form]}
              />
            ))}
          </div>
          <Button onClick={handleSubmit} disabled={loading} className="w-full">
            Simpan Data
          </Button>
        </div>
      </div>
    </>
  );
}
