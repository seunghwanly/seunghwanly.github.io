"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { askEntries, type AskEntry } from "@/lib/content";
import { SmartLink } from "./content-ui";

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
  const featuredIds = new Set(["fit", "platform", "design-system", "ai-practice"]);
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
    <section className="ask-console" aria-labelledby="ask-console-title">
      <div className="ask-console-head">
        <div>
          <h2 id="ask-console-title">질문 찾기</h2>
        </div>
        <p className="ask-mode">공개한 답변만 검색합니다.</p>
      </div>

      <form
        className="ask-search"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="ask-query">질문 검색</label>
        <div>
          <input
            ref={inputRef}
            id="ask-query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="예: 결제 경험"
            autoComplete="off"
          />
          <span aria-hidden="true">/</span>
        </div>
      </form>

      <div className="suggestion-list" aria-label="추천 질문">
        {featuredEntries.map((entry) => (
          <button
            className={selected.id === entry.id && !query ? "is-active" : ""}
            key={entry.id}
            type="button"
            onClick={() => selectEntry(entry)}
          >
            {entry.shortLabel}
          </button>
        ))}
      </div>

      <div className="ask-answer" aria-live="polite">
        {unknown ? (
          <>
            <p className="answer-label">검색 결과</p>
            <h3>관련 내용을 찾지 못했습니다.</h3>
            <p>
              다른 단어로 검색하거나 이메일로 직접 물어보세요.
            </p>
            <a className="text-link" href="mailto:seunghwanly@gmail.com">
              직접 질문하기 <span aria-hidden="true">→</span>
            </a>
          </>
        ) : visibleAnswer ? (
          <>
            <p className="answer-label">답변</p>
            <h3>{visibleAnswer.question}</h3>
            <p className="answer-direct">{visibleAnswer.answer}</p>

            <div className="answer-grid">
              <div>
                <h4>관련 경험</h4>
                <ul>
                  {visibleAnswer.known.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>경험 범위</h4>
                <p>{visibleAnswer.boundary}</p>
              </div>
            </div>

            <div className="answer-sources" aria-label="관련 페이지와 공개 기록">
              {visibleAnswer.sources.map((source) => (
                <SmartLink href={source.href} key={source.href}>
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
