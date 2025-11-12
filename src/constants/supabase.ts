// src/constants/supabase.ts
import Constants from "expo-constants";

const expoExtra =
  (Constants.expoConfig && (Constants.expoConfig as any).extra) ||
  (Constants.manifest && (Constants.manifest as any).extra) ||
  (Constants as any).extra ||
  {};

// Aceita SUPABASE_ANON_KEY (nome esperado) ou SUPABASE_API_KEY (nome que você usou)
export const supaUrl = expoExtra.SUPABASE_URL ?? null;
export const supaKey =
  expoExtra.SUPABASE_ANON_KEY ?? expoExtra.SUPABASE_API_KEY ?? null;

// debug temporário — remova em produção
if (__DEV__) {
  // eslint-disable-next-line no-console
  console.log("expo.extra detected:", expoExtra);
  // eslint-disable-next-line no-console
  console.log(
    "supaUrl:",
    supaUrl ? "[FOUND]" : supaUrl,
    "supaKey:",
    supaKey ? "[FOUND]" : supaKey
  );
}
