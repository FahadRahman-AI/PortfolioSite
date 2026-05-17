"use client";

import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "ARCHIVE", href: "#archive" },
  { label: "CONTACT", href: "#contact" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

type NavProps = {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
  menuLayoutId?: string;
};

export default function Nav({
  isOpen,
  onClose,
  onToggle,
  menuLayoutId = "menu-toggle",
}: NavProps) {
  const handleNav = (href: string) => {
    onClose();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.button
        type="button"
        layoutId={menuLayoutId}
        onClick={onToggle}
        className="label-caps text-[var(--white)] hover:text-[var(--accent-primary)] transition-colors"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? "CLOSE" : "MENU"}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[8000] flex flex-col items-center justify-center bg-[rgba(3,3,3,0.97)]"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.06]" />

            <motion.nav
              variants={container}
              initial="hidden"
              animate="show"
              className="relative z-10 flex flex-col items-center gap-2"
            >
              {links.map((link) => (
                <motion.button
                  key={link.href}
                  type="button"
                  variants={item}
                  onClick={() => handleNav(link.href)}
                  className="group font-display text-[clamp(48px,8vw,120px)] leading-none text-[var(--white)] transition-colors hover:text-[var(--accent-primary)]"
                  whileHover={{ x: 12 }}
                >
                  <span className="inline-flex items-center gap-4">
                    {link.label}
                    <span className="font-mono-body text-sm opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
                  </span>
                </motion.button>
              ))}
            </motion.nav>

            <p className="label-caps relative z-10 mt-16 text-[var(--text-dim)]">
              BIRMINGHAM, UK · OPEN TO COLLABORATIONS · EST. 2024
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
