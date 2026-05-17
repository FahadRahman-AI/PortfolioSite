"use client";

import { motion } from "framer-motion";

export default function Showreel() {
  return (
    <section
      id="showreel"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[var(--black)] px-6 py-24"
    >
      <motion.div
        className="pointer-events-none absolute -top-20 -right-20 h-[60vw] w-[60vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,209,0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <h2 className="font-display text-[clamp(64px,18vw,200px)] leading-[0.9] text-[var(--white)]">
          SELECTED
          <br />
          WORK
        </h2>
        <p className="font-editorial mt-6 text-lg italic text-[var(--text-dim)]">
          &ldquo;A small reel — early work, real progress.&rdquo;
        </p>

        <div className="my-12 h-px w-full max-w-4xl bg-[var(--muted)]" />

        <a
          href="#work"
          className="border border-[var(--white)] px-10 py-4 font-mono-body text-sm tracking-widest text-[var(--white)] uppercase transition-colors hover:border-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-[var(--black)]"
        >
          VIEW PROJECTS →
        </a>

        <p className="mt-6 font-mono-body text-xs text-[var(--text-dim)]">
          [ REEL PLAYS ABOVE · SCROLL TO EXPLORE ]
        </p>
      </motion.div>
    </section>
  );
}
