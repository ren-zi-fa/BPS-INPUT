import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const data = await prisma.lanjutanIbnuSinaRawatJalan.findMany({
      select: {
        id: true,
        bulan: true,
        fisioterapi: true,
        jiwa: true,
        mata: true,
        neurologi: true,
        penyakit_dalam: true,
        tht: true,
      },
    });

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching lanjutan ibnu sina rawat jalan:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan saat mengambil data" },
      { status: 500 }
    );
  }
}
