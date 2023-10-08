"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");
  const { activeSection, setActiveSection, setTimeOfLastClick } =
  useActiveSectionContext();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I'm a passionate and skilled web developer. Currently, I'm actively seeking part-time opportunities. I have strong background in programming, my portfolio is showcased in <Link
          href="#projects"
          className="underline font-medium"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
          }}
        ><b>project section </b>  </Link>  below.  While I can't share all of my projects due to company policy, I've gained valuable experience from working on a variety of projects, which have further honed my skills.


      </p>

      <p>My expertise extends beyond coding; I am deeply interested in design patterns, algorithms, and data structures, which enable me to create efficient and scalable solutions. I have a continuous learning mindset and welcome the chance to explore new programming languages and frameworks.</p>
      <p>If you have an exciting part-time web development opportunity or project in mind, I'd love to hear from you. Please feel free to contact me    <Link
          href="#contact"
          className="underline font-medium"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        ><b>here</b></Link>. Let's work together to bring your ideas to life.</p>
    </motion.section>
  );
}
