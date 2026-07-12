"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">

      <div className="container mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.45em] text-zinc-400"
            >
              About ORF Studios
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-6 text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-zinc-900 md:text-5xl lg:text-[54px]"
            >
              We don't just
              <br />
              create content.
              <br />
              We build
              <br />
              brands people
              remember.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 max-w-xl text-base leading-8 text-zinc-600"
            >
              ORF Studios is a creative agency focused on
              photography, filmmaking, branding, websites,
              digital marketing and content strategy.

              <br />
              <br />

              Every project is crafted with one purpose:
              helping businesses build a memorable identity
              that connects with people.
            </motion.p>

          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >

            <div className="relative h-[380px] w-[380px] overflow-hidden rounded-[28px] bg-[#f5f5f5] shadow-xl">

              <img
                src="/images/ovaish.png"
                alt="Founder of ORF Studios"
                className="absolute bottom-0 left-1/2 h-[92%] w-auto -translate-x-1/2 object-contain transition duration-700 hover:scale-105"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}