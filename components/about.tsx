"use client";

import { useLang } from "@/context/LanguageProvider";

export default function About() {
  const { t, lang } = useLang();

  // ✅ About features (Hindi & English)
  const features =
    lang === "hi"
      ? [
          {
            title: "आध्यात्मिक धरोहर",
            description:
              "प्राचीन वैदिक परंपराओं में निहित, हम आध्यात्मिक साधनाओं की पवित्रता और प्रामाणिकता को बनाए रखते हैं।",
            icon: "🕉️",
          },
          {
            title: "सामुदायिक सेवा",
            description:
              "शिक्षा, स्वास्थ्य सेवा और सामाजिक कल्याण कार्यक्रमों के माध्यम से समाज की सेवा के लिए समर्पित।",
            icon: "🤝",
          },
          {
            title: "दिव्य ज्ञान",
            description:
              "साधकों को उनकी आध्यात्मिक यात्रा में मार्गदर्शन देने हेतु कालातीत ज्ञान और शिक्षाओं को साझा करना।",
            icon: "📚",
          },
        ]
      : [
          {
            title: "Spiritual Heritage",
            description:
              "Rooted in ancient Vedic traditions, we preserve the purity and authenticity of spiritual practices.",
            icon: "🕉️",
          },
          {
            title: "Community Service",
            description:
              "Dedicated to serving society through education, healthcare, and welfare programs.",
            icon: "🤝",
          },
          {
            title: "Divine Knowledge",
            description:
              "Sharing timeless wisdom and teachings to guide seekers on their spiritual journey.",
            icon: "📚",
          },
        ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            {lang === "hi" ? "विश्वनाथ मठ के बारे में" : "About Vishwanath Math"}
          </h2>

          <p className="text-lg text-foreground/80 leading-relaxed">
            {lang === "hi" ? (
              <>
                आध्यात्मिक परंपराओं को संरक्षित करने और सामुदायिक सद्भाव को बढ़ावा देने के उद्देश्य से स्थापित{" "}
                <span className="font-semibold text-primary">विश्वनाथ मठ</span> एक दिव्य स्थल है,
                जहाँ भक्ति, साधना और सेवा का अद्भुत संगम देखने को मिलता है।
                यहाँ पर स्थापित{" "}
                <span className="font-semibold text-primary">1100 शिवलिंग</span> भगवान शिव की अनंत महिमा
                और शक्ति के प्रतीक हैं, जो भक्तों को आत्मिक शांति और आध्यात्मिक ऊर्जा का अनुभव कराते हैं। <br />
                यह मठ केवल एक उपासना स्थल नहीं, बल्कि एक ऐसा आध्यात्मिक केंद्र है जो संस्कृति, ज्ञान और मानवता के मार्ग को आलोकित करता है।
              </>
            ) : (
              <>
                Established to preserve spiritual traditions and promote community harmony,{" "}
                <span className="font-semibold text-primary">Vishwanath Math</span> is a divine
                sanctuary where devotion, meditation, and service unite beautifully.  
                The{" "}
                <span className="font-semibold text-primary">1100 Shivlings</span> installed here
                symbolize the infinite glory and power of Lord Shiva, offering devotees deep spiritual
                peace and energy. <br />
                The Math is not just a place of worship but a spiritual center illuminating the path of
                culture, wisdom, and humanity.
              </>
            )}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-secondary rounded-xl p-8 text-center hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
