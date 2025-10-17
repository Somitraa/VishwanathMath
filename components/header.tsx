"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span ><img src="/logo.jpg" alt="" /></span>
          </div>
          <h1 className="text-2xl font-bold text-primary">VishwanathMath</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-foreground hover:text-primary transition">
            About
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition">
            Services
          </a>
          <a href="#events" className="text-foreground hover:text-primary transition">
            Events
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary/50 px-4 py-4 space-y-3">
          <a href="#about" className="block text-foreground hover:text-primary">
            About
          </a>
          <a href="#services" className="block text-foreground hover:text-primary">
            Services
          </a>
          <a href="#events" className="block text-foreground hover:text-primary">
            Events
          </a>
          <a href="#contact" className="block text-foreground hover:text-primary">
            Contact
          </a>
        </div>
      )}
    </header>
  )
}
