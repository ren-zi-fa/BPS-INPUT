import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { KelahiranKematian } from "@/lib/generated/prisma/client";

interface IProps {
  kelahirans_kematians: KelahiranKematian[];
}

export default function KelahiranKematianTable({
  kelahirans_kematians,
}: IProps) {
  const totalBersalin = kelahirans_kematians.reduce(
    (sum, item) => sum + item.bersalin,
    0
  );

  const totalKeguguran = kelahirans_kematians.reduce(
    (sum, item) => sum + item.keguguran,
    0
  );

  return (
    <>
      <h2>Banyaknya Kelahiran, Lahir Hidup, Lahir Mati & Keguguran </h2>

      <Table className="border p-2 rounded-sm mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Bulan</TableHead>
            <TableHead>Bersalin</TableHead>
            <TableHead>Keguguran</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {kelahirans_kematians.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.bulan}</TableCell>
              <TableCell>{item.bersalin.toLocaleString()}</TableCell>
              <TableCell>{item.keguguran.toLocaleString()}</TableCell>
            </TableRow>
          ))}

          <TableRow className="font-bold">
            <TableCell colSpan={2}>Jumlah</TableCell>
            <TableCell>{totalBersalin.toLocaleString()}</TableCell>
            <TableCell>{totalKeguguran.toLocaleString()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
