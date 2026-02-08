'use client';

// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { useMemo } from "react";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function StartPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  // Mouse movement kaga state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mouse move aagum pothu background subtly shift aagum
  const backgroundX = useTransform(mouseX, [-500, 500], ["0%", "10%"]);
  const backgroundY = useTransform(mouseY, [-500, 500], ["0%", "10%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  };

  // Precompute stable randomized values (run once on client render)
  const COUNT = 15;
  const items = useMemo(() => {
    return Array.from({ length: COUNT }).map(() => {
      return {
        heartX: `${Math.random() * 100}vw`,
        heartY: "110vh",
        heartScale: Math.random() * 1.5 + 1,
        heartFontSize: `${Math.random() * 4 + 2}rem`,
        heartDuration: Math.random() * 5 + 5,
        heartDelay: Math.random() * 5,
        nameX: `${Math.random() * 100}vw`,
        nameY: "110vh",
        nameScale: Math.random() * 0.5 + 1,
        nameFontSize: `${Math.random() * 1.5 + 1.5}rem`,
        nameDuration: Math.random() * 7 + 6,
        nameDelay: Math.random() * 3,
      };
    });
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
 
  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative flex h-screen items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)", // Light reddish & pinky color
      }}
    >
      {/* Dynamic Background Movement */}
      <motion.div 
        style={{ x: backgroundX, y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        {items.map((it, i) => (
          <div key={i}>
            {/* Floating Hearts */}
            <motion.span
              className="material-symbols-outlined absolute text-pink-400/40 select-none"
              initial={{ x: it.heartX, y: it.heartY, scale: it.heartScale }}
              animate={{ y: "-10vh", rotate: [0, 20, -20, 0], opacity: [0, 0.6, 0] }}
              transition={{ duration: it.heartDuration, repeat: Infinity, delay: it.heartDelay }}
              style={{ fontSize: it.heartFontSize }}
            >
              favorite
            </motion.span>

            {/* Floating Name: Prethika */}
            <motion.span
              className="absolute font-serif font-bold text-red-400/30 select-none whitespace-nowrap"
              initial={{ x: it.nameX, y: it.nameY, scale: it.nameScale }}
              animate={{ y: "-10vh", x: ["-2%", "2%", "-2%"], opacity: [0, 0.5, 0] }}
              transition={{ duration: it.nameDuration, repeat: Infinity, delay: it.nameDelay }}
              style={{ fontSize: it.nameFontSize }}
            >
              Prethika
            </motion.span>
          </div>
        ))}
      </motion.div>
 
      {/* Main Mail Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ rotate: 1 }} // Subtle tilt on hover
        className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 text-center max-w-sm z-10 border border-white/50"
      >
        {/* Mail Icon */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mb-4"
        >
          <span className="material-symbols-outlined text-8xl text-red-400">
            mail
          </span>
        </motion.div>

        {/* Text */}
        <h1 className="text-3xl font-extrabold text-[#4a1a1e] mb-2">
          Hello Prethika! 💌
        </h1>
        <p className="text-[#896168] text-base mb-8 font-medium">
          Someone has sent you a very special surprise...
        </p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#ff4d6d" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => router.push("/valentine")}
          className="bg-[#ff758c] text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg transition-colors"
        >
          Open Mail 💖
        </motion.button>
      </motion.div>

      {/* Footer text */}
      <p className="absolute bottom-6 text-sm tracking-[0.2em] font-semibold text-red-500/50 uppercase">
        made with love for Prethika 💗
      </p>

      {/* Audio Element */}
      {/* <audio controls src="/kanamani-anbudu.mp3" /> */}
    </div>
  );
}