"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [show, setShow] = useState(true);
  const [particles, setParticles] = useState<{ x: number; y: number; scale: number }[]>([]);

  useEffect(() => {
    // ✅ Only access window after mount
    const numParticles = 40;
    const newParticles = Array.from({ length: numParticles }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      scale: Math.random() * 1.2,
    }));
    setParticles(newParticles);

    const timer = setTimeout(() => {
      setShow(false);
      onFinish();
    }, 4200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.15 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#fff8f2] via-[#fefbf8] to-[#fff3e0] overflow-hidden"
        >
          {/* 🌈 Moving Gradient Overlay */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent blur-2xl"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* ✨ Floating Divine Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
              <motion.span
                key={i}
                className="absolute w-[3px] h-[3px] bg-primary/50 rounded-full blur-[1px]"
                initial={{
                  x: p.x,
                  y: p.y,
                  opacity: 0,
                  scale: p.scale,
                }}
                animate={{
                  y: -50,
                  opacity: [0.2, 1, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>

          {/* 🔱 Glowing, Rotating Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="relative mb-6"
          >
            {/* Aura Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/30 blur-3xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <Image
              src="/logo.jpg"
              alt="Vishwanath Math Logo"
              width={160}
              height={160}
              className="rounded-full shadow-2xl relative z-10 border-4 border-white/70"
              priority
            />
          </motion.div>

          {/* 🕉 Divine Title */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-7xl font-bold text-primary drop-shadow-xl tracking-wide relative"
          >
            विश्वनाथ मठ
            <motion.div
              className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary/80 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 1.2 }}
            />
          </motion.h1>

          {/* ✨ Mantra Fade-in */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.8 }}
            className="text-xl md:text-2xl text-primary/80 mt-4 font-medium italic tracking-wide"
          >
            “ॐ नमः शिवाय”
          </motion.p>

          {/* 🌸 Light Flare Burst Exit */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.7, 0], scale: [0.5, 2, 3] }}
            transition={{ delay: 3, duration: 1.5, ease: "easeOut" }}
            className="absolute w-40 h-40 bg-primary/40 blur-3xl rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}