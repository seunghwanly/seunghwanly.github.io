"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ask, askEntries, site } from "@/lib/content";
import type { AskEntry } from "@/lib/schema.dto";
import { SmartLink, TextLink, cx } from "./content-ui";

const panelPadding = "px-5 py-7 md:px-7";

function normalize(value: string) {
  return value.toLocaleLowerCase("ko-KR").replace(/\s+/g, " ").trim();
}

function scoreEntry(entry: AskEntry, query: string) {
  const normalized = normalize(query);
  if (!normalized) return 0;

  const words = normalized.split(" ").filter((word) => word.length > 1);
  const corpus = normalize(
    [
      entry.question,
      entry.shortLabel,
      entry.answer,
      entry.known.join(" "),
      entry.keywords.join(" "),
    ].join(" "),
  );

  const exactBonus = corpus.includes(normalized) ? 8 : 0;
  const keywordScore = entry.keywords.reduce(
    (score, keyword) =>
      normalized.includes(normalize(keyword)) ? score + 4 : score,
    0,
  );
  const wordScore = words.reduce(
    (score, word) => (corpus.includes(word) ? score + 1 : score),
    0,
  );

  return exactBonus + keywordScore + wordScore;
}

export function AskExplorer() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(askEntries[0].id);
  const inputRef = useRef<HTMLInputElement>(null);

  const ranked = useMemo(
    () =>
      askEntries
        .map((entry) => ({ entry, score: scoreEntry(entry, query) }))
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score),
    [query],
  );

  const selected =
    askEntries.find((entry) => entry.id === selectedId) ?? askEntries[0];
  const visibleAnswer = query.trim()
    ? ranked[0]?.entry
    : selected;
  const unknown = query.trim().length > 1 && ranked.length === 0;
  const featuredIds = new Set(ask.console.featuredIds);
  const featuredEntries = askEntries.filter((entry) => featuredIds.has(entry.id));

  useEffect(() => {
    function focusSearch(event: KeyboardEvent) {
      if (
        event.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    }

    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, []);

  function selectEntry(entry: AskEntry) {
    setSelectedId(entry.id);
    setQuery("");
  }

  return (
    <section
      aria-labelledby="ask-console-title"
      className="surface surface-lift min-w-0 overflow-hidden rounded-lg"
    >
      <div
        className={cx(
          panelPadding,
          "flex flex-col justify-between gap-3 border-b border-line sm:flex-row sm:gap-6",
        )}
      >
        <h2 className="text-heading" id="ask-console-title">
          {ask.console.title}
        </h2>
        <p className="self-start rounded-sm border border-line-strong px-2.5 py-1.5 font-mono text-label tabular-nums text-accent">
          {ask.console.mode}
        </p>
      </div>

      <form
        className={cx(panelPadding, "border-b border-line")}
        onSubmit={(event) => event.preventDefault()}
        role="search"
      >
        <label
          className="mb-2.5 block text-caption font-semibold text-ink-soft"
          htmlFor="ask-query"
        >
          {ask.console.searchLabel}
        </label>
        <div className="glass grid grid-cols-[minmax(0,1fr)_34px] items-center rounded-sm border border-glass-border bg-white/70 focus-within:border-accent focus-within:shadow-[inset_0_0_0_1px_var(--color-accent)]">
          <input
            autoComplete="off"
            className="min-h-13 w-full border-0 bg-transparent px-4 text-body text-ink outline-0 placeholder:text-muted-dark"
            id="ask-query"
            onChange={(event) => setQuery(event.target.value)}
            placeholder={ask.console.searchPlaceholder}
            ref={inputRef}
            value={query}
          />
          <span
            aria-hidden="true"
            className="text-center font-mono text-body tabular-nums text-muted-dark"
          >
            /
          </span>
        </div>
      </form>

      <div
        aria-label={ask.console.suggestionsAriaLabel}
        className="flex flex-wrap gap-2 border-b border-line px-5 py-5 md:px-7"
      >
        {featuredEntries.map((entry) => (
          <button
            className={cx(
              "min-h-10 cursor-pointer rounded-sm border px-3 py-1.5 text-caption transition-colors duration-200 ease-soft",
              selected.id === entry.id && !query
                ? "border-ink bg-ink text-canvas"
                : "border-line bg-transparent text-muted hover:border-ink hover:bg-ink hover:text-canvas",
            )}
            key={entry.id}
            onClick={() => selectEntry(entry)}
            type="button"
          >
            {entry.shortLabel}
          </button>
        ))}
      </div>

      <div aria-live="polite" className={cx(panelPadding, "min-h-[430px]")}>
        {unknown ? (
          <>
            <p className="mb-3 font-mono text-label tabular-nums text-accent">
              {ask.console.empty.label}
            </p>
            <h3 className="mb-5 text-title">{ask.console.empty.title}</h3>
            <p className="text-body text-muted">
              {ask.console.empty.body}
            </p>
            <TextLink href={`mailto:${site.email}`}>
              {ask.console.empty.linkLabel} <span aria-hidden="true">→</span>
            </TextLink>
          </>
        ) : visibleAnswer ? (
          <>
            <p className="mb-3 font-mono text-label tabular-nums text-accent">
              {ask.console.answerLabel}
            </p>
            <h3 className="mb-5 max-w-[720px] text-title">
              {visibleAnswer.question}
            </h3>
            <p className="max-w-[760px] text-lede text-ink-soft">
              {visibleAnswer.answer}
            </p>

            <div className="mt-9 grid gap-7 md:grid-cols-2">
              {[
                [ask.console.knownLabel, visibleAnswer.known] as const,
                [ask.console.boundaryLabel, [visibleAnswer.boundary]] as const,
              ].map(([label, items]) => (
                <div className="border-t border-line pt-4.5" key={label}>
                  <h4 className="mb-3 font-mono text-label tabular-nums text-accent-soft">
                    {label}
                  </h4>
                  <ul className="list-disc pl-4.5">
                    {items.map((entry) => (
                      <li className="text-caption text-muted" key={entry}>
                        {entry}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div
              aria-label={ask.console.sourcesAriaLabel}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {visibleAnswer.sources.map((source) => (
                <SmartLink
                  className="inline-flex min-h-10 items-center rounded-sm border border-line-strong px-2.5 font-mono text-caption tabular-nums text-ink-soft no-underline transition-colors duration-200 ease-soft hover:border-ink"
                  href={source.href}
                  key={source.href}
                >
                  {source.label} <span aria-hidden="true">↗</span>
                </SmartLink>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
