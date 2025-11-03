"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setShow(false);
      onFinish();
    } else {
      const timer = setTimeout(() => {
        localStorage.setItem("hasVisited", "true");
        setShow(false);
        onFinish();
      }, 2500); // 2.5 seconds for smoother animation
      return () => clearTimeout(timer);
    }
  }, [onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20"
        >
          {/* Logo animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-4"
          >
            <Image
              src="/logo.jpg" // ✅ your logo path
              alt="Vishwanath Math Logo"
              width={120}
              height={120}
              className="rounded-full shadow-xl"
              priority
            />
          </motion.div>

          {/* Text animation */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-primary tracking-wide drop-shadow-lg"
          >
            विश्वनाथ मठ
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
