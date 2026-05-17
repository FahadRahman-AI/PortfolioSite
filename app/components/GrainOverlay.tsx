export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="grain-overlay pointer-events-none fixed inset-0 z-[9998] select-none"
      style={{ opacity: 0.035, mixBlendMode: "overlay" }}
    />
  );
}
