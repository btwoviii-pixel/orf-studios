"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Camera,
  Clapperboard,
  Sparkles,
  Megaphone,
  Calendar,
  Shirt,
} from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Product Photography",
    image: "/images/services/product.jpg",
    slug: "product-photography",
  },
  {
    icon: Clapperboard,
    title: "Wedding Teasers",
    image: "/images/services/wedding.jpg",
    slug: "wedding-teasers",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    image: "/images/services/motion.jpg",
    slug: "motion-graphics",
  },
  {
    icon: Megaphone,
    title: "Social Media",
    image: "/images/services/social.jpg",
    slug: "social-media",
  },
  {
    icon: Calendar,
    title: "Event Coverage",
    image: "/images/services/event.jpg",
    slug: "event-coverage",
  },
  {
    icon: Shirt,
    title: "Fashion & Influencers",
    image: "/images/services/fashion.jpg",
    slug: "fashion-influencers",
  },
];

export default function Services() {
  return (
    <section id="services">

      <div className="container mx-auto max-w-7xl px-6">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-[0.45em] text-zinc-400"
        >
          Our Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-5xl font-bold text-zinc-900 md:text-6xl"
        >
          Creative Solutions
        </motion.h2>

        <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <Link
                key={service.title}
                href={`/services/${service.slug}`}
                className="block"
              >

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  className="group relative aspect-square overflow-hidden rounded-[30px] border border-zinc-200 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
                >

                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                  />

                  <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-100 transition-all duration-500 group-hover:scale-0 group-hover:opacity-0">

                      <Icon
                        size={34}
                        className="text-zinc-800"
                      />

                    </div>

                    <h3 className="mt-8 text-2xl font-semibold text-zinc-900 transition-all duration-500 group-hover:-translate-y-4 group-hover:text-white">
                      {service.title}
                    </h3>

                    <button className="mt-6 translate-y-8 opacity-0 text-sm font-medium text-white transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      Learn More →
                    </button>

                  </div>

                </motion.div>

              </Link>

            );

          })}

        </div>

      </div>

    </section>
  );
}