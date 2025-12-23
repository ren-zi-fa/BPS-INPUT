import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const data = await prisma.kelahiranKematian.findMany({
      select: {
        id: true,
        bulan: true,
        bersalin: true,
        keguguran: true,
      },
    });

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching kelahiran kematian:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengambil data" },
      { status: 500 }
    );
  }
}
