import { useState } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { fasilitas } from "@/constant/menu";

type Props = {
  value: string;
  onChange: (val: string) => void;
  submittedItem?: string[];
};
export function FasilitasSelect({
  onChange,
  value,
  submittedItem = [],
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Label className="my-3 block">Fasilitas</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-full justify-between"
          >
            {value || "Pilih Fasilitas"}
            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Cari Fasilitas..." />
            <CommandEmpty>Tidak ditemukan.</CommandEmpty>
            <CommandGroup>
              {fasilitas.map((fasil) => {
                const isSubmitted = submittedItem.includes(fasil.label);

                return (
                  <CommandItem
                    key={fasil.key}
                    value={fasil.label}
                    disabled={isSubmitted}
                    onSelect={(val) => {
                      if (isSubmitted) return;
                      onChange(val);
                      setOpen(false);
                    }}
                    className={cn(
                      isSubmitted && "opacity-50 cursor-not-allowed"
                    )}
                  >
                    {isSubmitted ? (
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                    ) : (
                      <X
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === fasil.label ? "opacity-100" : "opacity-0"
                        )}
                      />
                    )}
                    {fasil.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
