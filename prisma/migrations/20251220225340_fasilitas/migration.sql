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

-- CreateIndex
CREATE UNIQUE INDEX "ibnu_sina_fasilitas_fasilitas_key" ON "ibnu_sina_fasilitas"("fasilitas");
