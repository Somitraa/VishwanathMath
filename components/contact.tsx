"use client";

import { useLang } from "@/context/LanguageProvider";
import { useState } from "react";

export default function Contact() {
  const { lang } = useLang();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const payload = new URLSearchParams();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("message", formData.message);

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwlxGeOBpInF2fJ5DBBq9rPz11eoJUPE3M7GrLwy-SxfubjaSKDv-Z0TeJ2nIQ1Hi53/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: payload.toString(),
        }
      );

      const result = await res.json();

      if (result.result === "success") {
        setSuccess(
          lang === "hi"
            ? "आपका संदेश सफलतापूर्वक भेज दिया गया है! 🙏"
            : "Your message has been sent successfully! 🙏"
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(
          lang === "hi"
            ? "संदेश भेजने में समस्या हुई। कृपया पुनः प्रयास करें।"
            : "There was an issue sending your message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccess(
        lang === "hi"
          ? "नेटवर्क त्रुटि! कृपया बाद में पुनः प्रयास करें।"
          : "Network error! Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Info Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {lang === "hi" ? "संपर्क करें" : "Contact Us"}
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              {lang === "hi"
                ? "कोई प्रश्न है या हमसे मिलना चाहते हैं? हमें आपसे सुनकर खुशी होगी। नीचे दिए गए किसी भी माध्यम से हमसे संपर्क करें।"
                : "Have a question or wish to meet us? We’d love to hear from you. Reach out through any of the ways below."}
            </p>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">
                    {lang === "hi" ? "स्थान" : "Location"}
                  </h3>
                  <p className="text-foreground/70">
                    Vishwanath Math, Sidh Giri Parvat, Negma Pipariya, Madhya Pradesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">
                    {lang === "hi" ? "फ़ोन" : "Phone"}
                  </h3>
                  <p className="text-foreground/70">+91-83194-23896</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">
                    {lang === "hi" ? "ईमेल" : "Email"}
                  </h3>
                  <p className="text-foreground/70">
                    <a
                      href="mailto:shrivishwanathmath@gmail.com"
                      className="hover:text-primary underline underline-offset-2 transition"
                    >
                      shrivishwanathmath@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <form
            onSubmit={handleSubmit}
            className="bg-secondary/10 rounded-xl p-8 shadow-md border border-border/10 hover:shadow-lg transition"
          >
            <div className="mb-6">
              <label className="block text-foreground font-semibold mb-2">
                {lang === "hi" ? "नाम" : "Name"}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-foreground font-semibold mb-2">
                {lang === "hi" ? "ईमेल" : "Email"}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-foreground font-semibold mb-2">
                {lang === "hi" ? "संदेश" : "Message"}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 border-2 border-border rounded-lg focus:outline-none focus:border-primary resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-bold transition ${
                loading
                  ? "bg-primary/70 cursor-not-allowed text-white"
                  : "bg-primary hover:bg-primary/90 text-primary-foreground"
              }`}
            >
              {loading
                ? lang === "hi"
                  ? "भेजा जा रहा है..."
                  : "Sending..."
                : lang === "hi"
                ? "संदेश भेजें"
                : "Send Message"}
            </button>

            {success && (
              <p className="mt-4 text-center text-sm text-green-700 font-semibold">
                {success}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
