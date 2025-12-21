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

-- CreateIndex
CREATE UNIQUE INDEX "ibnu_sina_kelahiran_kematian_bulan_key" ON "ibnu_sina_kelahiran_kematian"("bulan");

-- CreateIndex
CREATE UNIQUE INDEX "ibnu_sina_lanjutan_kelahiran_kematian_bulan_key" ON "ibnu_sina_lanjutan_kelahiran_kematian"("bulan");
