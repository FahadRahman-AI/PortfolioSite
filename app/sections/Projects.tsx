"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/app/components/ProjectCard";
import {
  projects,
  FILTER_CATEGORIES,
  type ProjectCategory,
} from "@/lib/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");
  const [wideAspect, setWideAspect] = useState(true);

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  const aspectFor = (preferred?: "9/16" | "16/9") =>
    wideAspect ? "16/9" : (preferred ?? "9/16");

  return (
    <section
      id="work"
      className="min-h-svh bg-[var(--black)] px-6 py-24 md:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <span className="label-caps text-[var(--accent-primary)]">
          {"{Work}"}
        </span>
        <h2 className="font-display mt-4 text-[clamp(48px,14vw,180px)] leading-[0.9] text-[var(--white)]">
          SELECTED
          <br />
          VISUALS
        </h2>
        <p className="mt-6 max-w-[500px] font-mono-body text-[15px] leading-relaxed text-[var(--text-dim)]">
          A small selection so far — personal shoots, practice runs, and my
          first real projects. More coming as I grow.
        </p>
      </motion.div>

      <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-[var(--muted)] pb-6">
        <div className="flex flex-wrap items-center gap-1">
          {FILTER_CATEGORIES.map((cat, idx) => (
            <span key={cat} className="flex items-center gap-1">
              {idx > 0 && (
                <span className="text-[var(--muted)]" aria-hidden>
                  ·
                </span>
              )}
              <button
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`font-mono-body text-xs tracking-widest uppercase transition-colors ${
                  activeFilter === cat
                    ? "border-b border-[var(--accent-primary)] text-[var(--accent-primary)]"
                    : "text-[var(--text-dim)] hover:text-[var(--white)]"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            </span>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setWideAspect((w) => !w)}
          className="ml-auto font-mono-body text-xs tracking-widest text-[var(--text-dim)] uppercase hover:text-[var(--accent-primary)]"
        >
          {wideAspect ? "9:16" : "16:9"} VIEW
        </button>
      </div>

      <motion.div layout className="grid grid-cols-1 gap-0.5 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            aspectRatio={aspectFor(project.preferredAspect)}
          />
        ))}
      </motion.div>
    </section>
  );
}
