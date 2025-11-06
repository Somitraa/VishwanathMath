"use client";

import { useLang } from "@/context/LanguageProvider";

export default function Footer() {
  const { lang } = useLang();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {lang === "hi" ? "विश्वनाथ मठ" : "Vishwanath Math"}
            </h3>
            <p className="text-primary-foreground/80">
              {lang === "hi"
                ? "आध्यात्मिक विकास और सामुदायिक सेवा के प्रति समर्पित।"
                : "Dedicated to spiritual growth and community service."}
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-bold mb-4">
              {lang === "hi" ? "त्वरित लिंक" : "Quick Links"}
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary-foreground transition"
                >
                  {lang === "hi" ? "हमारे बारे में" : "About Us"}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary-foreground transition"
                >
                  {lang === "hi" ? "सेवाएँ" : "Services"}
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-primary-foreground transition"
                >
                  {lang === "hi" ? "कार्यक्रम" : "Events"}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-bold mb-4">
              {lang === "hi" ? "समय" : "Timings"}
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              {lang === "hi" ? (
                <>
                  <li>सोम–शुक्र: सुबह 6 बजे – शाम 8 बजे</li>
                  <li>शनि–रवि: सुबह 6 बजे – शाम 9 बजे</li>
                  <li>त्योहारों पर: विशेष समय</li>
                </>
              ) : (
                <>
                  <li>Mon–Fri: 6 AM – 8 PM</li>
                  <li>Sat–Sun: 6 AM – 9 PM</li>
                  <li>Festivals: Special Hours</li>
                </>
              )}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-bold mb-4">
              {lang === "hi" ? "हमसे जुड़ें" : "Connect With Us"}
            </h4>

            {/* Facebook + Instagram */}
            <div className="flex gap-8 mb-3">
              <a
                href="https://www.facebook.com/share/17UXZ6q8gX/"
                className="hover:text-primary-foreground/80 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === "hi" ? "फेसबुक" : "Facebook"}
              </a>
              <a
                href="https://www.instagram.com/tantrachary_jai_visvhnath_?igsh=MWUyZnlpZGFtc2VwZA=="
                className="hover:text-primary-foreground/80 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === "hi" ? "इंस्टाग्राम" : "Instagram"}
              </a>
            </div>

            {/* WhatsApp + Group */}
            <div className="flex gap-8">
              <a
                href="https://wa.me/+918319423896"
                className="hover:text-primary-foreground/80 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === "hi" ? "व्हाट्सएप" : "WhatsApp"}
              </a>
              <a
                href="https://chat.whatsapp.com/E25410FsQG7Jci8xAQi3Gw"
                className="hover:text-primary-foreground/80 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {lang === "hi" ? "व्हाट्सएप ग्रुप" : "WhatsApp Group"}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
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
                >
                  सौमित्र गुप्ता
                </a>{" "}
                द्वारा
              </>
            ) : (
              <>
                Crafted with love by{" "}
                <a
                  href="https://linkedin.com/in/somitra-gupta-775b86260"
                  target="_blank"
                  rel="noopener noreferrer"
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
