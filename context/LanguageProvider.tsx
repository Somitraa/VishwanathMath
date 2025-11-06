"use client";

import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { translations } from "@/lib/translations";

type LangKey = "hi" | "en";

type LangContextType = {
  lang: LangKey;
  t: Record<string, string>;
  setLang: (l: LangKey) => void;
  toggleLang: () => void;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LangKey>("hi"); // Default Hindi
  const t = translations[lang];

  const toggleLang = () => setLang((prev) => (prev === "hi" ? "en" : "hi"));

  return (
    <LangContext.Provider value={{ lang, t, setLang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
