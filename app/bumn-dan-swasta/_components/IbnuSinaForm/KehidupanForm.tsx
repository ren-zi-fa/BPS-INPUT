"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import { BulanCheckbox } from "@/components/common/ChecklistBulan";
import { BulanSelect } from "@/components/common/SelectBulan";

export default function KehidupanForm() {
  const [form, setForm] = useState({
    bulan: "",
    bersalin: "",
    keguguran: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // await fetch("", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     ...form,
    //     kelas1: Number(form.kelas1),
    //     kelas2: Number(form.kelas2),
    //     kelas3: Number(form.kelas3),
    //     jumlah: Number(form.jumlah),
    //   }),
    // });

    setForm({
      bulan: "",
      bersalin: "",
      keguguran: "",
    });
  };

  return (
    <>
      <div className="flex gap-3 flex-col md:flex-row border-2 space-x-2 rounded-sm p-4 ">
        <BulanCheckbox />
        <div className="space-y-4">
          <p className="text-sm capitalize">
            Jumlah Peserta BPJS Kesehatan dan Rata-rata Iuran Per Peserta
            Menurut Kecamatan di Kabupaten Pasaman Barat,
          </p>
          <div>
            <BulanSelect
              value={form.bulan}
              onChange={(val) => setForm((prev) => ({ ...prev, bulan: val }))}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="my-3">Bersalin</Label>
              <Input
                type="number"
                name="bersalin"
                value={form.bersalin}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label className="my-3">Keguguran</Label>
              <Input
                type="number"
                name="keguguran"
                value={form.keguguran}
                onChange={handleChange}
              />
            </div>
          </div>
          <Button onClick={handleSubmit} className="w-full">
            Simpan Data
          </Button>
        </div>
      </div>
    </>
  );
}
