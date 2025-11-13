"use client";

import { useLang } from "@/context/LanguageProvider";

export default function MainTemple() {
  const { lang } = useLang();

  const handleVisitClick = () => {
    window.open("https://maps.google.com/?q=23.8348075,78.0512824", "_blank");
  };

  return (
    <section className="py-20 md:py-32 bg-white border-t border-border/10">
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
                विश्वनाथ मठ का मुख्य मंदिर शिवभक्ति, साधना और दिव्यता का केंद्र है। यहाँ{" "}
                <span className="font-semibold text-primary">1100 शिवलिंग</span> और{" "}
                <span className="font-semibold text-primary">
                  11 फीट ऊँचा विशाल शिवलिंग
                </span>{" "}
                स्थापित हैं, जो शिवत्व की अनंत ऊर्जा का प्रतीक हैं।
              </>
            ) : (
              <>
                The Main Temple of Vishwanath Math stands as a powerful center of
                Shiva devotion, meditation, and divine energy. The{" "}
                <span className="font-semibold text-primary">1100 Shivlings</span> and the{" "}
                <span className="font-semibold text-primary">
                  11-foot grand Shivling
                </span>{" "}
                symbolize the infinite presence of Lord Shiva.
              </>
            )}
          </p>
        </div>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl mb-16 border border-border/10">
          <img
            src="/mainnnn.jpg"
            alt={lang === "hi" ? "मुख्य मंदिर" : "Main Temple"}
            className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Description */}
        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          {lang === "hi" ? (
            <>
              <p>
                यहाँ पूजन की विधि <strong>नर्मदेश्वर परंपरा</strong> पर आधारित है।
                विशेष रूप से <strong>गौखुर विधि</strong> और तांत्रिक परंपरा का संगम
                इस शिवधाम को अद्वितीय बनाता है।
              </p>

              <p>
                मंदिर की संरचना भी अत्यंत प्रतीकात्मक है—नीचे चौकोर आधार{" "}
                <strong>ब्रह्मा</strong> स्वरूप, बीच का अष्टकोण{" "}
                <strong>विष्णु</strong> का रूप, और ऊपर स्थित शिवलिंग{" "}
                <strong>अर्धनारीश्वर</strong> का प्रतीक माने जाते हैं।
              </p>

              <p>
                प्रतिदिन होने वाले रुद्राभिषेक, ध्यान और पूजन से साधकों को गहन
                शांति, ऊर्जा और शिवतत्व का अनुभव प्राप्त होता है।
              </p>
            </>
          ) : (
            <>
              <p>
                The worship here follows the ancient{" "}
                <strong>Narmadeshwar tradition</strong>, including the sacred{" "}
                <strong>Gaukhur method</strong> combined with Tantric practices,
                making this temple spiritually unique.
              </p>

              <p>
                The temple’s architecture is symbolic — the square base represents{" "}
                <strong>Brahma</strong>, the octagonal middle tier signifies{" "}
                <strong>Vishnu</strong>, and the top Shivling symbolizes{" "}
                <strong>Ardhanarishwara</strong>, the union of Shiva and Shakti.
              </p>

              <p>
                Daily Rudrabhishek, meditation, and rituals allow devotees to
                experience deep peace, spiritual awakening, and the divine essence of
                Shiva.
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
