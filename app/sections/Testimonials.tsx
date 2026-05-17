"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "He's still early, but you can tell he actually cares how it looks. Our promo felt way better than what we had before.",
    attribution: "Local café owner · First Cut project",
  },
  {
    quote:
      "Shot our event on a tight budget and stayed late to get the edit right. Honest, keen, and easy to work with.",
    attribution: "Community organiser · Collaboration",
  },
  {
    quote:
      "Doesn't oversell what he can do yet — but the stuff he's learning comes through. I'd work with him again.",
    attribution: "Friend & early collaborator · Practice shoot",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[var(--surface)] px-6 py-24 md:px-12">
      <motion.h2
        className="label-caps mb-16 text-[var(--text-dim)]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        EARLY FEEDBACK
      </motion.h2>

      {testimonials.map((t, i) => (
        <motion.blockquote
          key={t.attribution}
          className="relative border-t border-[var(--muted)] py-16 first:border-t-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <span
            className="font-display pointer-events-none absolute -top-4 left-0 text-[180px] leading-none text-[var(--muted)] select-none"
            aria-hidden
          >
            &ldquo;
          </span>
          <p className="relative z-10 max-w-[700px] font-editorial text-[22px] leading-[1.6] italic text-[var(--white)]">
            {t.quote}
          </p>
          <footer className="relative z-10 mt-6 font-mono-body text-[13px] text-[var(--text-dim)]">
            {t.attribution}
          </footer>
        </motion.blockquote>
      ))}
    </section>
  );
}
