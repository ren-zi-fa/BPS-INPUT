import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const data = await prisma.bpjsKecamatan.findMany({
      select: {
        id: true,
        kecamatan: true,
        kelasI: true,
        kelasII: true,
        kelasIII: true,
        jumlah: true,
      },
    });

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching BpjsKecamatan:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengambil data" },
      { status: 500 }
    );
  }
}
