"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BulanSelect } from "@/components/common/SelectBulan";
import { BulanCheckbox } from "@/components/common/ChecklistBulan";

export default function KelahiranForm() {
  const [form, setForm] = useState({
    bulan: "",
    lahirHidupL: 0,
    lahirHidupP: 0,
    lahirMatiL: 0,
    lahirMatiP: 0,
    jumlahL: 0,
    jumlahP: 0,
  });

  // auto hitung jumlah
  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      jumlahL: prev.lahirHidupL + prev.lahirMatiL,
      jumlahP: prev.lahirHidupP + prev.lahirMatiP,
    }));
  }, [form.lahirHidupL, form.lahirHidupP, form.lahirMatiL, form.lahirMatiP]);

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = async () => {
    // contoh payload bersih dan siap simpan
    const payload = {
      bulan: form.bulan,
      lahirHidup: {
        lakiLaki: form.lahirHidupL,
        perempuan: form.lahirHidupP,
      },
      lahirMati: {
        lakiLaki: form.lahirMatiL,
        perempuan: form.lahirMatiP,
      },
      jumlah: {
        lakiLaki: form.jumlahL,
        perempuan: form.jumlahP,
      },
    };

    console.log(payload);

    // reset
    setForm({
      bulan: "",
      lahirHidupL: 0,
      lahirHidupP: 0,
      lahirMatiL: 0,
      lahirMatiP: 0,
      jumlahL: 0,
      jumlahP: 0,
    });
  };

  return (
    <div className="flex gap-3 flex-col md:flex-row border-2 space-x-2 rounded-sm p-4 ">
      <BulanCheckbox />

      <div className=" p-4 space-y-6">
        <BulanSelect
          value={form.bulan}
          onChange={(val) => setForm((prev) => ({ ...prev, bulan: val }))}
        />

        {/* LAHIR HIDUP */}
        <div>
          <Label className="font-semibold">Lahir Hidup</Label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <Input
              type="number"
              name="lahirHidupL"
              placeholder="Laki-laki"
              value={form.lahirHidupL}
              onChange={handleNumberChange}
            />
            <Input
              type="number"
              name="lahirHidupP"
              placeholder="Perempuan"
              value={form.lahirHidupP}
              onChange={handleNumberChange}
            />
          </div>
        </div>

        {/* LAHIR MATI */}
        <div>
          <Label className="font-semibold">Lahir Mati</Label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <Input
              type="number"
              name="lahirMatiL"
              placeholder="Laki-laki"
              value={form.lahirMatiL}
              onChange={handleNumberChange}
            />
            <Input
              type="number"
              name="lahirMatiP"
              placeholder="Perempuan"
              value={form.lahirMatiP}
              onChange={handleNumberChange}
            />
          </div>
        </div>

        {/* JUMLAH */}
        <div>
          <Label className="font-semibold">Jumlah (Otomatis)</Label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <Input type="number" value={form.jumlahL} disabled />
            <Input type="number" value={form.jumlahP} disabled />
          </div>
        </div>

        <Button onClick={handleSubmit} className="w-full">
          Simpan Data
        </Button>
      </div>
    </div>
  );
}
