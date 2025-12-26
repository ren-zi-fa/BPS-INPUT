"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FileIconLink } from "@/components/common/FileIconLink";

type Kecamatan = {
  label: string;
};

export default function KecamatanList({ data }: { data: Kecamatan[] }) {
  const [query, setQuery] = useState("");

  const filtered = data.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Input
        placeholder="Cari Kecamatan"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="grid grid-cols-4 gap-2">
        {filtered.map((item) => (
          <FileIconLink
            key={item.label}
            href={`/kecamatan/${item.label.toLowerCase()}`}
            label={item.label}
          />
        ))}
      </div>
    </>
  );
}
