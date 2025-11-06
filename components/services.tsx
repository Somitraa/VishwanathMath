"use client";

import { useLang } from "@/context/LanguageProvider";

export default function Services() {
  const { lang } = useLang();

  // 🕉️ Service data in both Hindi & English
  const services =
    lang === "hi"
      ? [
          { name: "दैनिक पूजा", time: "सुबह 6:00 बजे - रात 8:00 बजे", icon: "🙏" },
          { name: "आध्यात्मिक परामर्श", time: "पूर्व नियुक्ति द्वारा", icon: "💭" },
          { name: "योग और ध्यान", time: "सोमवार-शुक्रवार सुबह 6:00 बजे", icon: "🧘" },
          { name: "वैदिक अनुष्ठान", time: "निर्धारित कार्यक्रमों के अनुसार", icon: "✨" },
          { name: "सामुदायिक भोजन", time: "प्रतिदिन दोपहर 12:00 बजे", icon: "🍲" },
          { name: "शैक्षणिक कार्यक्रम", time: "सप्ताहांत पर", icon: "📖" },
        ]
      : [
          { name: "Daily Worship", time: "6:00 AM – 8:00 PM", icon: "🙏" },
          { name: "Spiritual Counseling", time: "By prior appointment", icon: "💭" },
          { name: "Yoga & Meditation", time: "Mon–Fri at 6:00 AM", icon: "🧘" },
          { name: "Vedic Rituals", time: "As per scheduled programs", icon: "✨" },
          { name: "Community Meals", time: "Daily at 12:00 PM", icon: "🍲" },
          { name: "Educational Programs", time: "On weekends", icon: "📖" },
        ];

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            {lang === "hi" ? "हमारी सेवाएँ" : "Our Services"}
          </h2>
          <p className="text-lg text-foreground/70">
            {lang === "hi"
              ? "सभी साधकों के लिए व्यापक आध्यात्मिक और सामुदायिक सेवाएँ"
              : "Comprehensive spiritual and community services for all seekers."}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:border-primary/20 border-2 border-transparent transition"
            >
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{service.name}</h3>
              <p className="text-foreground/70">{service.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
