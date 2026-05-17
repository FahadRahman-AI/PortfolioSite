"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const socials = [
  { abbr: "IG", full: "INSTAGRAM", href: "https://instagram.com" },
  { abbr: "LK", full: "LINKEDIN", href: "https://linkedin.com" },
  { abbr: "TT", full: "TIKTOK", href: "https://tiktok.com" },
  { abbr: "YT", full: "YOUTUBE", href: "https://youtube.com" },
];

export default function Contact() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [briefHover, setBriefHover] = useState(false);

  return (
    <section id="contact" className="bg-[var(--black)]">
      <div className="flex min-h-svh flex-col justify-center px-6 py-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-[clamp(48px,10vw,140px)] leading-[0.9] text-[var(--white)]">
            LET&apos;S
            <br />
            MAKE
            <br />
            SOMETHING
            <br />
            REAL.
          </h2>
          <p className="mt-8 max-w-md font-mono-body text-[15px] text-[var(--text-dim)]">
            Open to small projects, collaborations, and honest conversations.
            Still building — happy to hear what you need.
          </p>

          <a
            href="mailto:hello@fahad.studio?subject=Project%20Brief"
            className="group relative mt-12 inline-block overflow-hidden"
            onMouseEnter={() => setBriefHover(true)}
            onMouseLeave={() => setBriefHover(false)}
          >
            <motion.span
              className="absolute inset-0 origin-left bg-[var(--accent-primary)]"
              initial={false}
              animate={{ scaleX: briefHover ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />
            <span
              className={`relative z-10 block font-display text-[clamp(32px,3vw,56px)] transition-colors duration-300 ${briefHover ? "text-[var(--black)]" : "text-[var(--white)]"}`}
            >
              SEND A BRIEF →
            </span>
          </a>
        </motion.div>
      </div>

      <footer className="border-t border-[var(--muted)] px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <span className="font-mono-body text-xs text-[var(--text-dim)]">
            FAHAD © 2025
          </span>
          <span className="font-mono-body text-xs text-[var(--text-dim)]">
            BIRMINGHAM · UK
          </span>
          <nav className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.abbr}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block overflow-hidden font-mono-body text-xs text-[var(--white)] transition-colors hover:text-[var(--accent-primary)]"
                onMouseEnter={() => setHoveredSocial(s.abbr)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <span
                  className="inline-block overflow-hidden whitespace-nowrap transition-all duration-300"
                  style={{
                    maxWidth: hoveredSocial === s.abbr ? 120 : 24,
                  }}
                >
                  {hoveredSocial === s.abbr ? s.full : s.abbr}
                </span>
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-center font-mono-body text-[11px] text-[var(--accent-secondary)]">
          OPEN TO PROJECTS · BIRMINGHAM & BEYOND
        </p>
      </footer>
    </section>
  );
}
