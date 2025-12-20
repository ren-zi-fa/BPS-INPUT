import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent } from "react";

interface InputProps {
  name: string;
  value: string;
  label: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export function InputForm({
  name,
  value,
  label,
  type = "number",
  onChange,
}: InputProps) {
  return (
    <div>
      <Label className="my-3" htmlFor={name}>
        {label}
      </Label>
      <Input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
