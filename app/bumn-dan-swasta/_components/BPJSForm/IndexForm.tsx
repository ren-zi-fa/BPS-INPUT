"use client";

import BpjsKecamatanStats from "./BpjsKecamatanStats";
import BpjsKelompokKecamatanStats from "./BpjsKelompokKecamatanStats";

export default function IndexFormBPJS() {
  return (
    <div className="space-y-4 mx-auto">
      <p>
        Jumlah Peserta BPJS Kesehatan dan Rata-rata Iuran Per Peserta Menurut
        Kecamatan di Kabupaten Pasaman Barat, 2025
      </p>
      <BpjsKecamatanStats />
      <BpjsKelompokKecamatanStats />
    </div>
  );
}
