"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BpjsForm() {
  const [form, setForm] = useState({
    kecamatan: "",
    kelas1: "",
    kelas2: "",
    kelas3: "",
    jumlah: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await fetch("URL_WEB_APP_GOOGLE_SCRIPT", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        kelas1: Number(form.kelas1),
        kelas2: Number(form.kelas2),
        kelas3: Number(form.kelas3),
        jumlah: Number(form.jumlah),
      }),
    });

    setForm({
      kecamatan: "",
      kelas1: "",
      kelas2: "",
      kelas3: "",
      jumlah: "",
    });
  };

  return (
    <div className="space-y-4 max-w-xl mx-auto">
      <div>
        <Label className="my-3">Kecamatan</Label>
        <Input
          name="kecamatan"
          value={form.kecamatan}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <Label className="my-3">Kelas I</Label>
          <Input
            type="number"
            name="kelas1"
            value={form.kelas1}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label className="my-3">Kelas II</Label>
          <Input
            type="number"
            name="kelas2"
            value={form.kelas2}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label className="my-3">Kelas III</Label>
          <Input
            type="number"
            name="kelas3"
            value={form.kelas3}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <Label className="my-3">Jumlah</Label>
        <Input
          type="number"
          name="jumlah"
          value={form.jumlah}
          onChange={handleChange}
        />
      </div>

      <Button onClick={handleSubmit} className="w-full">
        Simpan ke Spreadsheet
      </Button>
    </div>
  );
}
