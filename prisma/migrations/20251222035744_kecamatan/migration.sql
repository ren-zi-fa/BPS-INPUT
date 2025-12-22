-- CreateTable
CREATE TABLE "Kecamatan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Kecamatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nama_camat" (
    "id" SERIAL NOT NULL,
    "kecamatanId" INTEGER NOT NULL,
    "tahun" INTEGER NOT NULL,
    "nama_camat" TEXT NOT NULL,

    CONSTRAINT "nama_camat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JumlahNagariJorongDiKecamatan" (
    "id" SERIAL NOT NULL,
    "kecamatanId" INTEGER NOT NULL,
    "jumlah_nagari" INTEGER NOT NULL,
    "jumlah_jorong" INTEGER NOT NULL,

    CONSTRAINT "JumlahNagariJorongDiKecamatan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Kecamatan_nama_key" ON "Kecamatan"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "nama_camat_kecamatanId_tahun_key" ON "nama_camat"("kecamatanId", "tahun");

-- CreateIndex
CREATE UNIQUE INDEX "JumlahNagariJorongDiKecamatan_kecamatanId_key" ON "JumlahNagariJorongDiKecamatan"("kecamatanId");

-- AddForeignKey
ALTER TABLE "nama_camat" ADD CONSTRAINT "nama_camat_kecamatanId_fkey" FOREIGN KEY ("kecamatanId") REFERENCES "Kecamatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JumlahNagariJorongDiKecamatan" ADD CONSTRAINT "JumlahNagariJorongDiKecamatan_kecamatanId_fkey" FOREIGN KEY ("kecamatanId") REFERENCES "Kecamatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
