"use client";

import { useState, useEffect } from "react";

const words = [
  "Programador WEB...",
  "Designer UX/UI...",
  "Inovador Digital...",
  "Apaixonado por Código...",
];

export default function EscritaAltomatica() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);
  const speed = isDeleting ? 100 : 200;

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, text.length + 1));
        }, speed);
        setIsBlinking(true);
      } else {
        setTimeout(() => setIsDeleting(true), 1000);
        setIsBlinking(false);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.substring(0, text.length - 1));
        }, speed);
        setIsBlinking(true);
      } else {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsBlinking(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="animate-typing rounded-2xl bg-principal px-2 text-lg font-bold capitalize text-white sm:text-2xl md:text-3xl lg:text-4xl">
      {text}
      <span className={isBlinking ? "animate-blink" : ""}>|</span>
    </span>
  );
}
