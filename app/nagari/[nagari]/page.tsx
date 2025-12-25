"use client";

import { kecamatan as data_kec } from "@/constant/menu";
import { useParams, useSearchParams } from "next/navigation";

export default function InputNagari() {
  const searchParams = useSearchParams();
  const params = useParams<{ nagari?: string }>();
  const kecamatanLabel = searchParams.get("kecamatan");

  const kecamatan = data_kec.find((k) => k.label === kecamatanLabel);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <p>Kecamatan: {kecamatan?.label}</p>
    </div>
  );
}
