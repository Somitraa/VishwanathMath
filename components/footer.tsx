export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VishwanathMath</h3>
            <p className="text-primary-foreground/80">Dedicated to spiritual growth and community service.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-foreground transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-primary-foreground transition">
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Mon-Fri: 6 AM - 8 PM</li>
              <li>Sat-Sun: 6 AM - 9 PM</li>
              <li>Holidays: Special Hours</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-foreground/80 transition">
                Facebook
              </a>
              <a href="https://www.instagram.com/tantrachary_jai_visvhnath_?igsh=MWUyZnlpZGFtc2VwZA==" className="hover:text-primary-foreground/80 transition">
                Instagram
              </a>
              <a href="https://wa.me/+918319423896" className="hover:text-primary-foreground/80 transition">
                Whatsapp
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 VishwanathMath. All rights reserved. | Dedicated to Spiritual Excellence</p>
        </div>
      </div>
    </footer>
  )
}
