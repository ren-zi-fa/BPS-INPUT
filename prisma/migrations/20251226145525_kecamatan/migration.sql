/*
  Warnings:

  - You are about to drop the `jumlah_nagari_jorong` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `jmlh_jorong` to the `info_kecamatan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jmlh_nagari` to the `info_kecamatan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bpjs_kecamatan" ALTER COLUMN "kelasI" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "kelasII" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "kelasIII" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "jumlah" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "bpjs_kelompok_kecamatan" ALTER COLUMN "pbi" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "non_pbi" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "jumlah" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ibnu_sina_fasilitas" ALTER COLUMN "dua_ribu_20" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "dua_ribu_21" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "dua_ribu_22" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "dua_ribu_23" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "dua_ribu_24" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ibnu_sina_kelahiran_kematian" ALTER COLUMN "bersalin" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "keguguran" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ibnu_sina_lanjutan_kelahiran_kematian" ALTER COLUMN "hidup_laki_laki" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "hidup_perempuan" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "mati_laki_laki" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "mati_perempuan" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ibnu_sina_rawat_inap" ALTER COLUMN "jumlah_pasien" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "hari_rawat" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "ibnu_sina_rawat_jalan" ALTER COLUMN "bedah" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "kesehatan_anak" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "poli_kebidanan" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "gigi" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "umum" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "info_kecamatan" ADD COLUMN     "jmlh_jorong" INTEGER NOT NULL,
ADD COLUMN     "jmlh_nagari" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "lanjutan_ibnu_sina_rawat_jalan" ALTER COLUMN "penyakit_dalam" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "jiwa" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "tht" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "mata" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "neurologi" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "fisioterapi" SET DATA TYPE DOUBLE PRECISION;

-- DropTable
DROP TABLE "jumlah_nagari_jorong";

-- CreateTable
CREATE TABLE "Nagari" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "kepala_nagari" TEXT NOT NULL,
    "kecamatanId" INTEGER NOT NULL,

    CONSTRAINT "Nagari_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jorong" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "kepala_jorong" TEXT NOT NULL,
    "kecamatanId" INTEGER NOT NULL,

    CONSTRAINT "Jorong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sarana_pendidikan" (
    "id" SERIAL NOT NULL,
    "jenis" TEXT NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "kecamatanId" INTEGER NOT NULL,

    CONSTRAINT "sarana_pendidikan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sarana_peribadatan" (
    "id" SERIAL NOT NULL,
    "jenis" TEXT NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "kecamatanId" INTEGER NOT NULL,

    CONSTRAINT "sarana_peribadatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sarana_kesehatan" (
    "id" SERIAL NOT NULL,
    "jenis" TEXT NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "kecamatanId" INTEGER NOT NULL,

    CONSTRAINT "sarana_kesehatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gizi_buruk" (
    "id" SERIAL NOT NULL,
    "tahun" INTEGER NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "kecamatanId" INTEGER NOT NULL,

    CONSTRAINT "gizi_buruk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pasar" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "hari" TEXT NOT NULL,
    "kecamatanId" INTEGER NOT NULL,

    CONSTRAINT "pasar_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Nagari" ADD CONSTRAINT "Nagari_kecamatanId_fkey" FOREIGN KEY ("kecamatanId") REFERENCES "info_kecamatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jorong" ADD CONSTRAINT "Jorong_kecamatanId_fkey" FOREIGN KEY ("kecamatanId") REFERENCES "info_kecamatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sarana_pendidikan" ADD CONSTRAINT "sarana_pendidikan_kecamatanId_fkey" FOREIGN KEY ("kecamatanId") REFERENCES "info_kecamatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sarana_peribadatan" ADD CONSTRAINT "sarana_peribadatan_kecamatanId_fkey" FOREIGN KEY ("kecamatanId") REFERENCES "info_kecamatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sarana_kesehatan" ADD CONSTRAINT "sarana_kesehatan_kecamatanId_fkey" FOREIGN KEY ("kecamatanId") REFERENCES "info_kecamatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gizi_buruk" ADD CONSTRAINT "gizi_buruk_kecamatanId_fkey" FOREIGN KEY ("kecamatanId") REFERENCES "info_kecamatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pasar" ADD CONSTRAINT "pasar_kecamatanId_fkey" FOREIGN KEY ("kecamatanId") REFERENCES "info_kecamatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
