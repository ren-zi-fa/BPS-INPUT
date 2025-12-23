import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const data = await prisma.ibnuSinaRawatJalan.findMany({
      select: {
        id: true,
        bedah: true,
        bulan: true,
        gigi: true,
        kesehatan_anak: true,
        poli_kebidanan: true,
        umum: true,
      },
    });

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching ibnu sina rawat jalan:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengambil data" },
      { status: 500 }
    );
  }
}
