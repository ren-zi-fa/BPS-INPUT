import { Kecamatan, Menu } from "@/type";
import { Label } from "recharts";

const mainMenu: Menu[] = [
  { label: "STATISTIK", url: "/" },
  { label: "BUMN dan Swasta", url: "/bumn-dan-swasta" },
  { label: "Kecamatan", url: "/kecamatan" },
  { label: "Nagari", url: "/nagari" },
  { label: "OPD", url: "/opd" },
  { label: "VERTIKAL", url: "/vertikal" },
];

const nagari = [
  { key: 1, label: "Aia Bangih" },
  { key: 2, label: "Desa Baru" },
  { key: 3, label: "Batahan" },
  { key: 4, label: "Desa Baru Barat" },
  { key: 5, label: "Batahan Utara" },
  { key: 6, label: "Batahan Tengah" },
  { key: 7, label: "Batahan Barat" },
  { key: 8, label: "Batahan Selatan" },
  { key: 9, label: "Parik" },
  { key: 10, label: "Koto Tangah" },
  { key: 11, label: "Koto Tuo" },
  { key: 12, label: "Koto Nan Duo" },
  { key: 13, label: "Pamatang Panjang" },
  { key: 14, label: "Ranah Koto Tinggi" },
  { key: 15, label: "Sungai Aua" },
  { key: 16, label: "Salingka Muaro" },
  { key: 17, label: "Ranah Malintang" },
  { key: 18, label: "Ranah Air Haji" },
  { key: 19, label: "Kasik Putih Sungai Tanang" },
  { key: 20, label: "Aua Serumpun" },
  { key: 21, label: "Sikilang Sungai Aur Selatan" },
  { key: 22, label: "Ujuang Gadiang" },
  { key: 23, label: "Brastagi Ujuang Gadiang" },
  { key: 24, label: "Tampus Damai Ujuang Gadiang" },
  { key: 25, label: "Taluak Ambun Ujuang Gadiang" },
  { key: 26, label: "Koto Gunung Ujuang Gadiang" },
  { key: 27, label: "Koto Sawah Ujuang Gadiang" },
  { key: 28, label: "Salido Saroha Ujuang Gadiang" },
  { key: 29, label: "Kuamang Alai Ujuang Gadiang" },
  { key: 30, label: "Situak Ujuang Gadiang" },
  { key: 31, label: "Muaro Kiawai" },
  { key: 32, label: "Rabi Jonggor" },
  { key: 33, label: "Muaro Kiawai Barat" },
  { key: 34, label: "Muaro Kiawai Hilir" },
  { key: 35, label: "Seberang Kenaikan" },
  { key: 36, label: "Bahoras" },
  { key: 37, label: "Ranah Sungai Magelang" },
  { key: 38, label: "Kajai" },
  { key: 39, label: "Talu" },
  { key: 40, label: "Sinuruik" },
  { key: 41, label: "Simpang Timbo Abu Kajai" },
  { key: 42, label: "Kajai Selatan" },
  { key: 43, label: "Sungai Janiah Talu" },
  { key: 44, label: "Tabek Sirah Talu" },
  { key: 45, label: "Lingkuang Aua" },
  { key: 46, label: "Aua Kuniang" },
  { key: 47, label: "Aia Gadang" },
];

const bulan = [
  { key: 1, label: "Januari" },
  { key: 2, label: "Februari" },
  { key: 3, label: "Maret" },
  { key: 4, label: "April" },
  { key: 5, label: "Mei" },
  { key: 6, label: "Juni" },
  { key: 7, label: "Juli" },
  { key: 8, label: "Agustus" },
  { key: 9, label: "September" },
  { key: 10, label: "Oktober" },
  { key: 11, label: "November" },
  { key: 12, label: "Desember" },
];

const kecamatan: Kecamatan[] = [
  {
    key: 1,
    luas_kecamatan: "",
    label: "Sungai Beremas",
  },
  {
    key: 2,

    luas_kecamatan: "",
    label: "Ranah Batahan",
  },
  {
    key: 3,
    luas_kecamatan: "",
    label: "Koto Balingka",
  },
  {
    key: 4,
    luas_kecamatan: "",
    label: "Sungai Aur",
  },
  {
    key: 5,
    luas_kecamatan: "",
    label: "Lembah Melintang",
  },
  {
    key: 6,
    luas_kecamatan: "",
    label: "Gunung Tuleh",
  },
  {
    key: 7,
    luas_kecamatan: "",
    label: "Talamau",
  },
  {
    key: 8,
    luas_kecamatan: "",
    label: "Pasaman",
  },
  {
    key: 9,
    luas_kecamatan: "",
    label: "Luhak Nan Duo",
  },
  {
    key: 10,
    luas_kecamatan: "",
    label: "Sasak Ranah Pasisie",
  },
  {
    key: 11,
    luas_kecamatan: "",
    label: "Kinali",
  },
];

const fasilitas = [
  { key: 1, label: "Ruang Rawat Inap" },
  { key: 2, label: "Tempat Tidur Tersedia" },
  { key: 3, label: "Ruang Perawatan Bersalin" },
  { key: 4, label: "Ruangan OK" },
  { key: 5, label: "Poliklinik Kebidanan" },
  { key: 6, label: "Poliklinik Bedah" },
  { key: 7, label: "IGD" },
  { key: 8, label: "Poliklinik Gigi" },
  { key: 9, label: "Poliklinik Umum" },
  { key: 10, label: "Poliklinik Anak" },
  { key: 11, label: "Apotik" },
  { key: 12, label: "Ruang Rontgen" },
  { key: 13, label: "Ruang Laboratorium" },
  { key: 14, label: "Ruangan Gizi" },
  { key: 15, label: "Poliklinik Mata" },
  { key: 16, label: "Bank Darah / BDRS" },
  { key: 17, label: "Poliklinik Fisioterapi" },
];

export { kecamatan, mainMenu, nagari, bulan, fasilitas };
