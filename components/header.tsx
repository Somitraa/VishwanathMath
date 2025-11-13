"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "@/context/LanguageProvider";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLang();

  // ✅ Close menu when any link is clicked
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* 🕉 Logo & Title */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center overflow-hidden shadow-sm">
            <img src="/logo.jpg" alt="लोगो" className="w-full h-full object-cover" />
          </div>

          <Link href="/" className="no-underline">
            <h1 className="text-2xl font-bold text-primary hover:text-secondary transition cursor-pointer">
              विश्वनाथ मठ
            </h1>
          </Link>
        </div>

        {/* 🧭 Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#about" className="text-foreground hover:text-primary transition">
            {lang === "hi" ? "हमारे बारे में" : "About Us"}
          </a>
          <Link href="/donate" className="text-foreground hover:text-primary transition">
            {lang === "hi" ? "दान करें" : "Donate"}
          </Link>
          <a href="#contact" className="text-foreground hover:text-primary transition">
            {lang === "hi" ? "संपर्क करें" : "Contact"}
          </a>

          {/* 🌐 Language Toggle */}
          <button
            onClick={toggleLang}
            className="ml-4 flex items-center gap-1 border border-primary/40 px-2 py-1 rounded-lg text-sm hover:bg-primary/10 transition"
          >
            <Globe size={16} />
            {lang === "hi" ? "EN" : "हिन्दी"}
          </button>
        </div>

        {/* 📱 Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* 📱 Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-lg bg-white/80 px-4 py-4 space-y-3 shadow-md rounded-b-2xl transition-all duration-300">
          <a
            href="#about"
            className="block text-foreground hover:text-primary"
            onClick={handleLinkClick}
          >
            {lang === "hi" ? "हमारे बारे में" : "About Us"}
          </a>

          <Link
            href="/donate"
            className="block text-foreground hover:text-primary"
            onClick={handleLinkClick}
          >
            {lang === "hi" ? "दान करें" : "Donate"}
          </Link>

          <a
            href="#contact"
            className="block text-foreground hover:text-primary"
            onClick={handleLinkClick}
          >
            {lang === "hi" ? "संपर्क करें" : "Contact"}
          </a>

          {/* 🌐 Language Toggle */}
          <button
            onClick={() => {
              toggleLang();
              setIsOpen(false); // also close when language toggled
            }}
            className="mt-2 flex items-center gap-1 border border-primary/40 px-2 py-1 rounded-lg text-sm hover:bg-primary/10 transition"
          >
            <Globe size={16} />
            {lang === "hi" ? "EN" : "हिन्दी"}
          </button>
        </div>
      )}
    </header>
  );
}
