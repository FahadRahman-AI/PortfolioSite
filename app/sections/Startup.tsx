"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function Startup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[var(--black)] px-6 py-24 text-center">
      <motion.div
        className="pointer-events-none absolute h-[80vw] w-[80vw] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,209,0.06) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 flex max-w-xl flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <span className="label-caps text-[var(--accent-primary)]">
          COMING SOON
        </span>
        <h2 className="font-display mt-6 text-[clamp(48px,10vw,120px)] leading-[0.9] text-[var(--white)]">
          SOMETHING
          <br />
          IS
          <br />
          BEING BUILT.
        </h2>
        <p className="font-editorial mt-8 text-xl italic text-[var(--text-dim)]">
          One day, more than a portfolio.
          <br />
          For now — learning, shooting, building.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex w-full max-w-md items-center border border-[var(--muted)]"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="GET EARLY ACCESS"
            required
            className="flex-1 bg-transparent px-4 py-4 font-mono-body text-sm text-[var(--white)] outline-none placeholder:text-[var(--text-dim)]"
          />
          <button
            type="submit"
            className="px-6 py-4 font-mono-body text-[var(--accent-primary)] transition-opacity hover:opacity-70"
            aria-label="Submit email"
          >
            →
          </button>
        </form>
        {submitted && (
          <p className="mt-4 font-mono-body text-xs text-[var(--accent-primary)]">
            You&apos;re on the list.
          </p>
        )}
      </motion.div>
    </section>
  );
}
