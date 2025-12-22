/*
  Warnings:

  - You are about to drop the `DataKecamatan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Jorong` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Nagari` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pasar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SaranaIbadah` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SaranaKesehatan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SaranaPendidikan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DataKecamatan" DROP CONSTRAINT "DataKecamatan_kecamatanId_fkey";

-- DropForeignKey
ALTER TABLE "Jorong" DROP CONSTRAINT "Jorong_nagariId_fkey";

-- DropForeignKey
ALTER TABLE "Nagari" DROP CONSTRAINT "Nagari_kecamatanId_fkey";

-- DropForeignKey
ALTER TABLE "Pasar" DROP CONSTRAINT "Pasar_kecamatanId_fkey";

-- DropForeignKey
ALTER TABLE "SaranaIbadah" DROP CONSTRAINT "SaranaIbadah_kecamatanId_fkey";

-- DropForeignKey
ALTER TABLE "SaranaKesehatan" DROP CONSTRAINT "SaranaKesehatan_kecamatanId_fkey";

-- DropForeignKey
ALTER TABLE "SaranaPendidikan" DROP CONSTRAINT "SaranaPendidikan_kecamatanId_fkey";

-- DropTable
DROP TABLE "DataKecamatan";

-- DropTable
DROP TABLE "Jorong";

-- DropTable
DROP TABLE "Nagari";

-- DropTable
DROP TABLE "Pasar";

-- DropTable
DROP TABLE "SaranaIbadah";

-- DropTable
DROP TABLE "SaranaKesehatan";

-- DropTable
DROP TABLE "SaranaPendidikan";

-- CreateTable
CREATE TABLE "InformasiKecamatan" (
    "id" SERIAL NOT NULL,
    "kecamatanId" INTEGER NOT NULL,
    "luas_km2" TEXT NOT NULL,
    "ketinggian_dari_permukaan_laut" TEXT NOT NULL,
    "batas_utara" TEXT NOT NULL,
    "batas_selatan" TEXT NOT NULL,
    "batas_barat" TEXT NOT NULL,
    "batas_timur" TEXT NOT NULL,

    CONSTRAINT "InformasiKecamatan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InformasiKecamatan_kecamatanId_key" ON "InformasiKecamatan"("kecamatanId");

-- AddForeignKey
ALTER TABLE "InformasiKecamatan" ADD CONSTRAINT "InformasiKecamatan_kecamatanId_fkey" FOREIGN KEY ("kecamatanId") REFERENCES "Kecamatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
