/*
  Warnings:

  - You are about to drop the column `tahun` on the `bpjs_kecamatan` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[kecamatan]` on the table `bpjs_kecamatan` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "bpjs_kecamatan_tahun_kecamatan_key";

-- AlterTable
ALTER TABLE "bpjs_kecamatan" DROP COLUMN "tahun";

-- CreateIndex
CREATE UNIQUE INDEX "bpjs_kecamatan_kecamatan_key" ON "bpjs_kecamatan"("kecamatan");
