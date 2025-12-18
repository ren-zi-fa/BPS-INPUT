"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { SelectFasilitas } from "@/components/common/SelectFasilitas";
import { FasilitasCheckbox } from "@/components/common/ChecklistFasilitas";

export default function JumlahFasilitas() {
  const [form, setForm] = useState({
    dua_ribu_20: "",
    dua_ribu_21: "",
    dua_ribu_22: "",
    dua_ribu_23: "",
    dua_ribu_24: "",
    fasilitas: "",
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
      dua_ribu_20: "",
      dua_ribu_21: "",
      dua_ribu_22: "",
      dua_ribu_23: "",
      dua_ribu_24: "",
      fasilitas: "",
    });
  };

  return (
    <>
      {/* Lanjutan Tabel 4.2.15 */}

      <div className="flex gap-3 flex-col md:flex-row border-2 space-x-2 rounded-sm p-4 ">
        <FasilitasCheckbox />
        <div className="space-y-4">
          <div>
            <SelectFasilitas
              value={form.fasilitas}
              onChange={(val) =>
                setForm((prev) => ({ ...prev, fasilitas: val }))
              }
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label className="my-3">2020</Label>
              <Input
                type="number"
                name="dua_ribu_20"
                value={form.dua_ribu_20}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label className="my-3">2021</Label>
              <Input
                type="number"
                name="dua_ribu_21"
                value={form.dua_ribu_21}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label className="my-3">2022</Label>
              <Input
                type="number"
                name="dua_ribu_22"
                value={form.dua_ribu_22}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label className="my-3">2023</Label>
              <Input
                type="number"
                name="dua_ribu_23"
                value={form.dua_ribu_23}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label className="my-3">2024</Label>
              <Input
                type="number"
                name="dua_ribu_24"
                value={form.dua_ribu_24}
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
