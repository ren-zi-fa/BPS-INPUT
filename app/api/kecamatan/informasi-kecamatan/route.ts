import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Cek apakah kecamatan sudah ada
    const existing = await prisma.kecamatan.findUnique({
      where: { nama: body.nama_kecamatan },
    });

    if (existing) {
      return NextResponse.json(
        { message: "Kecamatan sudah terdaftar" },
        { status: 409 }
      );
    }

    // 2. Jika belum ada, lanjut simpan
    const data = await prisma.$transaction(async (tx) => {
      const kecamatan = await tx.kecamatan.create({
        data: { nama: body.nama_kecamatan },
      });

      return tx.informasiKecamatan.create({
        data: {
          kecamatanId: kecamatan.id,
          batas_barat: body.batas_kecamatan_barat,
          batas_selatan: body.batas_kecamatan_selatan,
          batas_timur: body.batas_kecamatan_timur,
          batas_utara: body.batas_kecamatan_utara,
          ketinggian_dari_permukaan_laut: body.ketinggian_permukaan_laut,
          luas_km2: body.luas_kecamatan,
        },
      });
    });

    return NextResponse.json(
      { message: "Data berhasil disimpan", data },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
