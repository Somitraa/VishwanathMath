export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-primary text-balance">Welcome to VishwanathMath</h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              A sacred sanctuary dedicated to spiritual growth, divine wisdom, and community service. Join us in our
              journey of enlightenment and devotion.
            </p>
            <div className="flex gap-4">
              <button  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
                Visit Us
              </button>
              <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition">
                Donate
              </button>
            </div>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
            <img src="/temple.jpg" alt="Temple" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
