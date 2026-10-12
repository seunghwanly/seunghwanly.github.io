"use client";

import Link from "next/link";
import type { StackKey, TimelineStep } from "@/lib/schema.dto";
import { Runway, usePinnedScroll } from "./use-pinned-scroll";

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

/** How much scrolling each step gets, in viewport heights. */
const STEP_LENGTH = 0.5;

/** The stacks in the order the career met them, each with its accent. */
const stackOrder: Array<{ key: StackKey; fill: string }> = [
  { key: "flutter", fill: "bg-accent-sky" },
  { key: "flutterWeb", fill: "bg-accent-mint" },
  { key: "react", fill: "bg-accent-lime" },
];

/** A year without a month sits at its start. */
function months(date: string) {
  const [year, month = 1] = date.split(".").map(Number);
  return year * 12 + (month - 1);
}

/**
 * Pinned scrollytelling: the heading, timeline and caption hold still while
 * the runway scrolls past, and how far through it the reader is picks the
 * step (see usePinnedScroll). The axis runs from the first step to the last
 * in real months, so the gaps between dots are the gaps between dates. The
 * visual is aria-hidden; every step is written out in a list only screen
 * readers get.
 */
export function CareerTimeline({
  title,
  steps,
  stackLabels,
  linkLabel,
}: {
  title: string;
  steps: TimelineStep[];
  stackLabels: Record<StackKey, string>;
  linkLabel: string;
}) {
  const { track, pinned, pinnedStyle, progress } = usePinnedScroll();
  const active = Math.min(
    steps.length - 1,
    Math.floor(progress * steps.length),
  );

  const start = months(steps[0].date);
  const span = months(steps[steps.length - 1].date) - start;
  const at = (date: string) => ((months(date) - start) / span) * 100;

  const firstYear = Number(steps[0].date.slice(0, 4)) + 1;
  const lastYear = Number(steps[steps.length - 1].date.slice(0, 4));
  const years = Array.from(
    { length: lastYear - firstYear + 1 },
    (_, index) => firstYear + index,
  );

  const step = steps[active];

  return (
    <div className="relative" ref={track}>
      <ol className="sr-only">
        {steps.map((item) => (
          <li key={item.id}>
            {item.date} {item.title}. {item.summary}
          </li>
        ))}
      </ol>

      <div
        className="sticky flex flex-col gap-4"
        ref={pinned}
        style={pinnedStyle}
      >
        <h3 className="text-card text-ink">{title}</h3>
        <div
          aria-hidden="true"
          className="tone-block bg-ink p-6 text-surface md:p-8"
        >
          <p className="text-body text-surface/70 tabular-nums">{step.date}</p>
          <p className="text-card">{step.title}</p>

          <div className="relative mx-2 mt-8 h-14">
            <div className="absolute inset-x-0 top-1.5 h-1 rounded-full bg-surface/15" />
            <div
              className="absolute top-1.5 left-0 h-1 rounded-full bg-accent-lime transition-[width] duration-700 ease-soft motion-reduce:transition-none"
              style={{ width: `${at(step.date)}%` }}
            />
            {steps.map((item, index) => (
              <span
                className={cx(
                  "absolute top-2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full transition-[background-color,scale] duration-300 ease-soft motion-reduce:transition-none",
                  index === active && "scale-150 bg-accent-lime",
                  index < active && "bg-surface",
                  index > active && "bg-surface/30",
                )}
                key={item.id}
                style={{ left: `${at(item.date)}%` }}
              />
            ))}
            {years.map((year) => (
              <span
                className="absolute top-7 -translate-x-1/2 text-tag whitespace-nowrap text-surface/50 tabular-nums"
                key={year}
                style={{ left: `${at(`${year}.01`)}%` }}
              >
                {year}
              </span>
            ))}
          </div>

          <ul className="mt-4 flex list-none flex-wrap gap-2">
            {stackOrder.map(({ key, fill }) => (
              <li
                className={cx(
                  "rounded-full px-3 py-1 text-tag transition-colors duration-300 ease-soft motion-reduce:transition-none",
                  step.stack.includes(key)
                    ? `${fill} text-ink`
                    : "bg-surface/10 text-surface/40",
                )}
                key={key}
              >
                {stackLabels[key]}
              </li>
            ))}
          </ul>
        </div>

        {/*
                Every caption sits in the same grid cell, so the card is as
                tall as the longest one and nothing below it moves when the
                step changes.
              */}
        <div className="grid">
          {steps.map((item, index) => (
            <div
              className={cx(
                "card p-6 transition-opacity duration-300 ease-soft [grid-area:1/1] motion-reduce:transition-none md:p-8",
                index === active ? "opacity-100" : "opacity-0",
              )}
              inert={index !== active}
              key={item.id}
            >
              <p className="text-body text-ink-soft">{item.summary}</p>
              {item.href?.startsWith("http") ? (
                <a
                  className="mt-3 inline-block text-body font-semibold text-ink no-underline"
                  href={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {linkLabel}
                  <span aria-hidden="true">{" →"}</span>
                </a>
              ) : (
                item.href && (
                  <Link
                    className="mt-3 inline-block text-body font-semibold text-ink"
                    href={item.href}
                  >
                    {linkLabel}
                    <span aria-hidden="true">{" →"}</span>
                  </Link>
                )
              )}
            </div>
          ))}
        </div>
      </div>

      <Runway length={steps.length * STEP_LENGTH} />
    </div>
  );
}
