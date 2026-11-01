"use client";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

// Fait défiler un chiffre de 0 à sa valeur (garde le suffixe : "12+", "500k")
export function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || !match) return;
    const c = animate(0, target, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, target, match]);

  if (!match) return <span>{value}</span>;
  return <span ref={ref}>{n}{match[2]}</span>;
}
