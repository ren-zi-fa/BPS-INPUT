import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { wilayah } from "@/constant/data";
import { useState } from "react";

export default function Form() {
  const [kecamatan, setKecamatan] = useState<string | null>(null);
  const [nagari, setNagari] = useState<string | null>(null);

  const kecamatanData = wilayah.find((w) => w.kecamatan === kecamatan);
  const nagariData = kecamatanData?.nagari.find((n) => n.nama === nagari);

  return (
    <>
      <Select onValueChange={setKecamatan}>
        <SelectTrigger>
          <SelectValue placeholder="Pilih Kecamatan" />
        </SelectTrigger>
        <SelectContent>
          {wilayah.map((w) => (
            <SelectItem key={w.kecamatan} value={w.kecamatan}>
              {w.kecamatan}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {kecamatan && (
        <Select onValueChange={setNagari}>
          <SelectTrigger>
            <SelectValue placeholder="Pilih Nagari" />
          </SelectTrigger>
          <SelectContent>
            {kecamatanData?.nagari.map((n) => (
              <SelectItem key={n.nama} value={n.nama}>
                {n.nama}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      {nagari && (
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Pilih Jorong" />
          </SelectTrigger>
          <SelectContent>
            {nagariData?.jorong.map((j) => (
              <SelectItem key={j.nama} value={j.nama}>
                {j.nama}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </>
  );
}
