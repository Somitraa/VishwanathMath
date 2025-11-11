"use client";

import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Events from "@/components/events";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Guruji from "@/components/guruji";
import Vatika from "@/components/Vatika";
import ChiranjiviTemple from "@/components/ChiranjiviTemple";
import RudraPeeth from "@/components/RudraPeeth";
import BelVan from "@/components/BelVan";
import MainTemple from "@/components/main";
import Gaushala from "@/components/Gaushala";
import SidhGiri from "@/components/SidhGiri";
import Swaroopanand from "@/components/Swaroopanand";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && <SplashScreen onFinish={() => setShowContent(true)} />}

      {showContent && (
        <main className="min-h-screen scroll-smooth">
          <Header />
          <Hero />

          {/* 🌈 Gradient Bridge between Hero → MainTemple */}
          <div className="h-32 bg-gradient-to-b from-transparent via-[#fff8ef] to-white" />

          {/* 🛕 Main Sections */}
           <MainTemple />  {/*white */}
          <SidhGiri />
          <BelVan />{/*white */}
          <ChiranjiviTemple />
          <RudraPeeth />{/*white */}
          <Gaushala />
          <Vatika />{/*white */}

          <About />
          <Services />{/*white */}

          <Swaroopanand />
          <Guruji />{/*white */}

          <Events />
          <Contact />{/*white */}

          <Footer />
        </main>
      )}
    </>
  );
}
