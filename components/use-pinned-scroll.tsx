"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Drives a pinned scroll section: a sticky block centred in the space above
 * the GNB, followed by an empty runway of `runway` viewport heights.
 * `progress` runs from 0 when the block pins to 1 when the runway is spent.
 *
 * The runway is an element rather than padding because a sticky child stops
 * at its parent's content edge. It is the only extra length, so the section
 * starts and ends flush with its neighbours.
 */
export function usePinnedScroll() {
  const track = useRef<HTMLDivElement>(null);
  const pinned = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [progress, setProgress] = useState(0);

  // Centring depends on the block's own height, which follows the width.
  useEffect(() => {
    const element = pinned.current;
    if (!element) return;

    const observer = new ResizeObserver(() => setHeight(element.offsetHeight));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      const element = track.current;
      const sticky = pinned.current;
      if (!element || !sticky) return;

      const top = parseFloat(getComputedStyle(sticky).top) || 0;
      const travel = element.offsetHeight - sticky.offsetHeight;
      const scrolled = top - element.getBoundingClientRect().top;
      setProgress(travel > 0 ? Math.min(1, Math.max(0, scrolled / travel)) : 0);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const pinnedStyle = {
    top: `max(1.5rem, calc((100dvh - var(--gnb-clearance) - ${height}px) / 2))`,
  };

  return { track, pinned, pinnedStyle, progress };
}

export function Runway({ length }: { length: number }) {
  return <div aria-hidden="true" style={{ height: `${length * 100}vh` }} />;
}
