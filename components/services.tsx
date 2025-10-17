export default function Services() {
  const services = [
    { name: "Daily Prayers", time: "6:00 AM - 8:00 PM", icon: "🙏" },
    { name: "Spiritual Counseling", time: "By Appointment", icon: "💭" },
    { name: "Yoga & Meditation", time: "Mon-Fri 6:00 AM", icon: "🧘" },
    { name: "Vedic Rituals", time: "Scheduled Events", icon: "✨" },
    { name: "Community Meals", time: "Daily 12:00 PM", icon: "🍲" },
    { name: "Educational Programs", time: "Weekends", icon: "📖" },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-foreground/70">Comprehensive spiritual and community services for all seekers</p>
        </div>

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
  )
}
