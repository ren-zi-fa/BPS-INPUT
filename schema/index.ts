import { z } from "zod";

export const BPJSKecamatanSchema = z.object({
  kecamatan: z.string(),
  kelas1: z.float64().min(0),
  kelas2: z.float64().min(0),
  kelas3: z.float64().min(0),
});

export type BpjsKecamatanForm = z.infer<typeof BPJSKecamatanSchema>;

export const BPJSKelompokKecamatanSchema = z.object({
  kecamatan: z.string(),
  penerima_bantuan_iuran: z.float64().min(0),
  bukan_penerima_bantuan_iuran: z.float64().min(0),
});

export type BPJSKelompokKecamatanForm = z.infer<
  typeof BPJSKelompokKecamatanSchema
>;
