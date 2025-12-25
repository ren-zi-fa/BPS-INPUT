-- CreateTable
CREATE TABLE "bpjs_kecamatan" (
    "id" SERIAL NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "kelasI" INTEGER NOT NULL,
    "kelasII" INTEGER NOT NULL,
    "kelasIII" INTEGER NOT NULL,
    "jumlah" INTEGER NOT NULL,

    CONSTRAINT "bpjs_kecamatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bpjs_kelompok_kecamatan" (
    "id" SERIAL NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "pbi" INTEGER NOT NULL,
    "non_pbi" INTEGER NOT NULL,
    "jumlah" INTEGER NOT NULL,

    CONSTRAINT "bpjs_kelompok_kecamatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ibnu_sina_rawat_jalan" (
    "id" SERIAL NOT NULL,
    "bulan" TEXT NOT NULL,
    "bedah" INTEGER NOT NULL,
    "kesehatan_anak" INTEGER NOT NULL,
    "poli_kebidanan" INTEGER NOT NULL,
    "gigi" INTEGER NOT NULL,
    "umum" INTEGER NOT NULL,

    CONSTRAINT "ibnu_sina_rawat_jalan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lanjutan_ibnu_sina_rawat_jalan" (
    "id" SERIAL NOT NULL,
    "bulan" TEXT NOT NULL,
    "penyakit_dalam" INTEGER NOT NULL,
    "jiwa" INTEGER NOT NULL,
    "tht" INTEGER NOT NULL,
    "mata" INTEGER NOT NULL,
    "neurologi" INTEGER NOT NULL,
    "fisioterapi" INTEGER NOT NULL,

    CONSTRAINT "lanjutan_ibnu_sina_rawat_jalan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ibnu_sina_rawat_inap" (
    "id" SERIAL NOT NULL,
    "uraian" TEXT NOT NULL,
    "jumlah_pasien" INTEGER NOT NULL,
    "hari_rawat" INTEGER NOT NULL,

    CONSTRAINT "ibnu_sina_rawat_inap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ibnu_sina_fasilitas" (
    "id" SERIAL NOT NULL,
    "fasilitas" TEXT NOT NULL,
    "dua_ribu_20" INTEGER NOT NULL,
    "dua_ribu_21" INTEGER NOT NULL,
    "dua_ribu_22" INTEGER NOT NULL,
    "dua_ribu_23" INTEGER NOT NULL,
    "dua_ribu_24" INTEGER NOT NULL,

    CONSTRAINT "ibnu_sina_fasilitas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ibnu_sina_kelahiran_kematian" (
    "id" SERIAL NOT NULL,
    "bulan" TEXT NOT NULL,
    "bersalin" INTEGER NOT NULL,
    "keguguran" INTEGER NOT NULL,

    CONSTRAINT "ibnu_sina_kelahiran_kematian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ibnu_sina_lanjutan_kelahiran_kematian" (
    "id" SERIAL NOT NULL,
    "bulan" TEXT NOT NULL,
    "hidup_laki_laki" INTEGER NOT NULL,
    "hidup_perempuan" INTEGER NOT NULL,
    "mati_laki_laki" INTEGER NOT NULL,
    "mati_perempuan" INTEGER NOT NULL,

    CONSTRAINT "ibnu_sina_lanjutan_kelahiran_kematian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "info_kecamatan" (
    "id" SERIAL NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "nama_camat" TEXT NOT NULL,
    "luas_kecamatan" TEXT NOT NULL,
    "batas_utara" TEXT NOT NULL,
    "batas_selatan" TEXT NOT NULL,
    "batas_barat" TEXT NOT NULL,
    "batas_timur" TEXT NOT NULL,
    "ketinggian_dari_permukaan_laut" TEXT NOT NULL,

    CONSTRAINT "info_kecamatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jumlah_nagari_jorong" (
    "id" SERIAL NOT NULL,
    "kecamatan" TEXT NOT NULL,
    "jumlah_nagari" INTEGER NOT NULL,
    "jumlah_jorong" INTEGER NOT NULL,

    CONSTRAINT "jumlah_nagari_jorong_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NamaKecamatan" (
    "id" INTEGER NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "NamaKecamatan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "bpjs_kecamatan_kecamatan_key" ON "bpjs_kecamatan"("kecamatan");

-- CreateIndex
CREATE UNIQUE INDEX "bpjs_kelompok_kecamatan_kecamatan_key" ON "bpjs_kelompok_kecamatan"("kecamatan");

-- CreateIndex
CREATE UNIQUE INDEX "ibnu_sina_rawat_jalan_bulan_key" ON "ibnu_sina_rawat_jalan"("bulan");

-- CreateIndex
CREATE UNIQUE INDEX "lanjutan_ibnu_sina_rawat_jalan_bulan_key" ON "lanjutan_ibnu_sina_rawat_jalan"("bulan");

-- CreateIndex
CREATE UNIQUE INDEX "ibnu_sina_rawat_inap_uraian_key" ON "ibnu_sina_rawat_inap"("uraian");

-- CreateIndex
CREATE UNIQUE INDEX "ibnu_sina_fasilitas_fasilitas_key" ON "ibnu_sina_fasilitas"("fasilitas");

-- CreateIndex
CREATE UNIQUE INDEX "ibnu_sina_kelahiran_kematian_bulan_key" ON "ibnu_sina_kelahiran_kematian"("bulan");

-- CreateIndex
CREATE UNIQUE INDEX "ibnu_sina_lanjutan_kelahiran_kematian_bulan_key" ON "ibnu_sina_lanjutan_kelahiran_kematian"("bulan");

-- CreateIndex
CREATE UNIQUE INDEX "info_kecamatan_kecamatan_key" ON "info_kecamatan"("kecamatan");

-- CreateIndex
CREATE UNIQUE INDEX "jumlah_nagari_jorong_kecamatan_key" ON "jumlah_nagari_jorong"("kecamatan");
