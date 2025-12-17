import { Kecamatan, Menu } from "@/type";

const mainMenu: Menu[] = [
  { label: "STATISTIK", url: "/" },
  { label: "BUMN dan Swasta", url: "/bumn-dan-swasta" },
  { label: "Kecamatan", url: "/kecamatan" },
  { label: "Nagari", url: "/nagari" },
  { label: "OPD", url: "/opd" },
  { label: "VERTIKAL", url: "/vertikal" },
];

const kecamatan: Kecamatan[] = [
  {
    key: 1,
    batas_kecamatan: {
      barat: "",
      selatan: "",
      timur: "",
      utara: "",
    },
    Ketinggian_Permukaan_Laut: "",
    luas_kecamatan: "",
    label: "Sungai Beremas",
    children: [
      { key: 101, label: "Aia Bangih" },
      { key: 102, label: "Aia Gadang" },
      { key: 103, label: "Parit" },
      { key: 104, label: "Sungai Beremas" },
    ],
  },
  {
    key: 2,
    batas_kecamatan: {
      barat: "",
      selatan: "",
      timur: "",
      utara: "",
    },
    Ketinggian_Permukaan_Laut: "",
    luas_kecamatan: "",
    label: "Ranah Batahan",
    children: [
      { key: 201, label: "Batahan" },
      { key: 202, label: "Ranah Batahan" },
      { key: 203, label: "Silaping" },
      { key: 204, label: "Ujung Gading Julu" },
    ],
  },
  {
    key: 3,
    batas_kecamatan: {
      barat: "",
      selatan: "",
      timur: "",
      utara: "",
    },
    Ketinggian_Permukaan_Laut: "",
    luas_kecamatan: "",
    label: "Koto Balingka",
    children: [
      { key: 301, label: "Koto Balingka" },
      { key: 302, label: "Parik" },
      { key: 303, label: "Tuah Basamo" },
      { key: 304, label: "Sasak" },
    ],
  },
  {
    key: 4,
    batas_kecamatan: {
      barat: "",
      selatan: "",
      timur: "",
      utara: "",
    },
    Ketinggian_Permukaan_Laut: "",
    luas_kecamatan: "",
    label: "Sungai Aur",
    children: [
      { key: 401, label: "Sungai Aur" },
      { key: 402, label: "Air Haji" },
      { key: 403, label: "Rabi Jonggor" },
      { key: 404, label: "Sungai Talang" },
    ],
  },
  {
    key: 5,
    batas_kecamatan: {
      barat: "",
      selatan: "",
      timur: "",
      utara: "",
    },
    Ketinggian_Permukaan_Laut: "",
    luas_kecamatan: "",
    label: "Lembah Melintang",
    children: [
      { key: 501, label: "Ujung Gading" },
      { key: 502, label: "Kinali Hilir" },
      { key: 503, label: "Lingkuang Aua" },
      { key: 504, label: "Lembah Melintang" },
    ],
  },
  {
    key: 6,
    batas_kecamatan: {
      barat: "",
      selatan: "",
      timur: "",
      utara: "",
    },
    Ketinggian_Permukaan_Laut: "",
    luas_kecamatan: "",
    label: "Gunung Tuleh",
    children: [
      { key: 601, label: "Gunung Tuleh" },
      { key: 602, label: "Suka Maju" },
      { key: 603, label: "Bahoras" },
      { key: 604, label: "Muaro Kiawai" },
    ],
  },
  {
    key: 7,
    batas_kecamatan: {
      barat: "",
      selatan: "",
      timur: "",
      utara: "",
    },
    Ketinggian_Permukaan_Laut: "",
    luas_kecamatan: "",
    label: "Talamau",
    children: [
      { key: 701, label: "Talu" },
      { key: 702, label: "Sinuruik" },
      { key: 703, label: "Tabek Sirah" },
      { key: 704, label: "Talamau" },
    ],
  },
  {
    key: 8,
    batas_kecamatan: {
      barat: "",
      selatan: "",
      timur: "",
      utara: "",
    },
    Ketinggian_Permukaan_Laut: "",
    luas_kecamatan: "",
    label: "Pasaman",
    children: [
      { key: 801, label: "Simpang Ampek" },
      { key: 802, label: "Lingkuang Aua Barat" },
      { key: 803, label: "Lingkuang Aua Timur" },
      { key: 804, label: "Jambak Selatan" },
    ],
  },
  {
    key: 9,
    batas_kecamatan: {
      barat: "",
      selatan: "",
      timur: "",
      utara: "",
    },
    Ketinggian_Permukaan_Laut: "",
    luas_kecamatan: "",
    label: "Luhak Nan Duo",
    children: [
      { key: 901, label: "Luhak Nan Duo" },
      { key: 902, label: "Sungai Talang" },
      { key: 903, label: "Pematang Panjang" },
      { key: 904, label: "Kapa" },
    ],
  },
  {
    key: 10,
    batas_kecamatan: {
      barat: "",
      selatan: "",
      timur: "",
      utara: "",
    },
    Ketinggian_Permukaan_Laut: "",
    luas_kecamatan: "",
    label: "Sasak Ranah Pasisie",
    children: [
      { key: 1001, label: "Sasak" },
      { key: 1002, label: "Ranah Pasisie" },
      { key: 1003, label: "Padang Tujuh" },
    ],
  },
  {
    key: 11,
    batas_kecamatan: {
      barat: "",
      selatan: "",
      timur: "",
      utara: "",
    },
    Ketinggian_Permukaan_Laut: "",
    luas_kecamatan: "",
    label: "Kinali",
    children: [
      { key: 1101, label: "Kinali" },
      { key: 1102, label: "Anam Koto Utara" },
      { key: 1103, label: "Anam Koto Selatan" },
      { key: 1104, label: "Bandar Dalam" },
    ],
  },
];

export { kecamatan, mainMenu };
