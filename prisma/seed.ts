import { prisma } from "@/lib/db";

async function main() {
  const kecamatan = [
    { id: 1, label: "sungai beremas" },
    { id: 2, label: "ranah batahan" },
    { id: 3, label: "koto balingka" },
    { id: 4, label: "sungai aur" },
    { id: 5, label: "lembah melintang" },
    { id: 6, label: "gunung tuleh" },
    { id: 7, label: "talamau" },
    { id: 8, label: "pasaman" },
    { id: 9, label: "luhak nan duo" },
    { id: 10, label: "sasak ranah pasisie" },
    { id: 11, label: "kinali" },
  ];

  await prisma.namaKecamatan.createMany({
    data: kecamatan,
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
