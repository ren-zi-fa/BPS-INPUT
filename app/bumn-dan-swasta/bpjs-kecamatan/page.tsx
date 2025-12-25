"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { BPJSKecamatanSchema, BpjsKecamatanForm } from "@/schema";
import { useDataSubmitted } from "@/hooks/useDataSubmitted";
import { KecamatanCheckboxSection } from "@/components/common/loading/KecamatanCheckBoxSection";
import ButtonBack from "@/components/common/boilerplate/ButtonBack";
import { KecamatanSelect } from "@/components/common/SelectKecamatan";
import { InputNumericField } from "@/components/common/boilerplate/InputNumericField";

export default function Page() {
  const [open, setOpen] = useState(false);

  const {
    data: submittedItem,
    loading,
    refetch,
  } = useDataSubmitted("/api/bumn-swasta/bpjs_kecamatan");

  const form = useForm<BpjsKecamatanForm>({
    resolver: zodResolver(BPJSKecamatanSchema),
    defaultValues: {
      kecamatan: "",
      kelas1: 0,
      kelas2: 0,
      kelas3: 0,
    },
  });

  const onSubmit = async (data: BpjsKecamatanForm) => {
    const payload = {
      kecamatan: data.kecamatan,
      kelas1: data.kelas1,
      kelas2: data.kelas2,
      kelas3: data.kelas3,
    };

    await fetch("/api/bumn-swasta/bpjs_kecamatan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    refetch();
    form.reset();
  };

  return (
    <div className="mt-10">
      <h1 className="text-xl text-center font-semibold">BPJS KECAMATAN</h1>
      <ButtonBack linkUrl="/bumn-dan-swasta" />

      <div className="flex flex-col md:flex-row gap-3 border rounded-sm p-4 mt-20">
        <KecamatanCheckboxSection loading={loading} data={submittedItem} />

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <KecamatanSelect
              form={form}
              open={open}
              setOpen={setOpen}
              submittedItem={submittedItem}
            />
            <InputNumericField form={form} label="kelas I" name="kelas1" />
            <InputNumericField form={form} label="kelas II" name="kelas2" />
            <InputNumericField form={form} label="kelas III" name="kelas3" />

            <Button type="submit" className="w-full">
              Simpan Data
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
