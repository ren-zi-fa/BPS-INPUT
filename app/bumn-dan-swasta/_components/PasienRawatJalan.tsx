"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function DataEntryForm() {
  const [formData, setFormData] = useState({
    clientName: "",
    email: "",
    password: "",
    dob: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error" | "info";
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "Submitting...", type: "info" });

    try {
      const res = await fetch("/api/bumn/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.status === "success") {
        setMessage({ text: data.message, type: "success" });
        setFormData({
          clientName: "",
          email: "",
          password: "",
          dob: "",
          notes: "",
        });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err: any) {
      setMessage({ text: "Error: " + err.message, type: "error" });
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(null), 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-4">
      <div>
        <Label htmlFor="clientName">Client Name</Label>
        <Input
          id="clientName"
          name="clientName"
          value={formData.clientName}
          onChange={handleInputChange}
          placeholder="Your Client Name"
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Your Email"
          required
        />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Your Password"
          required
        />
      </div>

      <div>
        <Label htmlFor="dob">Date of Birth</Label>
        <Input
          id="dob"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="notes">Additional Information</Label>
        <Textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          placeholder="Any additional information"
        />
      </div>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setFormData({
              clientName: "",
              email: "",
              password: "",
              dob: "",
              notes: "",
            });

            setMessage(null);
          }}
        >
          Cancel
        </Button>
      </div>

      {message && (
        <div
          className={cn(
            "p-2 rounded mt-2 font-semibold",
            message.type === "success" ? "bg-green-500 text-white" : "",
            message.type === "error" ? "bg-red-500 text-white" : "",
            message.type === "info" ? "bg-yellow-200 text-black" : ""
          )}
        >
          {message.text}
        </div>
      )}
    </form>
  );
}
