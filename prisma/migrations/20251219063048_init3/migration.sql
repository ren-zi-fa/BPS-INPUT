/*
  Warnings:

  - Added the required column `jumlah` to the `bpjs_kecamatan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bpjs_kecamatan" ADD COLUMN     "jumlah" INTEGER NOT NULL;
