"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -right-32 top-28 h-[520px] w-[520px] rounded-full bg-[#B8C9C2]/30 blur-[120px]" />

      <div className="absolute bottom-0 left-20 h-[250px] w-[250px] rounded-full bg-[#D8E5F2]/40 blur-[100px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="tag"
        >
          ✦ Creative Agency
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="title max-w-5xl"
        >
          Originality
          <br />
          Redefined.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="subtitle mt-8"
        >
          Photography, Films, Branding, Motion Graphics,
          Digital Marketing and Websites that make brands
          unforgettable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10"
        >
          <button className="btn-primary">
            View Portfolio →
          </button>
        </motion.div>

      </div>
    </section>
  );
}