"use client";

import type React from "react";
import { useState } from "react";

export default function Contact() {
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
// https://docs.google.com/spreadsheets/d/1S240p_xWCGTZMupUSdiVRA6PeUWVXdu-_YPAxHCiluc/edit?gid=0#gid=0
    try {
      const res = await fetch("https://script.google.com/macros/s/AKfycbzGbJXx7NwvOrB5eIeHWOueb5q-O4hE3xGOK9ryb5Jm9dA4MDB8wzzuwIbGrizYhemWIw/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("आपका संदेश सफलतापूर्वक भेज दिया गया है!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess("संदेश भेजने में समस्या हुई। कृपया पुनः प्रयास करें।");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccess("नेटवर्क त्रुटि! कृपया बाद में पुनः प्रयास करें।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Info Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
              संपर्क करें
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              कोई प्रश्न है या हमसे मिलना चाहते हैं? हमें आपसे सुनकर खुशी होगी। नीचे दिए गए किसी भी माध्यम से हमसे संपर्क करें।
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">स्थान</h3>
                  <p className="text-foreground/70">विश्वनाथ मठ, नेगमा पिपरिया, मध्य प्रदेश</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">फ़ोन</h3>
                  <p className="text-foreground/70">+91-83194-23896</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">ईमेल</h3>
                  <p className="text-foreground/70">shrivishwanathmath@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
            <div className="mb-6">
              <label className="block text-foreground font-semibold mb-2">नाम</label>
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
              <label className="block text-foreground font-semibold mb-2">ईमेल</label>
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
              <label className="block text-foreground font-semibold mb-2">संदेश</label>
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
                  ? "bg-primary/70 cursor-not-allowed"
                  : "bg-primary hover:bg-primary/90 text-primary-foreground"
              }`}
            >
              {loading ? "भेजा जा रहा है..." : "संदेश भेजें"}
            </button>

            {success && (
              <p className="mt-4 text-center text-sm text-green-700 font-semibold">{success}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
