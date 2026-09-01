import { create } from "zustand";
import type { Lang } from "../shared/i18n";

interface LanguageState {
  lang: Lang;
  setLanguage: (lang: Lang) => void;
}

export const useLanguegeStore = create<LanguageState>((set) => ({
  lang: "en",
  setLanguage(lang) {},
}));
