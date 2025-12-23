/*
  Warnings:

  - You are about to drop the `InformasiKecamatan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JumlahJorongNagariKecamatan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Kecamatan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "InformasiKecamatan" DROP CONSTRAINT "InformasiKecamatan_kecamatanId_fkey";

-- DropForeignKey
ALTER TABLE "JumlahJorongNagariKecamatan" DROP CONSTRAINT "JumlahJorongNagariKecamatan_kecamatanId_fkey";

-- DropTable
DROP TABLE "InformasiKecamatan";

-- DropTable
DROP TABLE "JumlahJorongNagariKecamatan";

-- DropTable
DROP TABLE "Kecamatan";
