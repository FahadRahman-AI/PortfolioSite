"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Nav from "@/app/components/Nav";
import { usePreloader } from "@/app/context/PreloaderContext";
import { HERO_VIDEO_SRC } from "@/lib/media";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const { isComplete } = usePreloader();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => setVideoFailed(true));
  }, [isComplete]);

  const animDelay = isComplete ? 0 : 3;

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-svh w-full overflow-hidden"
    >
      <motion.div className="absolute inset-0 scale-105" style={{ y: videoY }}>
        {!videoFailed ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            src={HERO_VIDEO_SRC}
            onError={() => setVideoFailed(true)}
          />
        ) : (
          <div className="hero-fallback-bg h-full w-full" />
        )}
      </motion.div>

      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(3,3,3,0.35) 0%, rgba(3,3,3,0.88) 100%)",
        }}
      />

      <header
        className={`fixed top-0 right-0 left-0 z-[7000] px-6 pt-6 transition-all duration-500 ${scrolled ? "bg-[rgba(3,3,3,0.6)] backdrop-blur-md" : ""}`}
      >
        <motion.div
          className="flex items-center justify-between pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isComplete ? 1 : 0 }}
          transition={{ delay: animDelay, duration: 0.6 }}
        >
          <span className="label-caps text-[13px] text-[var(--white)]">
            FAHAD
          </span>
          <Nav
            isOpen={navOpen}
            onClose={() => setNavOpen(false)}
            onToggle={() => setNavOpen((o) => !o)}
          />
        </motion.div>
        <motion.div className="h-px w-full bg-[var(--muted)]" aria-hidden />
      </header>

      <motion.div
        className="absolute bottom-[15%] left-[6%] z-10 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate={isComplete ? "show" : "hidden"}
        transition={{ delayChildren: animDelay }}
      >
        <motion.p
          variants={lineVariants}
          className="label-caps mb-4 text-[var(--accent-primary)]"
        >
          FOUNDER · CREATIVE DIRECTOR · BUILDER
        </motion.p>
        {["FAHAD", "CAPTURES"].map((word) => (
          <motion.h1
            key={word}
            variants={lineVariants}
            className="display-hero text-[var(--white)]"
          >
            {word}
          </motion.h1>
        ))}
        <motion.h1
          variants={lineVariants}
          className="display-hero text-[var(--accent-primary)]"
        >
          WORLDS.
        </motion.h1>
        <motion.p
          variants={lineVariants}
          className="mt-6 max-w-[400px] font-mono-body text-[15px] leading-relaxed text-[var(--text-dim)]"
        >
          Building brands, businesses, and visual worlds from Birmingham.
          The camera is one tool. The company is the goal.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-[3%] left-0 z-10 flex w-full flex-col items-center justify-between gap-4 px-6 md:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: isComplete ? 1 : 0 }}
        transition={{ delay: animDelay + 0.5, duration: 0.8 }}
      >
        <span className="label-caps text-[var(--text-dim)]">
          EST. 2024 · BIRMINGHAM, UK
        </span>
        <span className="label-caps hidden text-[var(--text-dim)] md:block">
          LEARNING · SHOOTING · EDITING
        </span>
        <a
          href="#work"
          className="label-caps flex items-center gap-2 text-[var(--text-dim)] hover:text-[var(--accent-primary)]"
        >
          <span className="scroll-bounce inline-block">↓</span> SCROLL TO ENTER
        </a>
      </motion.div>

      <aside className="absolute top-1/3 left-6 z-10 hidden flex-col gap-3 lg:flex">
        {["LEARNING THE CRAFT", "EVERY FRAME COUNTS", "BUILDING MY VOICE"].map(
          (pillar) => (
            <span
              key={pillar}
              className="label-caps text-[var(--text-dim)] [writing-mode:vertical-lr]"
            >
              {pillar}
            </span>
          ),
        )}
      </aside>
    </section>
  );
}
