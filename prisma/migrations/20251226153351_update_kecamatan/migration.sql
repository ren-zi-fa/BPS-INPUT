/*
  Warnings:

  - You are about to drop the column `jenis` on the `sarana_kesehatan` table. All the data in the column will be lost.
  - You are about to drop the column `jumlah` on the `sarana_kesehatan` table. All the data in the column will be lost.
  - You are about to drop the column `jenis` on the `sarana_pendidikan` table. All the data in the column will be lost.
  - You are about to drop the column `jumlah` on the `sarana_pendidikan` table. All the data in the column will be lost.
  - You are about to drop the column `jenis` on the `sarana_peribadatan` table. All the data in the column will be lost.
  - You are about to drop the column `jumlah` on the `sarana_peribadatan` table. All the data in the column will be lost.
  - Added the required column `apotik` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahApotik` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahPoliklinikBalaiKesehatan` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahPolindes` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahPosyandu` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahPuskesmasPembantu` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahPuskesmasRawatInap` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahPuskesmasTanpaRawatInap` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahRumahSakit` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahRumahSakitBersalin` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `poliklinikBalaiKesehatan` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `polindes` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posyandu` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `puskesmasPembantu` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `puskesmasRawatInap` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `puskesmasTanpaRawatInap` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rumahSakit` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rumahSakitBersalin` to the `sarana_kesehatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MAN` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MI` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `MTsn` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `RA` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SD` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SMA` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SMK` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `SMP` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `TK` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahMAN` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahMI` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahMTsn` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahRA` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahSD` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahSMA` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahSMK` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahSMP` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahTK` to the `sarana_pendidikan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahMesjid` to the `sarana_peribadatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jumlahMushala` to the `sarana_peribadatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mesjid` to the `sarana_peribadatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mushala` to the `sarana_peribadatan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sarana_kesehatan" DROP COLUMN "jenis",
DROP COLUMN "jumlah",
ADD COLUMN     "apotik" TEXT NOT NULL,
ADD COLUMN     "jumlahApotik" INTEGER NOT NULL,
ADD COLUMN     "jumlahPoliklinikBalaiKesehatan" INTEGER NOT NULL,
ADD COLUMN     "jumlahPolindes" INTEGER NOT NULL,
ADD COLUMN     "jumlahPosyandu" INTEGER NOT NULL,
ADD COLUMN     "jumlahPuskesmasPembantu" INTEGER NOT NULL,
ADD COLUMN     "jumlahPuskesmasRawatInap" INTEGER NOT NULL,
ADD COLUMN     "jumlahPuskesmasTanpaRawatInap" INTEGER NOT NULL,
ADD COLUMN     "jumlahRumahSakit" INTEGER NOT NULL,
ADD COLUMN     "jumlahRumahSakitBersalin" INTEGER NOT NULL,
ADD COLUMN     "poliklinikBalaiKesehatan" TEXT NOT NULL,
ADD COLUMN     "polindes" TEXT NOT NULL,
ADD COLUMN     "posyandu" TEXT NOT NULL,
ADD COLUMN     "puskesmasPembantu" TEXT NOT NULL,
ADD COLUMN     "puskesmasRawatInap" TEXT NOT NULL,
ADD COLUMN     "puskesmasTanpaRawatInap" TEXT NOT NULL,
ADD COLUMN     "rumahSakit" TEXT NOT NULL,
ADD COLUMN     "rumahSakitBersalin" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "sarana_pendidikan" DROP COLUMN "jenis",
DROP COLUMN "jumlah",
ADD COLUMN     "MAN" TEXT NOT NULL,
ADD COLUMN     "MI" TEXT NOT NULL,
ADD COLUMN     "MTsn" TEXT NOT NULL,
ADD COLUMN     "RA" TEXT NOT NULL,
ADD COLUMN     "SD" TEXT NOT NULL,
ADD COLUMN     "SMA" TEXT NOT NULL,
ADD COLUMN     "SMK" TEXT NOT NULL,
ADD COLUMN     "SMP" TEXT NOT NULL,
ADD COLUMN     "TK" TEXT NOT NULL,
ADD COLUMN     "jumlahMAN" INTEGER NOT NULL,
ADD COLUMN     "jumlahMI" INTEGER NOT NULL,
ADD COLUMN     "jumlahMTsn" INTEGER NOT NULL,
ADD COLUMN     "jumlahRA" INTEGER NOT NULL,
ADD COLUMN     "jumlahSD" INTEGER NOT NULL,
ADD COLUMN     "jumlahSMA" INTEGER NOT NULL,
ADD COLUMN     "jumlahSMK" INTEGER NOT NULL,
ADD COLUMN     "jumlahSMP" INTEGER NOT NULL,
ADD COLUMN     "jumlahTK" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "sarana_peribadatan" DROP COLUMN "jenis",
DROP COLUMN "jumlah",
ADD COLUMN     "jumlahMesjid" INTEGER NOT NULL,
ADD COLUMN     "jumlahMushala" INTEGER NOT NULL,
ADD COLUMN     "mesjid" TEXT NOT NULL,
ADD COLUMN     "mushala" TEXT NOT NULL;
