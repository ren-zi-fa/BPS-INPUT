"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BULAN = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export default function PasienRawatJalan() {
  const [form, setForm] = useState({
    bulan: "",
    bedah: "",
    kesehatan_anak: "",
    poli_kebidanan: "",
    gigi: "",
    umum: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    await fetch("URL_WEB_APP_GOOGLE_SCRIPT", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bulan: form.bulan,
        bedah: Number(form.bedah),
        kesehatan_anak: Number(form.kesehatan_anak),
        poli_kebidanan: Number(form.poli_kebidanan),
        gigi: Number(form.gigi),
        umum: Number(form.umum),
      }),
    });

    setForm({
      bulan: "",
      bedah: "",
      kesehatan_anak: "",
      poli_kebidanan: "",
      gigi: "",
      umum: "",
    });
  };

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <div>
        <Label className="my-3">Bulan</Label>
        <Input
          list="bulan-list"
          name="bulan"
          value={form.bulan}
          onChange={handleChange}
          placeholder="Pilih / ketik bulan"
        />
        <datalist id="bulan-list">
          {BULAN.map((b) => (
            <option key={b} value={b} />
          ))}
        </datalist>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label className="my-3">Bedah</Label>
          <Input
            type="number"
            name="bedah"
            value={form.bedah}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label className="my-3">Kesehatan Anak</Label>
          <Input
            type="number"
            name="kesehatan_anak"
            value={form.kesehatan_anak}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label className="my-3">Poli Kebidanan</Label>
          <Input
            type="number"
            name="poli_kebidanan"
            value={form.poli_kebidanan}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label className="my-3">Gigi</Label>
          <Input
            type="number"
            name="gigi"
            value={form.gigi}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label className="my-3">Umum</Label>
          <Input
            type="number"
            name="umum"
            value={form.umum}
            onChange={handleChange}
          />
        </div>
      </div>

      <Button onClick={submit} className="w-full">
        Simpan ke Spreadsheet
      </Button>
    </div>
  );
}
