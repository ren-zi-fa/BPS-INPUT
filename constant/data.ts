const uraian = [
  { key: 1, label: "VIP" },
  { key: 2, label: "Inap Klas" },
  { key: 3, label: "Inap Interne" },
  { key: 4, label: "Inap Bedah" },
  { key: 5, label: "Inap Mata" },
  { key: 6, label: "Inap Anak" },
  { key: 7, label: "Inap Bayi" },
  { key: 8, label: "Inap Obstetri" },
  { key: 9, label: "Inap Paru" },
];
const wilayah = [
  {
    kecamatan: "Gunung Tuleh",
    nagari: [
      {
        nama: "Rabi Jonggor",
        jorong: [
          { nama: "Paraman Ampalu" },
          { nama: "Paraman Ampalu Selatan" },
          { nama: "Paraman Ampalu Utara" },
          { nama: "Paraman Ampalu Barat" },
        ],
      },
      {
        nama: "Seberang Kenaikan",
        jorong: [
          { nama: "Tanjung Durian" },
          { nama: "Sungai Aur I" },
          { nama: "Sungai Aur II" },
          { nama: "Bulu Laga" },
          { nama: "Talang Kuning" },
          { nama: "Guo" },
          { nama: "Siligawan Gadang" },
        ],
      },
      {
        nama: "Bahoras",
        jorong: [
          { nama: "Bandar" },
          { nama: "Huta Tonga" },
          { nama: "Rabi Jonggor" },
          { nama: "Sitabu" },
        ],
      },
      {
        nama: "Ranah Sungai Magelang",
        jorong: [
          { nama: "Sungai Magelang" },
          { nama: "Air Dingin" },
          { nama: "Kampung Pinang" },
          { nama: "Siligawan Kecil" },
        ],
      },
      {
        nama: "Muara Kiawai",
        jorong: [{ nama: "Sudirman" }],
      },
      {
        nama: "Muara Kiawai Barat",
        jorong: [
          { nama: "Simpang Tiga Alin" },
          { nama: "Simpang Tiga Alin Tagak" },
          { nama: "Kampung Alang" },
          { nama: "Kampung Alang Tuleh" },
        ],
      },
      {
        nama: "Muara Kiawai Hilir",
        jorong: [
          { nama: "Kartini" },
          { nama: "Kartini Lobuah Baru" },
          { nama: "Kartini Singkarak" },
          { nama: "Rawa Bangun" },
          { nama: "Kartini Boncah Kobun" },
        ],
      },
    ],
  },
  {
    kecamatan: "Ranah Batahan",
    nagari: [
      {
        nama: "Nagari Batahan",
        jorong: [
          { nama: "Silaping" },
          { nama: "Silaping Baru" },
          { nama: "Silaping Utama" },
          { nama: "Rao-Rao" },
          { nama: "Pagaran Tengah" },
          { nama: "Paninjauan" },
        ],
      },
      {
        nama: "Nagari Batahan Utara",
        jorong: [
          { nama: "Sawah Mudik" },
          { nama: "Sigantang" },
          { nama: "Tanjung Larangan" },
          { nama: "Taming Julu" },
          { nama: "Paraman Sawah" },
          { nama: "Taming Tengah" },
          { nama: "Silayang Julu" },
        ],
      },
      {
        nama: "Nagari Batahan Selatan",
        jorong: [
          { nama: "Siduampan" },
          { nama: "Air Talang" },
          { nama: "Muara Air Talang" },
        ],
      },
      {
        nama: "Nagari Batahan Tengah",

        jorong: [
          { nama: "Muara Mais" },
          { nama: "Silayang" },
          { nama: "Lubuk Gobing" },
          { nama: "Lubuk Gobing Damai" },
          { nama: "Simpang Tolang Baru" },
          { nama: "Simpang Tolang" },
          { nama: "Pintu Padang" },
          { nama: "Gunung Tua" },
        ],
      },
      {
        nama: "Nagari Batahan Barat",

        jorong: [
          { nama: "Kampung Baru" },
          { nama: "Kampung Mesjid" },
          { nama: "Air Napal" },
          { nama: "Taming Batahan" },
          { nama: "Pasir Panjang" },
        ],
      },
      {
        nama: "Nagari Desa Baru",

        jorong: [
          { nama: "Sidomulyo" },
          { nama: "Dadi Mulyo" },
          { nama: "Sepakat Madani" },
          { nama: "Mulyo Rejo Barat" },
          { nama: "Mulyorejo" },
        ],
      },
      {
        nama: "Nagari Desa Baru Barat",

        jorong: [
          { nama: "Karang Rejo" },
          { nama: "Sukorejo" },
          { nama: "Serumpun Saiyo" },
          { nama: "Sukadamai" },
          { nama: "Banjar Jaya" },
        ],
      },
    ],
  },
];

export { uraian, wilayah };
