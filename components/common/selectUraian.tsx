"use client";

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
import { uraian } from "@/constant/data";

type Props = {
  value: string;
  onChange: (val: string) => void;
  submittedItem?: string[];
};

export function UraianSelect({ value, onChange, submittedItem = [] }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Label className="my-3 block">Uraian</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-full justify-between"
          >
            {value || "Pilih Uraian"}
            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Cari Uraian..." />
            <CommandEmpty>Tidak ditemukan.</CommandEmpty>
            <CommandGroup>
              {uraian.map((itm) => {
                const isSubmitted = submittedItem.includes(itm.label);

                return (
                  <CommandItem
                    key={itm.key}
                    value={itm.label}
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
                          value === itm.label ? "opacity-100" : "opacity-0"
                        )}
                      />
                    )}
                    {itm.label}
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
