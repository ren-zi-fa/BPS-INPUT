export type Nagari = {
  key: number;
  label: string;
};

export type Menu = {
  label: string;
  url: string;
};

export interface BatasKec {
  utara: string;
  selatan: string;
  barat: string;
  timur: string;
}
export type Kecamatan = {
  key: number;
  luas_kecamatan?: string;
  // batas_kecamatan?: BatasKec;
  // Ketinggian_Permukaan_Laut?: string;
  label: string;
};
