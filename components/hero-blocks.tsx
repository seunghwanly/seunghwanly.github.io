const columns = [
  "fill-accent-sky",
  "fill-accent-mint",
  "fill-accent-lime",
] as const;

/**
 * The design system's cover, redrawn for the hero: a lime slab, a sky
 * satellite and an ink block carrying the three accents in the order the
 * section marks use them. Blocks share one baseline and a 16px gutter.
 */
export function HeroBlocks({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 480 360">
      <rect className="fill-accent-lime" height="352" rx="24" width="176" x="0" y="0" />
      {[24, 68, 112].map((x) => (
        <rect className="fill-paper" height="28" key={x} rx="14" width="28" x={x} y="296" />
      ))}
      <rect className="fill-accent-sky" height="160" rx="24" width="112" x="192" y="192" />
      <rect className="fill-ink" height="256" rx="24" width="160" x="320" y="96" />
      {[0, 1, 2].map((row) =>
        columns.map((fill, column) => (
          <rect
            className={fill}
            height="28"
            key={`${row}-${column}`}
            rx="14"
            width="28"
            x={342 + column * 44}
            y={124 + row * 44}
          />
        )),
      )}
    </svg>
  );
}
