import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Events from "@/components/events"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Guruji from "@/components/guruji"
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Guruji />

      <Events />
      <Contact />
      <Footer />
    </main>
  )
}
