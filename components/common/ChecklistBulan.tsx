import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { bulan } from "@/constant/menu";

export function BulanCheckbox() {
  const toggleBulan = (label: string) => {};

  return (
    <div>
      <Label className="mb-3 tracking-wider block text-green-500  text-xs">
        Data bulan Yang Sudah Diinputkan otomatis terceklis
      </Label>

      <div className="flex flex-col gap-3">
        {bulan.map((kec) => (
          <div key={kec.key} className="flex items-center gap-2">
            <Checkbox
              disabled
              id={`kec-${kec.key}`}
              onCheckedChange={() => toggleBulan(kec.label)}
            />
            <Label htmlFor={`kec-${kec.key}`} className="cursor-pointer">
              {kec.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
