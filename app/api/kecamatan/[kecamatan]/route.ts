import { kecamatan } from "@/constant/menu";
import { prisma } from "@/lib/db";
import { KecamatanSchema } from "@/schema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ kecamatan: string }> }
) {
  try {
    const kecamatanParam = (await params).kecamatan;
    const parsed = decodeURIComponent(kecamatanParam);

    const kecamatan = await prisma.namaKecamatan.findFirst({
      where: { label: parsed },
    });

    if (!kecamatan) {
      return NextResponse.json(
        { message: "Kecamatan tidak terdaftar" },
        { status: 404 }
      );
    }
    const body = KecamatanSchema.parse(await req.json());

    const {
      batas_kec_barat,
      batas_kec_selatan,
      batas_kec_timur,
      batas_kec_utara,
      jorong,
      jmlh_jorong,
      jmlh_nagari,
      nama_camat,
      ketinggian_permukaan_laut,
      luas_kecamatan,
      nagari,
    } = body;

    await prisma.infoKecamatan.create({
      data: {
        kecamatan: kecamatanParam,
        nama_camat: nama_camat,
        luas_kecamatan,
        batas_utara: batas_kec_utara,
        batas_selatan: batas_kec_selatan,
        batas_barat: batas_kec_barat,
        batas_timur: batas_kec_timur,
        ketinggian_dari_permukaan_laut: ketinggian_permukaan_laut,

        nagari: {
          create: nagari.map((n) => ({
            nama: n.nama_nagari,
          })),
        },

        jorong: {
          create: jorong.map((j) => ({
            nama: j.nama_jorong,
          })),
        },
      },
    });

    return NextResponse.json(
      { message: "Data berhasil disimpan" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Input tidak valid", errors: error.flatten() },
        { status: 400 }
      );
    }

    console.error(error);
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
