export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">विश्वनाथ मठ</h3>
            <p className="text-primary-foreground/80">
              आध्यात्मिक विकास और सामुदायिक सेवा के प्रति समर्पित।
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">त्वरित लिंक</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition">
                  हमारे बारे में
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition">
                  सेवाएँ
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-primary-foreground transition">
                  कार्यक्रम
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">समय</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>सोम-शुक्र: सुबह 6 बजे - शाम 8 बजे</li>
              <li>शनि-रवि: सुबह 6 बजे - शाम 9 बजे</li>
              <li>त्योहारों पर: विशेष समय</li>
            </ul>
          </div>

<div>
  <h4 className="font-bold mb-4">हमसे जुड़ें</h4>

  {/* First line: Facebook + Instagram */}
  <div className="flex gap-8 mb-3">
    <a
      href="https://www.facebook.com/share/17UXZ6q8gX/"
      className="hover:text-primary-foreground/80 transition"
    >
      फेसबुक
    </a>
    <a
      href="https://www.instagram.com/tantrachary_jai_visvhnath_?igsh=MWUyZnlpZGFtc2VwZA=="
      className="hover:text-primary-foreground/80 transition"
    >
      इंस्टाग्राम
    </a>
  </div>

  {/* Second line: WhatsApp + WhatsApp Group */}
  <div className="flex gap-8">
    <a
      href="https://wa.me/+918319423896"
      className="hover:text-primary-foreground/80 transition"
    >
      व्हाट्सएप
    </a>
    <a
      href="https://chat.whatsapp.com/E25410FsQG7Jci8xAQi3Gw"
      className="hover:text-primary-foreground/80 transition"
    >
      व्हाट्सएप ग्रुप
    </a>
  </div>

          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80 space-y-2">
          <p>
            &copy; 2025 विश्वनाथ मठ। सर्वाधिकार सुरक्षित। | आध्यात्मिक उत्कृष्टता के प्रति समर्पित
          </p>
          <p className="font-semibold text-primary-foreground">
            प्रेम से बनाया गया — सौमित्र गुप्ता द्वारा 💛
          </p>
        </div>
      </div>
    </footer>
  );
}
