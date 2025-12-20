import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { fasilitas } from "@/constant/menu";
type Props = {
  submittedItem?: string[];
};
export function FasilitasCheckbox({ submittedItem }: Props) {
  return (
    <div>
      <Label className="mb-3 tracking-wider block text-green-500  text-xs">
        Data fasilitas Yang Sudah Diinputkan otomatis terceklis
      </Label>

      <div className="flex flex-col gap-3">
        {fasilitas.map((fasi) => (
          <div key={fasi.key} className="flex items-center gap-2">
            <Checkbox
              disabled
              id={`fasi-${fasi.key}`}
              checked={submittedItem?.includes(fasi.label)}
            />
            <Label htmlFor={`fasi-${fasi.key}`} className="cursor-pointer">
              {fasi.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
