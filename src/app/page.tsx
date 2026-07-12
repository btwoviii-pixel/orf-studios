"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Trusted from "@/components/sections/Trusted";
import Work from "@/components/sections/Work";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";


import ProjectModal from "@/components/ui/projectmodal";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar onOpenModal={() => setOpen(true)} />

      <ProjectModal
        open={open}
        onClose={() => setOpen(false)}
      />

      <main>
        <Hero />

        <div className="py-28">
          <Stats />
        </div>

        <div className="py-28">
          <Trusted />
        </div>

        <div className="py-28">
          <Work />
        </div>

        <div className="py-28">
          <About />
        </div>

        <div className="py-28">
          <Services />
        </div>

       
      </main>
    </>
  );
}