export default function Events() {
  const events = [
    {
      title: "Diwali Celebration",
      date: "November 1, 2025",
      description: "Festival of lights with special prayers and community gathering",
    },
    {
      title: "Holi Festival",
      date: "March 14, 2025",
      description: "Celebration of colors and new beginnings with traditional rituals",
    },
    {
      title: "Navratri Festival",
      date: "October 3-12, 2025",
      description: "Nine nights of devotion with special prayers and cultural programs",
    },
  ]

  return (
    <section id="events" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Upcoming Events</h2>
          <p className="text-lg text-foreground/70">Join us for sacred celebrations and spiritual gatherings</p>
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
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
