import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function JumlahNagariForm({ kecamatan }: { kecamatan: string }) {
  return (
    <>
      <h1>5. jumlah Nagari dan Jorong di Kecamatan {kecamatan}</h1>
      <div className="space-y-4">
        <Label>Kecamatan</Label>
        <Input type="text" defaultValue={kecamatan} disabled />
      </div>
      <div className="space-y-4">
        <Label>Jumlah Nagari</Label>
        <Input type="number" />
      </div>
      <div className="space-y-4">
        <Label>Jumlah Jorong</Label>
        <Input type="number" />
      </div>
    </>
  );
}
