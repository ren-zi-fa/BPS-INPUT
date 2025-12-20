import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { uraian } from "@/constant/data";

type Props = {
  submittedItem?: string[];
};
export function UraianCheckbox({ submittedItem }: Props) {
  return (
    <div>
      <Label className="mb-3 tracking-wider block text-green-500  text-xs">
        Data Uraian Yang Sudah Diinputkan otomatis terceklis
      </Label>

      <div className="flex flex-col gap-3">
        {uraian.map((itm) => (
          <div key={itm.key} className="flex items-center gap-2">
            <Checkbox
              disabled
              id={`itm-${itm.key}`}
              checked={submittedItem?.includes(itm.label)}
            />
            <Label htmlFor={`itm-${itm.key}`} className="cursor-pointer">
              {itm.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
