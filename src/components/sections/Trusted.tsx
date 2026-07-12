"use client";

import { motion } from "framer-motion";

const brands = [
  "Aaditya Thackeray",
  "Bhamla Foundation",
  "Rizvi College",
  "MFA Vice President",
  "RED FM",
];

export default function Trusted() {
  return (
    <section id="trusted">

      <div className="container mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs uppercase tracking-[0.45em] text-zinc-400"
        >
          Trusted by Brands & Organizations
        </motion.p>

        {/* Brands */}
        <div className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-8">

          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              whileHover={{
                y: -4,
                scale: 1.04,
              }}
              className="cursor-default"
            >
              <h3 className="text-xl font-medium text-zinc-500 transition-colors duration-300 hover:text-zinc-900">
                {brand}
              </h3>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}