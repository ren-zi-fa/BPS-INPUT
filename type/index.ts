import { ChangeEvent } from "react";

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

export interface InformasiKecamatanProps {
  title: string;
  nama_kecamatan: string;
  luas_kecamatan: string;
  batas_kecamatan: {
    utara: string;
    selatan: string;
    barat: string;
    timur: string;
  };
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  ketinggian_dari_permukaan_laut: string;
}
