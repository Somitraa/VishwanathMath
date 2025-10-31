export default function Events() {
  const events = [
    {
      title: "दीवाली उत्सव",
      date: "1 नवम्बर, 2025",
      description: "विशेष पूजा और सामुदायिक एकत्रण के साथ रोशनी का पर्व",
    },
    {
      title: "होली उत्सव",
      date: "14 मार्च, 2025",
      description: "रंगों और नए आरंभ का पर्व पारंपरिक अनुष्ठानों के साथ मनाया जाएगा",
    },
    {
      title: "नवरात्रि उत्सव",
      date: "3-12 अक्टूबर, 2025",
      description: "भक्ति की नौ रातें — विशेष पूजा और सांस्कृतिक कार्यक्रमों के साथ",
    },
  ];

  return (
    <section id="events" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            आगामी कार्यक्रम
          </h2>
          <p className="text-lg text-foreground/70">
            पवित्र उत्सवों और आध्यात्मिक सभाओं में हमारे साथ जुड़ें
          </p>
        </div>

        <div className="space-y-6">
          {events.map((event, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-primary rounded-lg p-8 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{event.title}</h3>
                  <p className="text-foreground/70 mb-2">{event.description}</p>
                  <p className="text-primary font-semibold">{event.date}</p>
                </div>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition whitespace-nowrap">
                  और जानें
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
