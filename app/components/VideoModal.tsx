"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  src?: string;
};

export default function VideoModal({
  isOpen,
  onClose,
  src = "/work/reel.mp4",
}: VideoModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9000] flex items-center justify-center bg-black/95 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.button
            type="button"
            className="label-caps absolute top-6 right-6 text-[var(--white)] hover:text-[var(--accent-primary)]"
            onClick={onClose}
            aria-label="Close video"
          >
            CLOSE
          </motion.button>
          <motion.div
            className="relative aspect-video w-full max-w-5xl overflow-hidden bg-[var(--surface)]"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="h-full w-full object-cover"
              src={src}
              autoPlay
              muted
              playsInline
              controls
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
