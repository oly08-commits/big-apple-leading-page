import { lang_en } from "./lang/en";
import { lang_pt } from "./lang/pt";

export type Lang = "en" | "pt";

type Dictionary = Record<string, string>;

type Translate = Record<Lang, Dictionary>;

const translations: Translate = {
  en: lang_en,
  pt: lang_pt,
};

export default function t(key: string, lang: Lang): string {
  return translations[lang][key] ?? key;
}
