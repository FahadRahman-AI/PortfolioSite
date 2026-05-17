"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "SHORT-FORM VIDEO",
    desc: "Simple, cinematic clips for social, web, and small brands — honest work while I build my skills.",
  },
  {
    num: "02",
    title: "LOCAL PROMOS",
    desc: "Straightforward shoots for events, shops, and creators in Birmingham who need a clean first video.",
  },
  {
    num: "03",
    title: "UGC STYLE",
    desc: "Authentic, platform-native content — learning to make it feel real, not overproduced.",
  },
  {
    num: "04",
    title: "COLLABORATIONS",
    desc: "Passion projects, student work, and creative experiments — open to growing alongside you.",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="min-h-svh bg-[var(--black)] px-6 py-24 md:px-12"
    >
      <motion.h2
        className="font-display mb-16 text-[clamp(48px,10vw,140px)] leading-[0.9] text-[var(--white)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        WHAT I
        <br />
        BUILD.
      </motion.h2>

      <div className="border-t border-[var(--muted)]">
        {services.map((service, i) => (
          <motion.div
            key={service.num}
            className="relative border-b border-[var(--muted)]"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <div
              className={`flex flex-col gap-4 px-2 py-7 transition-colors md:flex-row md:items-center md:justify-between ${hovered === i ? "bg-[var(--surface-raised)]" : ""}`}
            >
              <span className="font-mono-body text-[13px] text-[var(--accent-primary)]">
                {service.num}
              </span>
              <h3 className="font-display flex-1 text-[clamp(28px,3vw,48px)] text-[var(--white)]">
                {service.title}
              </h3>
              <p className="max-w-[380px] font-mono-body text-[15px] leading-relaxed text-[var(--text-dim)]">
                {service.desc}
              </p>
              <motion.span
                className="font-mono-body text-2xl text-[var(--white)]"
                animate={{ x: hovered === i ? 8 : 0 }}
                transition={{ duration: 0.3 }}
              >
                →
              </motion.span>
            </div>
            <div
              className="absolute right-0 bottom-0 left-0 h-px origin-left bg-[var(--accent-primary)] transition-transform duration-300"
              style={{
                transform: hovered === i ? "scaleX(1)" : "scaleX(0)",
              }}
            />
          </motion.div>
        ))}
      </div>

      <p className="label-caps mt-16 text-center text-[var(--text-dim)]">
        EQUIPMENT: Entry-level mirrorless · kit lens · tripod · natural light ·
        learning colour grade in post
      </p>
    </section>
  );
}
