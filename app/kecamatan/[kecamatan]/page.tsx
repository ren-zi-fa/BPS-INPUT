"use client";

import ExampleForm from "@/components/common/ExampleForm";
import { kecamatan as data_kec } from "@/constant/menu";
import { useParams, useSearchParams } from "next/navigation";

export default function InputKecamatan() {
  const params = useParams<{ nagari?: string }>();

  return (
    <div className="flex flex-col items-center justify-center mt-10">
  
    </div>
  );
}
