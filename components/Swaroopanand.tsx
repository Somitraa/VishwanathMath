"use client";

import { useLang } from "@/context/LanguageProvider";

export default function Swaroopanand() {
  const { lang } = useLang();

  return (
    <section
      id="swaroopanand"
      className="py-20 md:py-32 bg-gradient-to-br from-secondary/20 to-primary/10 border-t border-border/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {lang === "hi"
              ? " जगतगुरु शंकराचार्य श्रद्धेय स्वामी श्री स्वरूपानंद सरस्वती जी महाराज"
              : "🕉 Paramhans Swami Swaroopanand Saraswati Ji Maharaj"}
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {lang === "hi"
              ? "आचार्य मनीष द्विवेदी जी के गुरु, जगतगुरु शंकराचार्य परंपरा के तेजस्वी दीपक — परमहंस श्री स्वरूपानंद सरस्वती जी।"
              : "The revered Guru of Acharya Manish Dwivedi Ji, and a shining beacon of the Shankaracharya lineage — Paramhans Swami Swaroopanand Saraswati Ji."}
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-primary/20 group">
            <img
              src="/swaroopanand.jpg"
              alt={
                lang === "hi"
                  ? "परमहंस श्री स्वामी स्वरूपानंद सरस्वती जी महाराज"
                  : "Paramhans Swami Swaroopanand Saraswati Ji Maharaj"
              }
              className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
          </div>

          {/* Text */}
          <div className="space-y-6 text-foreground/80 leading-relaxed text-lg">
            {lang === "hi" ? (
              <>
                <p>
                  <strong>परमहंस श्री स्वामी स्वरूपानंद सरस्वती जी महाराज</strong> जगतगुरु
                  शंकराचार्य परंपरा के प्रतिष्ठित आचार्य थे। उनका जन्म{" "}
                  <strong>2 सितम्बर 1924</strong> को हुआ और उन्होंने{" "}
                  <strong>11 सितम्बर 2022</strong> को देह त्याग किया।
                </p>

                <p>
                  उन्होंने <strong>1982 से द्वारका शारदा पीठ</strong> के शंकराचार्य के रूप में सेवा
                  की। उनका जीवन केवल आध्यात्मिक नहीं बल्कि देशभक्ति और स्वतंत्रता संग्राम के
                  लिए भी समर्पित रहा।
                </p>

                <p>
                  स्वामी जी ने <strong>भारत छोड़ो आंदोलन</strong> में सक्रिय भूमिका निभाई और जेल
                  भी गए। वे एक <strong>महान संत, विचारक और समाज सुधारक</strong> थे, जिनका जीवन
                  धर्म, राष्ट्र और ज्ञान के लिए समर्पित रहा।
                </p>

                <p>
                  आचार्य मनीष द्विवेदी जी को उन्होंने{" "}
                  <strong>गुरु दीक्षा</strong> प्रदान की और तंत्र, वेद तथा
                  आध्यात्मिक साधना में मार्गदर्शन किया। इस दीक्षा के माध्यम से गुरु-शिष्य परंपरा
                  की दिव्य ज्योति विश्वनाथ मठ में प्रज्वलित हुई।
                </p>
              </>
            ) : (
              <>
                <p>
                  <strong>Paramhans Swami Swaroopanand Saraswati Ji Maharaj</strong> was a revered
                  spiritual leader in the <strong>Jagadguru Shankaracharya tradition</strong>. He
                  was born on <strong>September 2, 1924</strong>, and attained Mahasamadhi on{" "}
                  <strong>September 11, 2022</strong>.
                </p>

                <p>
                  Since <strong>1982</strong>, he served as the{" "}
                  <strong>Shankaracharya of Dwarka Sharada Peeth</strong>. His life was devoted not
                  only to spirituality but also to India’s freedom and social awakening.
                </p>

                <p>
                  Swami Ji participated actively in the{" "}
                  <strong>Quit India Movement</strong> and was imprisoned for his service to the
                  nation. He was a <strong>great saint, philosopher, and reformer</strong> dedicated
                  to Dharma, knowledge, and national unity.
                </p>

                <p>
                  He blessed <strong>Acharya Manish Dwivedi Ji</strong> with{" "}
                  <strong>Gurudeeksha</strong>, guiding him in the paths of Tantra, Vedas, and
                  spiritual realization. Through this sacred initiation, the light of the
                  guru-disciple lineage continues to shine at Vishwanath Math.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl p-8 text-center border border-primary/20 shadow-sm">
          <p className="text-lg text-foreground leading-relaxed">
            {lang === "hi" ? (
              <>
                परमहंस स्वामी स्वरूपानंद सरस्वती जी की कृपा से विश्वनाथ मठ की हर
                साधना में गुरु-शक्ति की दिव्यता विद्यमान है।
              </>
            ) : (
              <>
                Through the grace of Swami Swaroopanand Saraswati Ji, the divine energy of the Guru
                continues to bless every spiritual endeavor at Vishwanath Math.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
