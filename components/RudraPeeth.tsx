"use client";

import { useLang } from "@/context/LanguageProvider";

export default function RudraPeeth() {
  const { lang } = useLang();

  const rudras =
    lang === "hi"
      ? [
          { name: "कपाली (Kapali)", description: "भगवान शिव का वह रूप जो सृष्टि के आरंभ और अंत दोनों में विद्यमान हैं।" },
          { name: "पिंगल (Pingal)", description: "अग्नि के समान तेजस्वी रूप, जो अज्ञान का नाश करते हैं।" },
          { name: "भीम (Bheem)", description: "भय और अन्याय का विनाश करने वाले पराक्रमी रुद्र।" },
          { name: "विरूपाक्ष (Virupaksha)", description: "त्रिनेत्रधारी, जो भूत, वर्तमान और भविष्य के ज्ञाता हैं।" },
          { name: "विलोहित (Vilohit)", description: "गंभीर और ध्यानमग्न रूप, जो संसार के आंतरिक रहस्यों को जानते हैं।" },
          { name: "शास्ता (Shasta)", description: "धर्म के रक्षक, जो संतुलन और न्याय के प्रतीक हैं।" },
          { name: "अजपाद (Ajapad)", description: "नित्य ध्यानमग्न, जो योग और आत्मज्ञान का मार्ग दिखाते हैं।" },
          { name: "अहिरबुध्न्य (Ahirbudhnya)", description: "जल तत्व के अधिपति, जो स्थिरता और गहराई का प्रतीक हैं।" },
          { name: "शंभु (Shambhu)", description: "कल्याणकारी रूप, जो भक्ति और प्रेम के सागर हैं।" },
          { name: "चंद (Chanda)", description: "क्रोध रूप में भी करुणा का स्रोत, जो अधर्म का अंत करते हैं।" },
          { name: "भव (Bhava)", description: "जीवन के प्रत्येक रूप में विद्यमान, सृजन और संहार दोनों के स्वामी।" },
        ]
      : [
          { name: "Kapali", description: "The form of Lord Shiva who exists at both the beginning and end of creation." },
          { name: "Pingal", description: "Radiant like fire, the destroyer of ignorance." },
          { name: "Bheem", description: "The powerful Rudra who eliminates fear and injustice." },
          { name: "Virupaksha", description: "The three-eyed seer who knows the past, present, and future." },
          { name: "Vilohit", description: "The meditative and mysterious form, knower of the inner truths of the universe." },
          { name: "Shasta", description: "Protector of Dharma, symbol of balance and justice." },
          { name: "Ajapad", description: "Ever meditative, guiding souls on the path of yoga and self-realization." },
          { name: "Ahirbudhnya", description: "Lord of the water element, symbolizing depth and stability." },
          { name: "Shambhu", description: "The auspicious one — embodiment of love and compassion." },
          { name: "Chanda", description: "Fierce yet compassionate, the destroyer of adharma (injustice)." },
          { name: "Bhava", description: "Present in all forms of life — master of creation and dissolution." },
        ];

  return (
    <section
      id="rudra"
      className="py-20 md:py-32 bg-secondary/30 border-t border-border/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {lang === "hi" ? "🕉️ एकादश रुद्र पीठ" : "🕉️ Ekadash Rudra Peeth"}
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {lang === "hi" ? (
              <>
                विश्वनाथ मठ परिसर में स्थित{" "}
                <span className="font-semibold text-primary">
                  एकादश रुद्र पीठ
                </span>{" "}
                भगवान शिव के ग्यारह दिव्य रूपों को समर्पित है — जो सृष्टि, पालन और संहार के विभिन्न
                आयामों का प्रतिनिधित्व करते हैं।
              </>
            ) : (
              <>
                Located within the Vishwanath Math premises, the{" "}
                <span className="font-semibold text-primary">
                  Ekadash Rudra Peeth
                </span>{" "}
                is dedicated to the eleven divine forms of Lord Shiva — each representing
                different aspects of creation, preservation, and dissolution.
              </>
            )}
          </p>
        </div>

        {/* Rudra Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {rudras.map((rudra, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-primary/10 bg-white hover:border-primary/40 hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="text-4xl mb-3">🔱</div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {rudra.name}
              </h3>
              <p className="text-foreground/80">{rudra.description}</p>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center shadow-sm">
          <p className="text-lg text-foreground/80 leading-relaxed">
            {lang === "hi" ? (
              <>
                यह पीठ <strong>भगवान रुद्र</strong> के ग्यारह रूपों के माध्यम से आध्यात्मिक शक्ति,
                शांति और आत्मज्ञान की साधना का केंद्र है।
              </>
            ) : (
              <>
                This sacred Peeth, through the eleven forms of{" "}
                <strong>Lord Rudra</strong>, serves as a center for meditation,
                spiritual power, peace, and self-realization.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
