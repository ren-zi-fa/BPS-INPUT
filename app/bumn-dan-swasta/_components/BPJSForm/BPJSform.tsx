"use client";

import BpjsKecamatanStats from "./BpjsKecamatanStats";
import BpjsKelompokKecamatanStats from "./BpjsKelompokKecamatanStats";

export default function BpjsForm() {
  return (
    <div className="space-y-4 max-w-xl mx-auto">
      <BpjsKecamatanStats />
      <BpjsKelompokKecamatanStats />
    </div>
  );
}
