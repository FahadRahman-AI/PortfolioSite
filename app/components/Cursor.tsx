"use client";

import { useEffect, useRef, useState } from "react";

type HoverState = "default" | "link" | "project" | "play";

export default function Cursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);
  const hoverState = useRef<HoverState>("default");

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(fine.matches);
    update();
    fine.addEventListener("change", update);
    return () => fine.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const applyStyles = () => {
      const outer = outerRef.current;
      const inner = innerRef.current;
      const label = labelRef.current;
      if (!outer || !inner) return;

      const state = hoverState.current;
      outer.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;

      if (state === "link") {
        outer.style.width = "40px";
        outer.style.height = "40px";
        outer.style.transform += " scale(2)";
        outer.style.background = "rgba(200, 255, 0, 0.1)";
        if (label) label.textContent = "";
      } else if (state === "project" || state === "play") {
        outer.style.width = "80px";
        outer.style.height = "80px";
        outer.style.background = "transparent";
        if (label) label.textContent = state === "play" ? "PLAY" : "VIEW →";
      } else {
        outer.style.width = "40px";
        outer.style.height = "40px";
        outer.style.background = "transparent";
        if (label) label.textContent = "";
      }

      inner.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0) translate(-50%, -50%)`;
    };

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest(".play-reel")) hoverState.current = "play";
      else if (el.closest(".project-card") || el.closest("video"))
        hoverState.current = "project";
      else if (el.closest("a, button")) hoverState.current = "link";
      else hoverState.current = "default";
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;
      applyStyles();
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={outerRef}
        className="pointer-events-none fixed top-0 left-0 z-[10000] flex items-center justify-center rounded-full border border-[var(--accent-primary)]"
        style={{ width: 40, height: 40, willChange: "transform" }}
      >
        <span
          ref={labelRef}
          className="font-mono-body text-[10px] tracking-wider text-[var(--accent-primary)]"
        />
      </div>
      <div
        ref={innerRef}
        className="pointer-events-none fixed top-0 left-0 z-[10001] h-1.5 w-1.5 rounded-full bg-[var(--accent-primary)]"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
