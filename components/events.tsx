"use client";

import { useLang } from "@/context/LanguageProvider";

export default function Events() {
  const { t, lang } = useLang();

  // 🌍 Event data in both Hindi & English

  const events =
  lang === "hi"
    ? [
        {
          title: "गीता जयंती",
          date: "1 दिसम्बर, 2025",
          description:
            "भगवान श्रीकृष्ण द्वारा अर्जुन को प्रदत्त भगवद्गीता के दिव्य उपदेशों का स्मरण दिवस।",
        },
        {
          title: "वैकुण्ठ एकादशी",
          date: "31 दिसम्बर, 2025",
          description:
            "भगवान विष्णु के वैकुण्ठ लोक से आगमन का प्रतीक पर्व — मोक्ष की प्राप्ति का दिन।",
        },
        {
          title: "महाशिवरात्रि",
          date: "15 फरवरी, 2026",
          description:
            "भगवान शिव और माँ पार्वती के दिव्य मिलन की रात्रि — उपवास, ध्यान और भक्ति का पर्व।",
        },
      ]
    : [
        {
          title: "Gita Jayanti",
          date: "December 1, 2025",
          description:
            "Day commemorating the divine teachings of Lord Krishna to Arjuna in the Bhagavad Gita.",
        },
        {
          title: "Vaikuntha Ekadashi",
          date: "December 31, 2025",
          description:
            "Symbolizes Lord Vishnu’s return from Vaikuntha — a sacred day for liberation and devotion.",
        },
        {
          title: "Maha Shivaratri",
          date: "February 15, 2026",
          description:
            "The great night of Lord Shiva and Goddess Parvati — a time for fasting, meditation, and devotion.",
        },
      ];


  return (
    <section id="events" className="py-20 md:py-32 bg-secondary/30 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            {t.events_heading}
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {t.events_content}
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-8">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white border-l-4 border-primary rounded-xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{event.title}</h3>
                  <p className="text-foreground/70 mb-2 leading-relaxed">{event.description}</p>
                  <p className="text-primary font-semibold">{event.date}</p>
                </div>

                {/* Action Button */}
                <button
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition whitespace-nowrap"
                  aria-label={lang === "hi" ? "और जानें" : "Learn More"}
                >
                  {lang === "hi" ? "और जानें" : "Learn More"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
