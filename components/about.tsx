export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            विश्वनाथ मठ के बारे में
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            आध्यात्मिक परंपराओं को संरक्षित करने और सामुदायिक सद्भाव को बढ़ावा देने के उद्देश्य से स्थापित
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
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
          ].map((item, idx) => (
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
