"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function GiftsPage() {
  const [activeGift, setActiveGift] = useState<number | null>(null);
  const [showFlowers, setShowFlowers] = useState(false);

  const triggerFlowers = () => {
    setShowFlowers(true);
    confetti({
      particleCount: 150,
      spread: 100,
      colors: ["#ff4d6d", "#ffb3c6", "#fff"],
    });
  };

  return (
    <div className="min-h-screen romantic-gradient flex items-center justify-center p-6">
      <AnimatePresence mode="wait">
        {activeGift === null && (
          <motion.div
            key="grid"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {[1, 2, 3, 4, 5, 6].map((g) => (
              <motion.div
                key={g}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveGift(g)}
                className="w-32 h-32 cursor-pointer flex items-center justify-center text-white font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, #ff4d6d, #ff85a1)",
                  clipPath:
                    "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                }}
              >
                ❤️🎁 Gift {g}
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* 🎁 GIFT 1 */}
        {activeGift === 1 && (
          <motion.div
            key="gift1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl"
          >
            <h1 className="text-3xl font-bold text-primary mb-4">
              A Flower For You 🌹
            </h1>

            <img
              src="/assets/flower.jpg"
              alt="flower"
              onClick={triggerFlowers}
              className="mx-auto rounded-xl shadow-lg cursor-pointer mb-6"
            />

            <p className="text-lg text-gray-700 leading-relaxed">
              You walked into my life like spring 🌸 <br />
              Turning ordinary days into poetry ✨ <br />
              Every smile of yours blooms my heart 💖 <br />
              This flower is just a tiny piece of my love 🌹
            </p>

            <button
              className="mt-6 text-primary underline"
              onClick={() => setActiveGift(null)}
            >
              ← Back to gifts
            </button>
          </motion.div>
        )}

        {/* 💌 GIFT 2 */}
        {activeGift === 2 && (
          <motion.div
            key="gift2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#fff7f9] p-8 rounded-xl shadow-xl max-w-xl"
          >
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">
              A Letter From My Heart 💌
            </h2>

            <p className="text-gray-800 leading-loose font-serif text-lg">
              My love,  
              <br /><br />
              I want to grow old with you, slowly… ❤️  
              Holding hands even when time softens our steps 👵👴  
              Loving you in silence, in chaos, in calm 🌙  
              Kissing your forehead like it’s my safe place 💋  
              Choosing you every day, even when words fail 💞  
              Forever isn’t enough when it’s you 😌  
            </p>

            <div className="text-center mt-6">
              <button
                className="text-primary underline"
                onClick={() => setActiveGift(null)}
              >
                ← Back to gifts
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
