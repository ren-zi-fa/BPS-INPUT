"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";
import { BulanCheckbox } from "@/components/common/ChecklistBulan";
import { BulanSelect } from "@/components/common/SelectBulan";

export default function PasienRawatJalan() {
  const [form, setForm] = useState({
    bulan: "",
    bedah: "",
    kesehatan_anak: "",
    poli_kebidanan: "",
    umum: "",
    gigi: "",
  });
  const [form2, setForm2] = useState({
    bulan2: "",
    penyakit_dalam: "",
    jiwa: "",
    tht: "",
    mata: "",
    neurologi: "",
    fisioterapi: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      bedah: "",
      gigi: "",
      kesehatan_anak: "",
      poli_kebidanan: "",
      umum: "",
    });
  };
  const handleSubmit2 = async () => {
    setForm2({
      bulan2: "",
      fisioterapi: "",
      jiwa: "",
      mata: "",
      neurologi: "",
      penyakit_dalam: "",
      tht: "",
    });
  };
  return (
    <>
      {/* tablel 4.2.15 */}
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
              <Label className="my-3">Gigi</Label>
              <Input
                type="number"
                name="gigi"
                value={form.gigi}
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
              <Label className="my-3">Umum</Label>
              <Input
                type="number"
                name="umum"
                value={form.umum}
                onChange={handleChange}
              />
            </div>
          </div>
          <Button onClick={handleSubmit} className="w-full">
            Simpan Data
          </Button>
        </div>
      </div>
      {/* Lanjutan Tabel 4.2.15 */}
      <div className="flex gap-3 flex-col md:flex-row border-2 space-x-2 rounded-sm p-4 ">
        <BulanCheckbox />
        <div className="space-y-4">
          <div>
            <BulanSelect
              value={form2.bulan2}
              onChange={(val) => setForm((prev) => ({ ...prev, bulan2: val }))}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label className="my-3">Penyakit Dalam</Label>
              <Input
                type="number"
                name="penyakit_dalam"
                value={form2.penyakit_dalam}
                onChange={handleChange2}
              />
            </div>

            <div>
              <Label className="my-3">Jiwa</Label>
              <Input
                type="number"
                name="jiwa"
                value={form2.jiwa}
                onChange={handleChange2}
              />
            </div>
            <div>
              <Label className="my-3">THT</Label>
              <Input
                type="number"
                name="tht"
                value={form2.tht}
                onChange={handleChange2}
              />
            </div>

            <div>
              <Label className="my-3">Mata</Label>
              <Input
                type="number"
                name="mata"
                value={form2.neurologi}
                onChange={handleChange2}
              />
            </div>
            <div>
              <Label className="my-3">Neurologi</Label>
              <Input
                type="number"
                name="neurologi"
                value={form2.neurologi}
                onChange={handleChange2}
              />
            </div>
            <div>
              <Label className="my-3">Fisioterapi</Label>
              <Input
                type="number"
                name="fisioterapi"
                value={form2.fisioterapi}
                onChange={handleChange2}
              />
            </div>
          </div>
          <Button onClick={handleSubmit2} className="w-full">
            Simpan Data
          </Button>
        </div>
      </div>
    </>
  );
}
