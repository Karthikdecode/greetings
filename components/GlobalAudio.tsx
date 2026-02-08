"use client";

import { useEffect, useRef } from "react";

export default function GlobalAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Browser autoplay restriction workaround
    const playAudio = () => {
      audio.play().catch(() => {});
      document.removeEventListener("click", playAudio);
    };

    document.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/Kanamani Anbudu.mp3"
      loop
      preload="auto"
    />
  );
}
