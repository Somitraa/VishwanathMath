"use client";

import { useLang } from "@/context/LanguageProvider";

export default function SidhGiri() {
  const { lang } = useLang();

  return (
    <section
      id="sidhgiri"
      className="py-20 md:py-32 bg-gradient-to-br from-secondary/20 to-primary/10 border-t border-border/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {lang === "hi"
              ? "🕉 सिद्ध गिरि पर्वत — एक पवित्र स्थल"
              : "🕉 Sidh Giri Parvat — A Divine and Sacred Place"}
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {lang === "hi"
              ? "विश्वनाथ मठ का यह पवित्र स्थल अपने आप में अत्यंत चमत्कारिक और दिव्य ऊर्जा से परिपूर्ण है।"
              : "The sacred location of Vishwanath Math is imbued with divine energy and ancient spiritual significance."}
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
            {lang === "hi" ? (
              <>
                <p>
                  यह स्थान <strong>सिद्ध गिरि पर्वत</strong> के नाम से प्रसिद्ध है। इसे{" "}
                  <span className="font-semibold text-primary">
                    एक अत्यंत सिद्ध और तपोभूमि स्थल
                  </span>{" "}
                  माना जाता है।
                </p>

                <p>
                  कहा जाता है कि{" "}
                  <strong>प्रबोधिनी एकादशी (देव उठनी ग्यारस)</strong> के पावन दिन इस स्थल पर{" "}
                  <span className="font-semibold text-primary">
                    देवताओं का दिव्य प्रकाश
                  </span>{" "}
                  प्रकट होता है। यह घटना इस पवित्र पर्वत की{" "}
                  <strong>अलौकिक ऊर्जा, सिद्धता और आध्यात्मिक जागृति</strong> का प्रतीक मानी जाती है।
                </p>

                <p>
                  पौराणिक मान्यता के अनुसार, यहीं{" "}
                  <strong>गौ माता के खुरों के स्पर्श</strong> से एक पवित्र तालाब उत्पन्न हुआ था।
                  यह{" "}
                  <span className="font-semibold text-primary">गौखुर तालाब</span>{" "}
                  आज भी जल से भरा रहता है और भक्तों के लिए आस्था का केंद्र है।
                </p>

                <p>
                  इस पर्वत की पवित्रता और शक्ति आज भी{" "}
                  <strong>ध्यान, साधना और शिव भक्ति</strong> करने वाले साधकों को अद्भुत शांति और
                  सिद्धि का अनुभव कराती है।
                </p>
              </>
            ) : (
              <>
                <p>
                  This sacred place, known as <strong>Sidh Giri Parvat</strong>, is considered a{" "}
                  <span className="font-semibold text-primary">
                    divine and spiritually potent land of penance
                  </span>{" "}
                  where countless sages have meditated.
                </p>

                <p>
                  It is believed that on{" "}
                  <strong>Prabodhini Ekadashi (Dev Uthani Gyaras)</strong>, the{" "}
                  <span className="font-semibold text-primary">
                    divine light of celestial beings
                  </span>{" "}
                  manifests over this sacred mountain — symbolizing{" "}
                  <strong>its eternal spiritual energy and enlightenment.</strong>
                </p>

                <p>
                  According to ancient legend, a sacred pond was formed here by the{" "}
                  <strong>hoof marks of the holy cow (Gau Mata)</strong>. This{" "}
                  <span className="font-semibold text-primary">Gaukhur Talab</span> remains filled
                  with water to this day, symbolizing divine purity and blessing.
                </p>

                <p>
                  The sanctity of this mountain continues to bless those who meditate and worship
                  Lord Shiva here, granting them peace, spiritual awakening, and divine connection.
                </p>
              </>
            )}
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-primary/20">
            <img
              src="/parwat.jpg"
              alt={
                lang === "hi"
                  ? "सिद्ध गिरि पर्वत का पवित्र दृश्य"
                  : "Sacred view of Sidh Giri Parvat"
              }
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary/5 to-secondary/10 p-8 rounded-xl border border-primary/20 shadow-sm">
          <p className="text-lg text-foreground leading-relaxed">
            {lang === "hi" ? (
              <>
                सिद्ध गिरि पर्वत केवल एक भौगोलिक स्थान नहीं, बल्कि{" "}
                <strong>भक्ति, तप और सिद्धि का जीवंत केंद्र</strong> है — जहाँ प्रत्येक श्वास
                शिव की उपस्थिति का अनुभव कराती है।
              </>
            ) : (
              <>
                Sidh Giri Parvat is not just a geographic location but{" "}
                <strong>a living center of devotion, penance, and divine realization</strong> — where
                every breath echoes with the presence of Lord Shiva.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
