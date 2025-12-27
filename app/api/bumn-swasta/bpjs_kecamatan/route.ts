/* eslint-disable @typescript-eslint/no-explicit-any*/

import { prisma } from "@/lib/db";
import { BPJSKecamatanSchema } from "@/schema";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

export async function GET() {
  try {
    const data = (await prisma.bpjsKecamatan.findMany()).map(
      (item) => item.kecamatan
    );
    return NextResponse.json({ message: "Data kecamatan ", data: data });
  } catch (error) {
    return NextResponse.json(
      { message: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = BPJSKecamatanSchema.parse(await req.json());
    const { kecamatan, kelas1, kelas2, kelas3 } = body;
    if (!kecamatan) {
      return NextResponse.json(
        { message: "Kecamatan wajib diisi" },
        { status: 400 }
      );
    }

    const kelasI = kelas1;
    const kelasII = kelas2;
    const kelasIII = kelas3;

    const jumlah = kelasI + kelasII + kelasIII;

    const data = await prisma.bpjsKecamatan.create({
      data: {
        kecamatan,
        kelasI,
        kelasII,
        kelasIII,
        jumlah,
      },
    });

    return NextResponse.json(
      { message: "Data berhasil disimpan", data },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.code === "P2002") {
      return NextResponse.json(
        { message: "Data kecamatan untuk tahun ini sudah ada" },
        { status: 409 }
      );
    }
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Input tidak valid", errors: error.flatten() },
        { status: 400 }
      );
    }
  }
}
