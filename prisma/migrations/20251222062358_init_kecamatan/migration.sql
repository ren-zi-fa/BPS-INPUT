/*
  Warnings:

  - You are about to drop the `JumlahNagariJorongDiKecamatan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `nama_camat` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "JumlahNagariJorongDiKecamatan" DROP CONSTRAINT "JumlahNagariJorongDiKecamatan_kecamatanId_fkey";

-- DropForeignKey
ALTER TABLE "nama_camat" DROP CONSTRAINT "nama_camat_kecamatanId_fkey";

-- DropTable
DROP TABLE "JumlahNagariJorongDiKecamatan";

-- DropTable
DROP TABLE "nama_camat";

-- CreateTable
CREATE TABLE "DataKecamatan" (
    "id" SERIAL NOT NULL,
    "kecamatanId" INTEGER NOT NULL,
    "luas_km2" TEXT NOT NULL,
    "ketinggian" TEXT NOT NULL,
    "batas_utara" TEXT NOT NULL,
    "batas_selatan" TEXT NOT NULL,
    "batas_barat" TEXT NOT NULL,
    "batas_timur" TEXT NOT NULL,
    "jumlah_nagari" INTEGER NOT NULL,
    "jumlah_jorong" INTEGER NOT NULL,
    "nama_camat" TEXT NOT NULL,
    "tahun" INTEGER NOT NULL,

    CONSTRAINT "DataKecamatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nagari" (
    "id" SERIAL NOT NULL,
    "kecamatanId" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "wali_nagari" TEXT NOT NULL,

    CONSTRAINT "Nagari_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jorong" (
    "id" SERIAL NOT NULL,
    "nagariId" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "kepala_jorong" TEXT NOT NULL,

    CONSTRAINT "Jorong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SaranaPendidikan" (
    "id" SERIAL NOT NULL,
    "kecamatanId" INTEGER NOT NULL,
    "jenis" TEXT NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "tahun" INTEGER NOT NULL,

    CONSTRAINT "SaranaPendidikan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SaranaKesehatan" (
    "id" SERIAL NOT NULL,
    "kecamatanId" INTEGER NOT NULL,
    "jenis" TEXT NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "tahun" INTEGER NOT NULL,

    CONSTRAINT "SaranaKesehatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SaranaIbadah" (
    "id" SERIAL NOT NULL,
    "kecamatanId" INTEGER NOT NULL,
    "jenis" TEXT NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "tahun" INTEGER NOT NULL,

    CONSTRAINT "SaranaIbadah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pasar" (
    "id" SERIAL NOT NULL,
    "kecamatanId" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "hari" TEXT NOT NULL,

    CONSTRAINT "Pasar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DataKecamatan_kecamatanId_key" ON "DataKecamatan"("kecamatanId");

-- AddForeignKey
ALTER TABLE "DataKecamatan" ADD CONSTRAINT "DataKecamatan_kecamatanId_fkey" FOREIGN KEY ("kecamatanId") REFERENCES "Kecamatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nagari" ADD CONSTRAINT "Nagari_kecamatanId_fkey" FOREIGN KEY ("kecamatanId") REFERENCES "Kecamatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jorong" ADD CONSTRAINT "Jorong_nagariId_fkey" FOREIGN KEY ("nagariId") REFERENCES "Nagari"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaranaPendidikan" ADD CONSTRAINT "SaranaPendidikan_kecamatanId_fkey" FOREIGN KEY ("kecamatanId") REFERENCES "Kecamatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaranaKesehatan" ADD CONSTRAINT "SaranaKesehatan_kecamatanId_fkey" FOREIGN KEY ("kecamatanId") REFERENCES "Kecamatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaranaIbadah" ADD CONSTRAINT "SaranaIbadah_kecamatanId_fkey" FOREIGN KEY ("kecamatanId") REFERENCES "Kecamatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pasar" ADD CONSTRAINT "Pasar_kecamatanId_fkey" FOREIGN KEY ("kecamatanId") REFERENCES "Kecamatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
