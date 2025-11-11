"use client";

import { useLang } from "@/context/LanguageProvider";

export default function Vatika() {
  const { lang } = useLang();

  const vatikaList =
    lang === "hi"
      ? [
          {
            title: "🌞 नवग्रह वाटिका (Navagrah Vatika)",
            description:
              "यह वाटिका नौ ग्रहों — सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु और केतु — को समर्पित है। प्रत्येक पौधा एक ग्रह की ऊर्जा को दर्शाता है और सकारात्मक प्रभाव प्रदान करता है।",
            plants: [
              "सूर्य – बेल (Aegle marmelos)",
              "चंद्र – श्वेत चंदन (Sandalwood)",
              "मंगल – अनंत (Periwinkle)",
              "बुध – तुलसी (Holy Basil)",
              "गुरु – पीपल (Sacred Fig)",
              "शुक्र – पारिजात (Night Jasmine)",
              "शनि – शमी (Prosopis cineraria)",
              "राहु – दुर्वा (Bermuda Grass)",
              "केतु – कुश (Kusha Grass)",
            ],
          },
          {
            title: "🌟 नक्षत्र वाटिका (Nakshatra Vatika)",
            description:
              "यह वाटिका 27 नक्षत्रों के अनुसार पौधों को समर्पित है, जहाँ प्रत्येक नक्षत्र का एक विशेष पौधा माना गया है। यह वाटिका मानव जीवन और प्रकृति के बीच दिव्य संतुलन का प्रतीक है।",
            plants: [
              "अश्विनी – कुचला",
              "भरणी – आंवला",
              "कृत्तिका – वट वृक्ष",
              "रोहिणी – जामुन",
              "मृगशिरा – बटेर",
              "आर्द्रा – नीम",
              "पुनर्वसु – बांस",
              "पुष्य – पीपल",
              "आश्रेषा – नागकेसर",
              "मघा – बरगद",
              "पूर्वा फाल्गुनी – पलाश",
              "उत्तर फाल्गुनी – कदंब",
              "हस्त – अमलतास",
              "चित्रा – बेल",
              "स्वाती – तुलसी",
              "विशाखा – साल",
              "अनुराधा – आम",
              "ज्येष्ठा – नारियल",
              "मूला – केसर",
              "पूर्वाषाढ़ा – महुआ",
              "उत्तराषाढ़ा – पीपल",
              "श्रवण – बेल",
              "धनिष्ठा – शमी",
              "शतभिषा – अर्जुन",
              "पूर्वभाद्रपदा – आंवला",
              "उत्तरभाद्रपदा – नीम",
              "रेवती – तुलसी",
            ],
          },
        ]
      : [
          {
            title: "🌞 Navagrah Vatika (Nine Planet Garden)",
            description:
              "This garden is dedicated to the nine planets — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu. Each plant represents a planetary energy that radiates positive influence.",
            plants: [
              "Sun – Bael",
              "Moon – Sandalwood",
              "Mars – Periwinkle",
              "Mercury – Holy Basil",
              "Jupiter – Sacred Fig",
              "Venus – Night Jasmine",
              "Saturn – Shami Tree",
              "Rahu – Bermuda Grass",
              "Ketu – Kusha Grass",
            ],
          },
          {
            title: "🌟 Nakshatra Vatika (Constellation Garden)",
            description:
              "This sacred garden is aligned with 27 constellations, each associated with a specific plant. It symbolizes the divine balance between human life and nature.",
            plants: [
              "Ashwini – Nux Vomica",
              "Bharani – Amla",
              "Krittika – Banyan Tree",
              "Rohini – Jamun",
              "Mrigashira – Vetiver",
              "Ardra – Neem",
              "Punarvasu – Bamboo",
              "Pushya – Peepal",
              "Ashlesha – Nagkesar",
              "Magha – Banyan",
              "Purva Phalguni – Palash",
              "Uttara Phalguni – Kadamba",
              "Hasta – Amaltas",
              "Chitra – Bael",
              "Swati – Tulsi",
              "Vishakha – Sal Tree",
              "Anuradha – Mango",
              "Jyeshtha – Coconut",
              "Mula – Saffron",
              "Purvashadha – Mahua",
              "Uttarashadha – Peepal",
              "Shravana – Bael",
              "Dhanishta – Shami Tree",
              "Shatabhisha – Arjuna",
              "Purva Bhadrapada – Amla",
              "Uttara Bhadrapada – Neem",
              "Revati – Tulsi",
            ],
          },
        ];

  return (
    <section
      id="vatika"
      className="py-20 md:py-32 bg-white border-t border-border/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {lang === "hi" ? " पवित्र वाटिकाएँ" : " Sacred Gardens"}
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {lang === "hi" ? (
              <>
                विश्वनाथ मठ परिसर में स्थित{" "}
                <span className="font-semibold text-primary">नवग्रह वाटिका</span> और{" "}
                <span className="font-semibold text-primary">नक्षत्र वाटिका</span> आध्यात्मिक ऊर्जा
                और प्राकृतिक संतुलन का सुंदर संगम हैं।
              </>
            ) : (
              <>
                Within the Vishwanath Math premises, the{" "}
                <span className="font-semibold text-primary">Navagrah Vatika</span> and{" "}
                <span className="font-semibold text-primary">Nakshatra Vatika</span> stand as divine
                harmonies of spiritual energy and natural balance.
              </>
            )}
          </p>
        </div>

        {/* Vatika Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {vatikaList.map((vatika, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 shadow-md border border-primary/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{vatika.title}</h3>
              <p className="text-foreground/80 mb-4 leading-relaxed">{vatika.description}</p>
              <ul className="list-disc list-inside text-foreground/80 space-y-1">
                {vatika.plants.map((plant, idx) => (
                  <li key={idx}>{plant}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}