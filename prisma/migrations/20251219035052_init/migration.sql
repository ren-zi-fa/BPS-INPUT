-- CreateTable
CREATE TABLE "bpjs_kecamatan" (
    "id" SERIAL NOT NULL,
    "tahun" INTEGER NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "kelasI" INTEGER NOT NULL,
    "kelasII" INTEGER NOT NULL,
    "kelasIII" INTEGER NOT NULL,
    "jumlah" INTEGER,

    CONSTRAINT "bpjs_kecamatan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bpjs_kecamatan_tahun_kecamatan_key" ON "bpjs_kecamatan"("tahun", "kecamatan");
