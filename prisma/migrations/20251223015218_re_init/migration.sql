/*
  Warnings:

  - Changed the type of `jumlah_jorong` on the `JumlahJorongNagariKecamatan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `jumlah_nagari` on the `JumlahJorongNagariKecamatan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "JumlahJorongNagariKecamatan" DROP COLUMN "jumlah_jorong",
ADD COLUMN     "jumlah_jorong" INTEGER NOT NULL,
DROP COLUMN "jumlah_nagari",
ADD COLUMN     "jumlah_nagari" INTEGER NOT NULL;
