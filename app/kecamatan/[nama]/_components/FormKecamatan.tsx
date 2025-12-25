"use client";
import { InputTextField } from "@/components/common/boilerplate/InputField";
import { Button } from "@/components/ui/button";
import { useFormPersistSession } from "@/helper/sessionField";
import { KecamatanForm, KecamatanSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

interface Iprops {
  nama_kec: string;
}

const URL = "/api/";
export default function FormKecamatan({ nama_kec }: Iprops) {
  const form = useForm<KecamatanForm>({
    resolver: zodResolver(KecamatanSchema),
    defaultValues: {
      nama_kecamatan: "",
      luas_kecamatan: "",
      ketinggian_permukaan_laut: "",
      batas_kec_barat: "",
      batas_kec_selatan: "",
      batas_kec_timur: "",
      batas_kec_utara: "",
    },
  });

  useFormPersistSession(form, `formKecamatan ${nama_kec}`);

  const onSubmit = async (data: KecamatanForm) => {
    alert(JSON.stringify(data));
    await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    form.reset();
  };

  return (
    <>
      <h1 className="capitalize text-center mb-10">{nama_kec}</h1>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <InputTextField
            name="nama_kecamatan"
            label="Nama Kecamatan"
            form={form}
          />
          <InputTextField
            form={form}
            name="luas_kecamatan"
            label="Luas Kecamatan"
          />
          <InputTextField
            name="ketinggian_permukaan_laut"
            form={form}
            label="Ketinggian Permukaan Laut"
          />
          <InputTextField
            name="batas_kec_barat"
            label="Batas Barat"
            form={form}
          />
          <InputTextField
            name="batas_kec_selatan"
            label="Batas Selatan"
            form={form}
          />
          <InputTextField
            name="batas_kec_timur"
            label="Batas Timur"
            form={form}
          />
          <InputTextField
            name="batas_kec_utara"
            label="Batas Utara"
            form={form}
          />

          <Button type="submit" className="w-full">
            Simpan Data
          </Button>
        </form>
      </FormProvider>
    </>
  );
}
