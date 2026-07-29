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
          <p className="eyebrow">STATIC DOCUMENT RETRIEVAL</p>
          <h2 id="ask-console-title">Ask Seunghwan</h2>
        </div>
        <p className="ask-mode">
          정적 Q&amp;A · 서버 AI/RAG 아님
        </p>
      </div>

      <p className="ask-disclosure">
        이 사이트에 공개된 문장만 검색합니다. 답을 찾지 못하면 만들지
        않습니다.
      </p>

      <form
        className="ask-search"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="ask-query">경험과 결정 검색</label>
        <div>
          <input
            ref={inputRef}
            id="ask-query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="예: 결제·POS 경험은 어디까지인가요?"
            autoComplete="off"
          />
          <span aria-hidden="true">/</span>
        </div>
      </form>

      <div className="suggestion-list" aria-label="추천 질문">
        {askEntries.slice(0, 6).map((entry) => (
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
            <p className="answer-label">NO MATCH</p>
            <h3>확인 가능한 자료에는 이 답이 없습니다.</h3>
            <p>
              다른 키워드로 다시 찾거나 이메일로 직접 질문해 주세요. 공개
              자료에 없는 경험을 일반론으로 채우지 않습니다.
            </p>
            <a className="text-link" href="mailto:seunghwanly@gmail.com">
              직접 질문하기 <span aria-hidden="true">→</span>
            </a>
          </>
        ) : visibleAnswer ? (
          <>
            <p className="answer-label">DIRECT ANSWER</p>
            <h3>{visibleAnswer.question}</h3>
            <p className="answer-direct">{visibleAnswer.answer}</p>

            <div className="answer-grid">
              <div>
                <h4>확인된 범위</h4>
                <ul>
                  {visibleAnswer.known.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>경계</h4>
                <p>{visibleAnswer.boundary}</p>
              </div>
            </div>

            <div className="answer-sources" aria-label="관련 페이지와 공개 원문">
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

