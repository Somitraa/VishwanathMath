"use client";
import { useLang } from "@/context/LanguageProvider";

export default function BelVan() {
  const { lang } = useLang();

  return (
    <section id="belvan" className="py-20 md:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {lang === "hi" ? "विश्वनाथ बिल्व वन" : "Vishwanath Bilva Forest"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {lang === "hi" ? (
              <>
                <strong>बिल्व वन</strong> विश्वनाथ मठ का एक पवित्र उपवन है, जहाँ भगवान शिव को प्रिय
                बिल्व वृक्षों की रोपाई की गई है। यह स्थान आध्यात्मिक शांति, औषधीय ऊर्जा और प्रकृति से
                जुड़ाव का प्रतीक है।
              </>
            ) : (
              <>
                <strong>Bilva Forest</strong> is a sacred grove of Vishwanath Math, where holy Bilva
                trees — dear to Lord Shiva — have been planted.  
                It is a symbol of spiritual peace, healing energy, and harmony with nature.
              </>
            )}
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              {lang === "hi" ? "🔱 बिल्व वृक्ष का महत्व" : "🔱 Significance of the Bilva Tree"}
            </h3>

            <p className="text-foreground/80 leading-relaxed">
              {lang === "hi" ? (
                <>
                  हिंदू शास्त्रों में बिल्व वृक्ष को त्रिदेव का प्रतीक माना गया है — इसकी तीन पत्तियाँ
                  ब्रह्मा, विष्णु और महेश का प्रतिनिधित्व करती हैं। यह वृक्ष न केवल धार्मिक दृष्टि से
                  पवित्र है बल्कि वैज्ञानिक दृष्टि से भी अत्यंत उपयोगी है।
                </>
              ) : (
                <>
                  In Hindu scriptures, the Bilva tree is considered symbolic of the Holy Trinity —
                  its three leaves represent Brahma, Vishnu, and Mahesh (Shiva).  
                  The tree holds not only religious sanctity but also great medicinal and
                  environmental value.
                </>
              )}
            </p>

            <ul className="list-disc list-inside text-foreground/80 space-y-2">
              {lang === "hi" ? (
                <>
                  <li>शिव पूजा में बिल्व पत्र का विशेष महत्व है।</li>
                  <li>इस वृक्ष से वातावरण शुद्ध होता है।</li>
                  <li>औषधीय गुणों से भरपूर और आयुर्वेद में उपयोगी।</li>
                  <li>ध्यान और साधना के लिए शांतिपूर्ण वातावरण प्रदान करता है।</li>
                </>
              ) : (
                <>
                  <li>The Bilva leaf holds special importance in Shiva worship.</li>
                  <li>The tree helps purify the environment.</li>
                  <li>Rich in medicinal properties and used widely in Ayurveda.</li>
                  <li>Provides a serene atmosphere ideal for meditation and devotion.</li>
                </>
              )}
            </ul>
          </div>

          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/bel.jpg"
              alt={lang === "hi" ? "बिल्व वन" : "Bilva Forest"}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-green-50 to-primary/10 border border-primary/20 text-center">
          <p className="text-lg text-foreground">
            {lang === "hi" ? (
              <>
                <strong>बिल्व वन</strong> प्रकृति और अध्यात्म के संगम का स्थल है — जहाँ हर पत्ता
                शिव का आशीर्वाद बनकर झूमता है।
              </>
            ) : (
              <>
                <strong>Bilva Forest</strong> is a divine confluence of nature and spirituality —
                where every leaf sways as a blessing from Lord Shiva.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
