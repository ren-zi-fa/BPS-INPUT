import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kecamatan",
  description: "Form Input",
};
export default async function BUMNdanSwastaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl px-4">{children}</div>
    </div>
  );
}
