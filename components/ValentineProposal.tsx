

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";


const FloatingHeart = ({ delay = 0, size = "text-4xl", position = {} }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, y: 0 }}
    animate={{
      opacity: [0, 0.3, 0],
      scale: [0.5, 1.2, 0.5],
      y: [-20, -120],
    }}
    transition={{ duration: 4, repeat: Infinity, delay }}
    className="absolute pointer-events-none text-primary"
    style={position}
  >
    <span className={`material-symbols-outlined ${size}`}>favorite</span>
  </motion.div>
);

export default function ValentineProposal() {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ x: 100, y: 300 });
  const [noCount, setNoCount] = useState(0);

  const router = useRouter();


     const noPhrases = [
  // 😶 Soft start
  "No 😶",
  "Hey! Don’t do that 😳",
  "Are you sure? 🥺",
  "Think again cutie 💭",
  "Last chance 😏",

  // 💔 Emotional phase
  "That hurt a little 💔",
  "Why would you say no? 😢",
  "My heart felt that 🥹",
  "I thought you liked me 😞",
  "Ouch… okay 😔",

  // 😤 Teasing drama
  "You’re teasing me now 😤",
  "Stop playing with my heart 😠❤️",
  "This is emotional torture 😭",
  "You enjoy this, don’t you? 😏",
  "You’re breaking my heart slowly 💔",

  // 💔 Fake breakup mode
  "Okay… we should talk 😶",
  "Maybe this won’t work 💔",
  "I guess I misunderstood us 😔",
  "I’ll give you space… 😢",
  "So this is goodbye? 🥀",

  // 😭 Sad but cute
  "I’ll still care about you 🥺",
  "Even if you say no… 💔",
  "My heart won’t listen 😞",
  "I tried my best 😢",
  "Love is pain sometimes 💔",

  // 😈 Plot twist – still love
  "Just kidding 😏❤️",
  "You can’t escape love 😈",
  "I know you want to say yes 😍",
  "Stop lying to yourself 😌",
  "Say yes already 😘",

  // 🫠 Final cute surrender
  "Fine… I’ll wait 🫠",
  "Take your time, I’m here 💞",
  "My heart chose you anyway ❤️",
  "No matter what, it’s you 💘",
];


  const moveNoButton = () => {
    const padding = 20;
    const width = 120;
    const height = 40;

    const maxX = window.innerWidth - width - padding;
    const maxY = window.innerHeight - height - padding;

    setNoPos({
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    });

    setNoCount((c) => c + 1);
  };

  const handleYes = () => {
    setIsAccepted(true);
    confetti({
      particleCount: 200,
      spread: 120,
      colors: ["#d62546", "#ffd6e0", "#fff"],
    });
  };

  const LoveWord = ({
    text,
    style,
  }: {
    text: string;
    style: React.CSSProperties;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: [0.6, 1, 0.6], y: [-5, 5, -5] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="fixed text-primary/70 font-medium text-sm pointer-events-none"
      style={style}
    >
      {text}
    </motion.div>
  );

  const HeartName = () => (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: [0.95, 1.05, 0.95] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute top-[18%] text-center z-10"
    >
    
     
    </motion.div>
  );

  const GiftCard = ({
  label,
  route,
}: {
  label: string;
  route: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 2 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => router.push(route)}
    className="cursor-pointer flex items-center justify-center text-center text-white font-bold"
    style={{
      width: 120,
      height: 120,
      background: "linear-gradient(135deg, #ff4d6d, #ff85a1)",
      clipPath:
        "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
    }}
  >
    <div>
      ❤️🎁
      <div className="text-xs mt-1">{label}</div>
    </div>
    
  </motion.div>
);


  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden romantic-gradient">
      {/* Floating hearts */}
      <FloatingHeart delay={0} position={{ top: "10%", left: "15%" }} />
      <FloatingHeart delay={1} position={{ bottom: "15%", right: "20%" }} />

      <AnimatePresence>
        {!isAccepted ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="heartbeat bg-white rounded-xl shadow-xl p-6 text-center max-w-md z-10"
          >
            <h1 className="text-3xl font-bold mb-2">
              Will you be my <span className="text-primary">Valentine?</span>
            </h1>
            <p className="text-gray-500 mb-6">
              I've been thinking of asking you this for a while…
            </p>

            <button
              onClick={handleYes}
              className="bg-primary text-white px-8 py-3 rounded-full text-lg font-bold shadow-md hover:scale-105 transition"
            >
              Yes ❤️
            </button>
            <button
            onClick={moveNoButton} 
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-bold shadow-md hover:scale-105 transition">
              No 😶
            </button>
          </motion.div>
        ) : (

          <motion.div
  initial={{ scale: 0.5, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  className="text-center z-10"
>
  <h1 className="text-5xl font-bold text-primary mb-2">
    Yay!!! ❤️
  </h1>
  <p className="text-xl mb-8">
    I knew you'd say yes 😘
  </p>
  <p className="text-xl mb-8">
    Select your gift 🎁 for your memories :)
  </p>

  {/* 🎁 Gift Grid */}
  {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center">
    <GiftCard label="Gift 1" route="/GiftsPage" />
    <GiftCard label="Gift 2" route="/gift2" />
    <GiftCard label="Gift 3" route="/gift3" />
    <GiftCard label="Gift 4" route="/gift4" />
    <GiftCard label="Gift 5" route="/gift5" />
    <GiftCard label="Gift 6" route="/gift6" />
  </div> */}

  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center">
  <GiftCard label="Gift 1" route="/gifts?gift=1" />
  <GiftCard label="Gift 2" route="/gifts?gift=2" />
  <GiftCard label="Gift 3" route="/gifts?gift=3" />
  <GiftCard label="Gift 4" route="/gifts?gift=4" />
  <GiftCard label="Gift 5" route="/gifts?gift=5" />
  <GiftCard label="Gift 6" route="/gifts?gift=6" />
</div>

</motion.div>

        )}
      </AnimatePresence>

      {/* RUNNING NO BUTTON */}
      {!isAccepted && (
        <motion.button
          onMouseEnter={moveNoButton}
          animate={{ left: noPos.x, top: noPos.y }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ position: "fixed", zIndex: 50 }}
          className="bg-white border px-6 py-2 rounded-full shadow-md text-sm"
        >
          {noPhrases[Math.min(noCount, noPhrases.length - 1)]}
        </motion.button>
      )}
      {/* Love Words */}
      <LoveWord
        text="You are my favorite feeling 💕"
        style={{ top: 20, left: 20 }}
      />
      <LoveWord
        text="Forever starts with you 💍"
        style={{ top: 20, right: 20 }}
      />
      <LoveWord
        text="Only you, always you 💘"
        style={{ bottom: 20, left: 20 }}
      />
      <LoveWord
        text="My heart chose you ❤️"
        style={{ bottom: 20, right: 20 }}
      />

      {/* Name */}
      <HeartName />
    </div>
  );
}
