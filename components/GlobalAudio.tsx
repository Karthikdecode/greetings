"use client";

import { useEffect, useRef, useState } from "react";

export default function GlobalAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !audioRef.current) return;

    const playAudio = () => {
      audioRef.current?.play().catch(() => {});
      document.removeEventListener("click", playAudio);
    };

    document.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <audio
      ref={audioRef}
      src="/kanamani-anbodu.mp3"
      loop
      playsInline
    />
  );
}
