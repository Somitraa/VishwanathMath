"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Get in Touch</h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Have questions or want to visit us? We'd love to hear from you. Reach out to us through any of the
              following methods.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Location</h3>
                  <p className="text-foreground/70">123 Temple Street, Sacred City, SC 12345</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Phone</h3>
                  <p className="text-foreground/70">+91-83194-23896</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Email</h3>
                  <p className="text-foreground/70">info@vishwanathmath.org</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
            <div className="mb-6">
              <label className="block text-foreground font-semibold mb-2">Name</label>
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
              <label className="block text-foreground font-semibold mb-2">Email</label>
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
              <label className="block text-foreground font-semibold mb-2">Message</label>
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
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:bg-primary/90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
