export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">About VishwanathMath</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Established with a vision to preserve spiritual traditions and foster community harmony
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Spiritual Heritage",
              description:
                "Rooted in ancient Vedic traditions, we maintain the sanctity and authenticity of spiritual practices.",
              icon: "🕉️",
            },
            {
              title: "Community Service",
              description:
                "Dedicated to serving the community through education, healthcare, and social welfare programs.",
              icon: "🤝",
            },
            {
              title: "Divine Wisdom",
              description: "Sharing timeless wisdom and teachings to guide seekers on their spiritual journey.",
              icon: "📚",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-secondary rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
