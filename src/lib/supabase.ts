// src/lib/supabase.ts
import { supaKey, supaUrl } from "@/constants/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient, processLock } from "@supabase/supabase-js";
import { AppState, Platform } from "react-native";
import "react-native-url-polyfill/auto";

const supabaseUrl = supaUrl;
const supabaseAnonKey = supaKey;

if (!supabaseUrl || !supabaseAnonKey) {
  // Mensagem clara para dev — evita erro obscuro "supabaseUrl is required"
  throw new Error(
    "SUPABASE_URL and SUPABASE_ANON_KEY are required. Please add them to app.json (expo.extra) or app.config.js."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    ...(Platform.OS !== "web" ? { storage: AsyncStorage } : {}),
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    lock: processLock,
  },
});

// Apenas para plataformas nativas: controla auto refresh quando app volta ao foreground
if (Platform.OS !== "web") {
  const subscription = AppState.addEventListener("change", (state) => {
    if (state === "active") {
      supabase.auth.startAutoRefresh();
    } else {
      supabase.auth.stopAutoRefresh();
    }
  });

  // opcional: cleanup (não necessário na maioria dos apps single-run)
  // export function cleanupSupabaseListener() { subscription.remove(); }
}
