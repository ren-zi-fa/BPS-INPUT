import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LanjutanKelahiranKematian } from "@/lib/generated/prisma/client";

interface IProps {
  kelahirans_kematians: LanjutanKelahiranKematian[];
}

export default function LanjutanKelahiranKematianTable({
  kelahirans_kematians,
}: IProps) {
  const totalHidupLaki = kelahirans_kematians.reduce(
    (sum, item) => sum + item.hidup_laki_laki,
    0
  );

  const totalHidupPerempuan = kelahirans_kematians.reduce(
    (sum, item) => sum + item.hidup_perempuan,
    0
  );

  const totalMatiLaki = kelahirans_kematians.reduce(
    (sum, item) => sum + item.mati_laki_laki,
    0
  );

  const totalMatiPerempuan = kelahirans_kematians.reduce(
    (sum, item) => sum + item.mati_perempuan,
    0
  );

  return (
    <>
      <h2>
        Lanjutan Banyaknya Kelahiran, Lahir Hidup, Lahir Mati & Keguguran{" "}
      </h2>

      <Table className="border p-2 rounded-sm mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Bulan</TableHead>
            <TableHead>Hidup Laki-laki</TableHead>
            <TableHead>Hidup Perempuan</TableHead>
            <TableHead>Mati Laki-laki</TableHead>
            <TableHead>Mati Perempuan</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {kelahirans_kematians.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.bulan}</TableCell>
              <TableCell>{item.hidup_laki_laki.toLocaleString()}</TableCell>
              <TableCell>{item.hidup_perempuan.toLocaleString()}</TableCell>
              <TableCell>{item.mati_laki_laki.toLocaleString()}</TableCell>
              <TableCell>{item.mati_perempuan.toLocaleString()}</TableCell>
            </TableRow>
          ))}

          <TableRow className="font-bold">
            <TableCell colSpan={2}>Jumlah</TableCell>
            <TableCell>{totalHidupLaki.toLocaleString()}</TableCell>
            <TableCell>{totalHidupPerempuan.toLocaleString()}</TableCell>
            <TableCell>{totalMatiLaki.toLocaleString()}</TableCell>
            <TableCell>{totalMatiPerempuan.toLocaleString()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
