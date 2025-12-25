"use client";
import { Input } from "@/components/ui/input";
import { wilayah } from "@/constant/data";

interface Iprops {
  nama_kec: string;
}
export default function FormKecamatan({ nama_kec }: Iprops) {
  const data = wilayah.find(
    (data) => data.kecamatan.toLocaleLowerCase() == nama_kec
  );
  console.log(data);
  return (
    <>
      <h1>{nama_kec.toLocaleUpperCase()}</h1>
      <div className="">
        <Input />
      </div>
    </>
  );
}
