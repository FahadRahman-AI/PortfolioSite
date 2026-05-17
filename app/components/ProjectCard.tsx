"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  aspectRatio: "9/16" | "16/9";
};

export default function ProjectCard({
  project,
  aspectRatio,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const showVideo = project.videoOnly || hovered || active;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !project.video) return;
    video.load();
  }, [project.video]);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => {});
  };

  const pause = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    if (!project.videoOnly) video.currentTime = 0;
  };

  const handleEnter = () => {
    setHovered(true);
    play();
  };

  const handleLeave = () => {
    setHovered(false);
    if (!active) pause();
  };

  const handleTap = () => {
    if (window.matchMedia("(pointer: fine)").matches) return;
    setActive((prev) => {
      const next = !prev;
      if (next) play();
      else pause();
      return next;
    });
  };

  return (
    <motion.article
      layout
      className="project-card group relative cursor-pointer overflow-hidden bg-[var(--surface)]"
      style={{ aspectRatio }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleTap}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="pointer-events-none absolute top-0 right-0 left-0 z-20 h-px origin-left transition-transform duration-300"
        style={{
          backgroundColor: project.accentColor,
          transform: hovered || active ? "scaleX(1)" : "scaleX(0)",
        }}
      />

      {project.thumbnail && !project.videoOnly && (
        <Image
          src={project.thumbnail}
          alt={`${project.title} — ${project.client}`}
          fill
          className={`object-cover transition-opacity duration-500 ${showVideo ? "opacity-0" : "opacity-100"}`}
          style={{ objectPosition: project.objectPosition ?? "center" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      )}

      {project.video && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            project.videoOnly || showVideo ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition: project.objectPosition ?? "center" }}
          src={project.video}
          muted
          playsInline
          loop
          preload="metadata"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(3,3,3,0.95)]" />

      <div className="absolute right-4 bottom-4 left-4 z-10 flex items-end justify-between gap-4">
        <motion.div>
          <h3 className="font-display text-[clamp(28px,4vw,40px)] leading-none text-[var(--white)]">
            {project.title}
          </h3>
          <p className="mt-1 font-mono-body text-[13px] text-[var(--text-dim)]">
            {project.client}
          </p>
        </motion.div>
        <p className="label-caps shrink-0 text-right text-[var(--text-dim)]">
          {project.category}
          <br />
          {project.year}
        </p>
      </div>
    </motion.article>
  );
}
