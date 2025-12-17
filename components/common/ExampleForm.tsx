"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ExampleForm({ title }: { title: string }) {
  return (
    <>
      <div className="flex flex-col space-y-7">
        <h1>{title}</h1>

        <form className="space-y-4 w-md">
          <div className="space-y-2">
            <Label htmlFor="field1">Example Label 1</Label>
            <Input id="field1" type="text" placeholder="Input 1" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="field2">Example Label 2</Label>
            <Input id="field2" type="text" placeholder="Input 2" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="field3">Example Label 3</Label>
            <Input id="field3" type="text" placeholder="Input 3" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="field4">Example Label 4</Label>
            <Input id="field4" type="text" placeholder="Input 4" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="field5">Example Label 5</Label>
            <Input id="field5" type="text" placeholder="Input 5" />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
