"use client";

import JumlahFasilitas from "./JumlahFasilitas";
import KehidupanForm from "./KehidupanForm";
import KelahiranForm from "./KelahiranForm";
import PasienRawatInap from "./PasienRawatInap";
import PasienRawatJalan from "./PasienRawatJalan";

export default function IndexFormIbnuSina() {
  return (
    <div className="space-y-4 mx-auto">
      <PasienRawatJalan />
      <PasienRawatInap />
      <JumlahFasilitas />
      <KehidupanForm />
      <KelahiranForm />
    </div>
  );
}
