"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  end: number;
  suffix?: string;
  label: string;
};

function Counter({ end, suffix = "+", label }: CounterProps) {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1800;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      current += step;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [start, end]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      className="group"
    >
      <div className="w-[250px] rounded-[32px] border border-zinc-200 bg-white px-8 py-8 shadow-sm transition-all duration-500 hover:border-zinc-300 hover:shadow-2xl">

        <h2 className="text-center text-5xl font-bold tracking-tight text-zinc-900">
          {count}
          {suffix}
        </h2>

        <div className="mx-auto mt-5 h-[2px] w-14 rounded-full bg-gradient-to-r from-zinc-300 to-zinc-900 transition-all duration-500 group-hover:w-24" />

        <p className="mt-5 text-center text-sm uppercase tracking-[0.35em] text-zinc-500">
          {label}
        </p>

      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="stats">

      <div className="container mx-auto max-w-7xl px-6">

        <div className="flex flex-wrap justify-center gap-10">

          <Counter end={4000} label="Projects" />
          <Counter end={650} label="Clients" />
          <Counter end={6} label="Years Experience" />

        </div>

      </div>

    </section>
  );
}