"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FinalPage() {
  const [answers, setAnswers] = useState<unknown>(null);

  useEffect(() => {
    const data = localStorage.getItem("finalAnswers");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (data) setAnswers(JSON.parse(data));
  }, []);

  return (
    <div className="min-h-screen bg-[#fffafc] p-6 flex flex-col items-center">
      {/* 📝 Answers */}
      {answers && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full mb-10"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            Your Answers 💌
          </h2>

          <p>❤️ Did you like me? — <b>{answers.q1}</b></p>
          <p>🤍 Were you honest? — <b>{answers.q2}</b></p>
          <p>💍 Lifetime trust? — <b>{answers.q3}</b></p>
        </motion.div>
      )}

      {/* 🖼️ Letter Style Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-xl w-full bg-[#fff0f5] p-6 rounded-xl shadow-xl font-serif"
      >
        <h3 className="text-xl font-bold mb-4 text-center">
          From My Heart 💭
        </h3>

        {/* 🌸 Tamil Love + Breakup Kavithai */}
       {/* 💞 Final Confession */}
<p className="leading-loose text-gray-800 text-lg mt-6 text-center">
  இது பிடிப்பு இல்லை…  
  இது தேவை இல்லை…  
  <br />
  இது என் வாழ்க்கை பழக்கமா மாறின காதல்.  
  <br /><br />
  நீ என் கூட இருந்தாலும்,  
  இல்லாத போதும்,  
  <br />
  என் மனசு உன்னைத் தான் தேர்ந்தெடுக்கும்.  
  <br /><br />
  உலகம் எதை எடுத்தாலும் பரவாயில்லை…  
  <br />
  என் கடைசி மூச்சு வரை  
  <br />
  “நீ” தான் என் வாழ்க்கை. 🤍
</p>

      </motion.div>
    </div>
  );
}
