-- CreateTable
CREATE TABLE "ibnu_sina_rawat_inap" (
    "id" SERIAL NOT NULL,
    "uraian" TEXT NOT NULL,
    "jumlah_pasien" INTEGER NOT NULL,
    "hari_rawat" INTEGER NOT NULL,

    CONSTRAINT "ibnu_sina_rawat_inap_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ibnu_sina_rawat_inap_uraian_key" ON "ibnu_sina_rawat_inap"("uraian");
