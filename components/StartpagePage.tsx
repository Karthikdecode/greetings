// "use client";

// import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";

// export default function StartPage() {
//   const router = useRouter();

//   return (
//     <div className="relative flex h-screen items-center justify-center overflow-hidden romantic-gradient">
      
//       {/* Floating hearts */}
//       <motion.span
//         className="material-symbols-outlined text-pink-300 absolute text-5xl"
//         animate={{ y: [-20, -120], opacity: [0, 1, 0] }}
//         transition={{ duration: 4, repeat: Infinity }}
//         style={{ left: "20%", bottom: "10%" }}
//       >
//         favorite
//       </motion.span>

//       <motion.span
//         className="material-symbols-outlined text-pink-400 absolute text-6xl"
//         animate={{ y: [-30, -150], opacity: [0, 1, 0] }}
//         transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//         style={{ right: "20%", bottom: "15%" }}
//       >
//         favorite
//       </motion.span>

//       {/* Mail Card */}
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-sm z-10"
//       >
//         {/* Mail Icon */}
//         <motion.div
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="mb-4"
//         >
//           <span className="material-symbols-outlined text-7xl text-primary">
//             mail
//           </span>
//         </motion.div>

//         {/* Text */}
//         <h1 className="text-2xl font-bold text-[#181112] mb-2">
//           You’ve got a love mail 💌
//         </h1>
//         <p className="text-[#896168] text-sm mb-6">
//           Someone has sent you something very special…
//         </p>

//         {/* Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => router.push("/valentine")}
//           className="bg-primary text-white px-8 py-3 rounded-full text-lg font-bold shadow-md"
//         >
//           Open Mail 💖
//         </motion.button>
//       </motion.div>

//       {/* Footer text */}
//       <p className="absolute bottom-6 text-xs tracking-widest text-primary/60">
//         made with love 💗
//       </p>
//     </div>
//   );
// }

"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function StartPage() {
  const router = useRouter();
  
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

  // Hearts and Names generate panna array
  const elements = Array.from({ length: 15 }); // 15 items generate pannum

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
        {elements.map((_, i) => (
          <div key={i}>
            {/* Floating Hearts */}
            <motion.span
              className="material-symbols-outlined absolute text-pink-400/40 select-none"
              initial={{ 
                // eslint-disable-next-line react-hooks/purity
                x: Math.random() * 100 + "vw", 
                y: "110vh", 
                // eslint-disable-next-line react-hooks/purity
                scale: Math.random() * 1.5 + 1 // Big size hearts
              }}
              animate={{ 
                y: "-10vh",
                rotate: [0, 20, -20, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{ 
                // eslint-disable-next-line react-hooks/purity
                duration: Math.random() * 5 + 5, 
                repeat: Infinity, 
                // eslint-disable-next-line react-hooks/purity
                delay: Math.random() * 5 
              }}
              // eslint-disable-next-line react-hooks/purity
              style={{ fontSize: `${Math.random() * 4 + 2}rem` }}
            >
              favorite
            </motion.span>

            {/* Floating Name: Prethika */}
            <motion.span
              className="absolute font-serif font-bold text-red-400/30 select-none whitespace-nowrap"
              initial={{ 
                // eslint-disable-next-line react-hooks/purity
                x: Math.random() * 100 + "vw", 
                y: "110vh",
                // eslint-disable-next-line react-hooks/purity
                scale: Math.random() * 0.5 + 1
              }}
              animate={{ 
                y: "-10vh", 
                x: ["-2%", "2%", "-2%"], // Slights swaying movement
                opacity: [0, 0.5, 0] 
              }}
              transition={{ 
                // eslint-disable-next-line react-hooks/purity
                duration: Math.random() * 7 + 6, 
                repeat: Infinity, 
                // eslint-disable-next-line react-hooks/purity
                delay: Math.random() * 3 
              }}
              // eslint-disable-next-line react-hooks/purity
              style={{ fontSize: `${Math.random() * 1.5 + 1.5}rem` }}
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
    </div>
  );
}