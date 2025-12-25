import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const data = await prisma.lanjutanKelahiranKematian.findMany({
      select: {
        id: true,
        bulan: true,
        hidup_laki_laki: true,
        hidup_perempuan: true,
        mati_laki_laki: true,
        mati_perempuan: true,
      },
    });

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching lanjutan kelahiran kematian:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengambil data" },
      { status: 500 }
    );
  }
}
