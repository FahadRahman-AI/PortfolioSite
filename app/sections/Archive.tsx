"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { archiveItems } from "@/lib/archive";

export default function Archive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section
      id="archive"
      ref={containerRef}
      className="relative overflow-hidden bg-[var(--black)] py-24"
    >
      <span className="label-caps absolute top-1/2 left-4 hidden origin-center -translate-y-1/2 -rotate-90 text-[var(--text-dim)] lg:block">
        VISUAL ARCHIVE
      </span>

      <motion.p
        className="label-caps mb-8 px-6 text-[var(--text-dim)] lg:hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        VISUAL ARCHIVE
      </motion.p>

      {/* Desktop: scroll-linked horizontal pan */}
      <div className="hidden h-[80vh] overflow-hidden lg:block">
        <motion.div
          className="flex h-full items-center gap-4 pl-24"
          style={{ x }}
        >
          {archiveItems.map((item) => (
            <figure
              key={item.id}
              className="relative shrink-0"
              style={{
                width: item.aspect === "tall" ? 320 : 560,
                aspectRatio: item.aspect === "tall" ? "9/16" : "16/9",
              }}
            >
              <Image
                src={item.src}
                alt={item.caption}
                width={item.width}
                height={item.height}
                className="h-full w-full object-cover"
              />
              <figcaption className="mt-2 font-mono-body text-[11px] text-[var(--text-dim)]">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>

      {/* Mobile: horizontal swipe */}
      <div className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory lg:hidden">
        {archiveItems.map((item) => (
          <figure
            key={item.id}
            className="w-[85vw] shrink-0 snap-start"
          >
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: item.aspect === "tall" ? "9/16" : "16/9",
              }}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover"
                sizes="85vw"
              />
            </div>
            <figcaption className="mt-2 font-mono-body text-[11px] text-[var(--text-dim)]">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
