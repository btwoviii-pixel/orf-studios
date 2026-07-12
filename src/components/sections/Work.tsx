"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Bhamla Foundation",
    category: "Environmental Campaign",
    video: "/videos/bhamla.mp4",
  },
  {
    title: "Rizvi College",
    category: "Event Photography & Films",
    video: "/videos/rizvi.mp4",
  },
  {
    title: "Wedding Films",
    category: "Cinematic Wedding Storytelling",
    video: "/videos/wedding.mp4",
  },
];

export default function Work() {
  return (
    <section id="work">

      <div className="container mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs uppercase tracking-[0.45em] text-zinc-400"
        >
          Selected Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-5 mb-16 text-center text-5xl font-bold text-zinc-900 md:text-6xl"
        >
          Featured Projects
        </motion.h2>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group w-[210px] overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
            >

              {/* Video */}
              <div className="relative aspect-[9/16] overflow-hidden bg-black">

                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/15 transition duration-300 group-hover:bg-black/0" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-lg">
                    ▶
                  </div>

                </div>

              </div>

              {/* Text */}
              <div className="p-5 text-center">

                <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-zinc-900 transition duration-300 group-hover:-translate-y-1">
                  {project.title}
                </h3>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}