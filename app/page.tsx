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

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && <SplashScreen onFinish={() => setShowContent(true)} />}

      {showContent && (
        <main className="min-h-screen">
          <Header />
          <Hero />
          <MainTemple />
          <BelVan />
          <ChiranjiviTemple />
          <RudraPeeth />
          <Gaushala />
          <Vatika />
          <About />
          <Services />
          <Guruji />
          <Events />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
