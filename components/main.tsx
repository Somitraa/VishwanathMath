"use client";

import { useLang } from "@/context/LanguageProvider";

export default function MainTemple() {
  const { lang } = useLang();

  const handleVisitClick = () => {
    window.open("https://maps.google.com/?q=23.8348075,78.0512824", "_blank");
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/10 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            {lang === "hi"
              ? "मुख्य मंदिर – विश्वनाथ मठ"
              : "Main Temple – Vishwanath Math"}
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {lang === "hi" ? (
              <>
                भगवान शिव की दिव्य उपासना के केंद्र में स्थित यह मंदिर, विश्वनाथ मठ का
                हृदयस्थल है। यहाँ स्थापित{" "}
                <span className="font-semibold text-primary">1100 शिवलिंग</span> और एक{" "}
                <span className="font-semibold text-primary">
                  11 फीट ऊँचा विशाल शिवलिंग
                </span>{" "}
                भक्ति, शक्ति और शिवत्व के अनंत स्वरूप का प्रतीक हैं।
              </>
            ) : (
              <>
                Situated at the heart of divine worship, this temple is the spiritual center of
                Vishwanath Math. The{" "}
                <span className="font-semibold text-primary">1100 Shivlings</span> and the{" "}
                <span className="font-semibold text-primary">
                  11-foot-tall grand Shivling
                </span>{" "}
                symbolize infinite devotion, power, and the eternal essence of Shiva.
              </>
            )}
          </p>
        </div>

        {/* Image Section */}
        <div className="rounded-2xl overflow-hidden shadow-2xl mb-16">
          <img
            src="/mainnnn.jpg"
            alt={
              lang === "hi"
                ? "मुख्य मंदिर - विश्वनाथ मठ"
                : "Main Temple - Vishwanath Math"
            }
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Description Section */}
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          {lang === "hi" ? (
            <>
              <p>
                मुख्य मंदिर का निर्माण शिवभक्तों की गहन श्रद्धा और तप की भावना से हुआ है।
                मंदिर परिसर में{" "}
                <span className="font-semibold text-primary">1100 शिवलिंग</span> स्थापित हैं — प्रत्येक
                शिवलिंग दिव्यता और सृजन शक्ति का प्रतीक है, जो भक्तों को शिव के अद्वैत स्वरूप की
                याद दिलाते हैं।
              </p>

              <p>
                मंदिर के केंद्र में स्थित{" "}
                <span className="font-semibold text-primary">11 फीट ऊँचा विशाल शिवलिंग</span> इस
                पवित्र स्थल का मुख्य आकर्षण है। यह शिवलिंग न केवल भक्ति और श्रद्धा का प्रतीक है,
                बल्कि ध्यान और साधना के माध्यम से आत्मा को परमात्मा से जोड़ने का माध्यम भी है।
              </p>

              <p>
                यहाँ प्रतिदिन विशेष पूजन, रुद्राभिषेक और ध्यान सत्र आयोजित किए जाते हैं, जहाँ
                भक्तगण आध्यात्मिक शांति और ऊर्जा का अनुभव करते हैं। मंदिर का वातावरण शांति, भक्ति
                और दिव्यता से परिपूर्ण है, जो प्रत्येक आगंतुक के मन को शिवमय बना देता है।
              </p>
            </>
          ) : (
            <>
              <p>
                The Main Temple was built with deep devotion and penance by devotees of Lord Shiva.
                Within the temple premises stand{" "}
                <span className="font-semibold text-primary">1100 Shivlings</span> — each representing
                divinity and creative energy, reminding devotees of Shiva’s eternal oneness.
              </p>

              <p>
                At the center lies a{" "}
                <span className="font-semibold text-primary">
                  magnificent 11-foot-tall Shivling
                </span>
                , the primary attraction of this sacred site. It symbolizes devotion and faith and
                serves as a medium to unite the soul with the Supreme through meditation and worship.
              </p>

              <p>
                Daily special worships, Rudrabhishek, and meditation sessions are held here,
                allowing devotees to experience profound peace and spiritual energy. The temple’s
                atmosphere is filled with serenity, devotion, and divinity — transforming every
                visitor’s heart into a space of Shiva consciousness.
              </p>
            </>
          )}
        </div>

        {/* Visit Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleVisitClick}
            className="bg-primary text-primary-foreground px-10 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition"
          >
            {lang === "hi" ? "📍 मंदिर दर्शन करें" : "📍 Visit the Temple"}
          </button>
        </div>
      </div>
    </section>
  );
}
