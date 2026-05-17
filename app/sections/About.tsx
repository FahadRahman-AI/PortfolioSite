"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_IMAGE_SRC } from "@/lib/media";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-svh bg-[var(--black)]"
    >
      <div className="grid min-h-svh grid-cols-1 lg:grid-cols-2">
        <motion.div
          className="relative min-h-[50vh] lg:min-h-svh"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <Image
            src={ABOUT_IMAGE_SRC}
            alt="Fahad — emerging videographer"
            fill
            className="object-cover object-center"
            style={{ filter: "contrast(1.1) saturate(0.85)" }}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="grain-overlay pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay" aria-hidden />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center px-6 py-20 lg:px-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <span className="label-caps text-[var(--accent-primary)]">
            ABOUT ME
          </span>
          <h2 className="font-display mt-6 text-[clamp(36px,5vw,72px)] leading-[0.95] text-[var(--white)]">
            FAHAD IS A
            <br />
            BIRMINGHAM-BRED
            <br />
            VIDEOGRAPHER.
          </h2>
          <p className="font-editorial mt-8 max-w-[480px] text-lg leading-[1.75] text-[var(--white)]">
            He doesn&apos;t just shoot — he builds. Fahad is a creative
            entrepreneur whose work sits at the intersection of visual
            storytelling, brand strategy, and business development.
          </p>
          <p className="font-editorial mt-6 max-w-[480px] text-lg leading-[1.75] text-[var(--white)]">
            The camera came first. The business mind followed quickly. Now the
            two are inseparable — every project is approached not just as a
            creative brief, but as a commercial problem worth solving properly.
          </p>
          <p className="font-editorial mt-6 max-w-[480px] text-lg leading-[1.75] text-[var(--text-dim)]">
            Currently directing cinematic work for brands and artists while
            building his own ventures from the ground up. Based in Birmingham.
            Operating everywhere.
          </p>

          <motion.div className="my-10 h-px w-full bg-[var(--muted)]" />

          <div className="grid grid-cols-2 gap-8">
            {[
              { value: "04+", label: "YEARS IN THE CREATIVE INDUSTRY" },
              { value: "3", label: "VENTURES IN DEVELOPMENT" },
              { value: "60+", label: "PROJECTS DELIVERED" },
              { value: "∞", label: "PROBLEMS WORTH SOLVING" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-4xl text-[var(--white)]">
                  {stat.value}
                </span>
                <p className="label-caps mt-1 text-[var(--text-dim)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#work"
              className="border border-[var(--muted)] px-6 py-3 font-mono-body text-xs tracking-widest uppercase transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
            >
              SEE MY WORK →
            </a>
            <a
              href="mailto:hello@fahad.studio?subject=Collaboration"
              className="border border-[var(--muted)] px-6 py-3 font-mono-body text-xs tracking-widest uppercase transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)]"
            >
              GET IN TOUCH →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
