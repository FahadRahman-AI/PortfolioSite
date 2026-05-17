"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloader } from "@/app/context/PreloaderContext";

export default function Preloader() {
  const { complete } = usePreloader();
  const [phase, setPhase] = useState<"idle" | "play" | "exit" | "done">("idle");

  useEffect(() => {
    if (sessionStorage.getItem("preloader-shown")) {
      setPhase("done");
      complete();
      return;
    }
    setPhase("play");
    const liftTimer = setTimeout(() => {
      setPhase("exit");
      complete();
    }, 2500);
    const doneTimer = setTimeout(() => {
      sessionStorage.setItem("preloader-shown", "1");
      setPhase("done");
    }, 3100);
    return () => {
      clearTimeout(liftTimer);
      clearTimeout(doneTimer);
    };
  }, [complete]);

  if (phase === "done" || phase === "idle") return null;

  return (
    <AnimatePresence>
      {(phase === "play" || phase === "exit") && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--black)]"
          initial={{ y: 0 }}
          animate={phase === "exit" ? { y: "-100vh" } : { y: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            className="font-display text-[clamp(120px,20vw,240px)] leading-none text-[var(--white)]"
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            F
          </motion.span>
          <motion.div
            className="absolute top-1/2 h-px bg-[var(--white)]"
            initial={{ width: 0 }}
            animate={{ width: "100vw" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ transform: "translateY(-50%)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
