"use client"

export default function Hero() {
  const handleVisitClick = () => {
    window.open("https://maps.google.com/?q=23.8348075,78.0512824", "_blank");
  };

  const handleDonateClick = () => {
    window.open("https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID", "_blank");
  };

  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-primary text-balance">
              विश्वनाथ मठ में आपका स्वागत है
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              एक पवित्र स्थान जो आध्यात्मिक विकास, दिव्य ज्ञान और सामुदायिक सेवा के लिए समर्पित है। 
              हमारे साथ ज्ञान और भक्ति की इस यात्रा में जुड़ें।
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleVisitClick}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                दर्शन करें
              </button>
              <button
                onClick={handleDonateClick}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition"
              >
                दान करें
              </button>
            </div>
          </div>
          <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
            <img src="/images.jpg" alt="मंदिर" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
