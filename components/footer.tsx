"use client";

import { useLang } from "@/context/LanguageProvider";
import { Instagram, Facebook, MessageCircle, Users } from "lucide-react";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🌺 Footer Grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Column 1 — Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {lang === "hi" ? "विश्वनाथ मठ" : "Vishwanath Math"}
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              {lang === "hi"
                ? "आध्यात्मिक विकास, सेवा और धर्म की चेतना के प्रति समर्पित।"
                : "Dedicated to spiritual growth, service, and the awakening of Dharma."}
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-bold mb-4">
              {lang === "hi" ? "त्वरित लिंक" : "Quick Links"}
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-white transition">
                  {lang === "hi" ? "हमारे बारे में" : "About Us"}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  {lang === "hi" ? "सेवाएँ" : "Services"}
                </a>
              </li>
              <li>
                <a href="/donate" className="hover:text-white transition">
                  {lang === "hi" ? "दान करें" : "Donate"}
                </a>
              </li>

            </ul>
          </div>

          {/* Column 3 — Timings */}
          <div>
            <h4 className="font-bold mb-4">
              {lang === "hi" ? "समय" : "Timings"}
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              {lang === "hi" ? (
                <>
                  <li>सोम–शुक्र: सुबह 6 बजे – शाम 8 बजे</li>
                  <li>शनि–रवि: सुबह 6 बजे – रात 9 बजे</li>
                  <li>त्योहारों पर: विशेष समय</li>
                </>
              ) : (
                <>
                  <li>Mon–Fri: 6 AM – 8 PM</li>
                  <li>Sat–Sun: 6 AM – 9 PM</li>
                  <li>Festivals: Special Timings</li>
                </>
              )}
            </ul>
          </div>

          {/* Column 4 — Connect */}
          <div>
            <h4 className="font-bold mb-4">
              {lang === "hi" ? "हमसे जुड़ें" : "Connect With Us"}
            </h4>

            {/* 💬 Social Icons */}
            <div className="flex justify-start md:justify-start lg:justify-start gap-6 mt-3 flex-wrap">
              <a
                href="https://www.facebook.com/share/17UXZ6q8gX/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Facebook className="w-5 h-5" />
                <span className="hidden sm:inline">
                  {lang === "hi" ? "फेसबुक" : "Facebook"}
                </span>
              </a>

              <a
                href="https://www.instagram.com/tantrachary_jai_visvhnath_?igsh=MWUyZnlpZGFtc2VwZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Instagram className="w-5 h-5" />
                <span className="hidden sm:inline">
                  {lang === "hi" ? "इंस्टाग्राम" : "Instagram"}
                </span>
              </a>

              <a
                href="https://wa.me/+918319423896"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="hidden sm:inline">
                  {lang === "hi" ? "व्हाट्सएप" : "WhatsApp"}
                </span>
              </a>

              <a
                href="https://chat.whatsapp.com/E25410FsQG7Jci8xAQi3Gw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Users className="w-5 h-5" />
                <span className="hidden sm:inline">
                  {lang === "hi" ? "व्हाट्सएप ग्रुप" : "Group"}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80 space-y-2">
          <p>
            {lang === "hi"
              ? "© 2025 विश्वनाथ मठ। सर्वाधिकार सुरक्षित। | आध्यात्मिक उत्कृष्टता के प्रति समर्पित"
              : "© 2025 Vishwanath Math. All Rights Reserved. | Dedicated to Spiritual Excellence"}
          </p>

          <p className="font-semibold text-primary-foreground">
            {lang === "hi" ? (
              <>
                प्रेम से बनाया गया —{" "}
                <a
                  href="https://linkedin.com/in/somitra-gupta-775b86260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition"
                >
                  सौमित्र गुप्ता
                </a>{" "}
                द्वारा
              </>
            ) : (
              <>
                Crafted with ❤ by{" "}
                <a
                  href="https://linkedin.com/in/somitra-gupta-775b86260"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition"
                >
                  Somitra Gupta
                </a>
              </>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}