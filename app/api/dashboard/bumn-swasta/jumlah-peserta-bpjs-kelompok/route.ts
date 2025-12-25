import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const data = await prisma.bpjsKelompokKecamatan.findMany({
      select: {
        id: true,
        kecamatan: true,
        jumlah: true,
        non_pbi: true,
        pbi: true,
      },
    });

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching BPJS Kelompok kecamatan:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengambil data" },
      { status: 500 }
    );
  }
}
