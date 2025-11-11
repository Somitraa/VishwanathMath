"use client";
import { useLang } from "@/context/LanguageProvider";

export default function ChiranjiviTemple() {
  const { lang } = useLang();

  const chiranjivis =
    lang === "hi"
      ? [
          { name: "अश्वत्थामा (Ashwatthama)", description: "महाभारत के योद्धा जिन्हें भगवान श्रीकृष्ण ने अमरत्व का वरदान दिया।" },
          { name: "बलि राजा (King Bali)", description: "दानवीर असुरराज जिन्हें भगवान विष्णु ने अमरत्व और पाताल लोक का अधिपत्य दिया।" },
          { name: "महर्षि व्यास (Maharshi Vyasa)", description: "महाभारत के रचयिता और वेदों के संकलक, जो सदा धर्म की रक्षा करते हैं।" },
          { name: "हनुमान (Hanuman)", description: "भगवान श्रीराम के परम भक्त, जो भक्तों की रक्षा के लिए सदा उपस्थित रहते हैं।" },
          { name: "विभीषण (Vibhishan)", description: "लंका के धर्मात्मा राजा, जिन्होंने धर्म के पक्ष में रहकर श्रीराम की सेवा की।" },
          { name: "कृपाचार्य (Kripacharya)", description: "महाभारत के गुरु, जिन्हें भगवान श्रीकृष्ण ने अमरत्व का आशीर्वाद दिया।" },
          { name: "परशुराम (Parashuram)", description: "भगवान विष्णु का छठा अवतार, जो सदा पृथ्वी पर धर्म की रक्षा हेतु विद्यमान हैं।" },
          { name: "मार्कंडेय ऋषि (Markandeya Rishi)", description: "भगवान शिव के कृपा पात्र, जिन्होंने मृत्यु पर विजय प्राप्त की।" },
        ]
      : [
          { name: "Ashwatthama", description: "A warrior from Mahabharata blessed with immortality by Lord Krishna." },
          { name: "King Bali", description: "Generous Asura king blessed with immortality and rule over Patal Lok by Lord Vishnu." },
          { name: "Maharshi Vyasa", description: "Composer of the Mahabharata and compiler of the Vedas, protector of Dharma." },
          { name: "Hanuman", description: "Devotee of Lord Rama, eternally present to protect the devotees." },
          { name: "Vibhishan", description: "Righteous king of Lanka who served Lord Rama by upholding Dharma." },
          { name: "Kripacharya", description: "Teacher of Mahabharata, granted immortality by Lord Krishna." },
          { name: "Parashuram", description: "Sixth incarnation of Lord Vishnu, protector of Dharma on Earth." },
          { name: "Markandeya Rishi", description: "Devotee of Lord Shiva who conquered death by divine grace." },
        ];

  return (
    <section
      id="chiranjivi"
      className="py-20 md:py-32 bg-gradient-to-br from-secondary/20 to-primary/10 border-t border-border/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {lang === "hi" ? "🛕 अष्ट चिरंजीवी मंदिर" : "🛕 Ashta Chiranjivi Temple"}
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {lang === "hi" ? (
              <>
                विश्वनाथ मठ परिसर में स्थित यह मंदिर आठ अमर आत्माओं —{" "}
                <span className="font-semibold text-primary">अष्ट चिरंजीवी</span> — को समर्पित है,
                जो सदैव धर्म, शक्ति और भक्ति के प्रतीक हैं।
              </>
            ) : (
              <>
                Located within the Vishwanath Math premises, this temple is dedicated to the eight
                immortal souls — <span className="font-semibold text-primary">Ashta Chiranjivis</span> — 
                symbols of eternal Dharma, strength, and devotion.
              </>
            )}
          </p>
        </div>

        {/* Chiranjivi Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {chiranjivis.map((person, idx) => (
            <div
              key={idx}
              className="bg-white/70 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary/30 border border-transparent transition-all duration-300 backdrop-blur-sm"
            >
              <div className="text-4xl mb-3 text-center">🪔</div>
              <h3 className="text-xl font-bold text-primary mb-2 text-center">{person.name}</h3>
              <p className="text-foreground/70 text-center leading-relaxed">{person.description}</p>
            </div>
          ))}
        </div>

        {/* Footer Message */}
        <div className="mt-16 text-center p-6 bg-gradient-to-r from-primary/5 to-secondary/10 rounded-xl border border-primary/20 shadow-sm">
          <p className="text-lg text-foreground/80 leading-relaxed">
            {lang === "hi" ? (
              <>
                यह मंदिर <em>अमरत्व, भक्ति और धर्म</em> के शाश्वत संदेश को समर्पित है। श्रद्धालु यहाँ
                दर्शन कर अपने जीवन में सकारात्मक ऊर्जा का अनुभव करते हैं।
              </>
            ) : (
              <>
                This temple is dedicated to the eternal message of{" "}
                <em>immortality, devotion, and Dharma</em>.  
                Devotees experience positive spiritual energy by visiting here.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}