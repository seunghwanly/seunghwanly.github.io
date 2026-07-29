import type { Metadata } from "next";
import { AskExplorer } from "@/components/ask-explorer";
import { PageIntro } from "@/components/content-ui";

export const metadata: Metadata = {
  title: "Ask Seunghwan",
  description:
    "이승환의 공개 포트폴리오 문장만 검색하는 정적 Ask 인터페이스. 서버 AI나 실시간 RAG 없이 확인된 답과 경계를 함께 보여 줍니다.",
};

export default function AskPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="ASK · STATIC KNOWLEDGE INTERFACE"
        title="문서 안의 답을 질문으로 탐색합니다."
        description="미리 작성하고 검토한 공개 답변을 키워드로 찾습니다. 서버 LLM이나 실시간 RAG가 아니며, 자료에 없는 질문에는 모른다고 답합니다."
        meta="Press / to focus · no prompt logging · no private source connection"
      />
      <div className="ask-page-shell site-shell">
        <AskExplorer />
        <aside className="ask-principles" aria-label="Ask 작동 원칙">
          <p className="eyebrow">HOW IT WORKS</p>
          <ol>
            <li>
              <span>01</span>
              공개된 질문·답변과 case 문장만 브라우저에서 검색합니다.
            </li>
            <li>
              <span>02</span>
              답과 함께 확인된 범위, 주장하지 않는 경계를 보여 줍니다.
            </li>
            <li>
              <span>03</span>
              공개 원문이 있으면 바로 이동하고, 내부 링크는 연결하지 않습니다.
            </li>
            <li>
              <span>04</span>
              질문은 서버로 전송하거나 저장하지 않습니다.
            </li>
          </ol>
          <p className="ask-unknown-policy">
            No match — “확인 가능한 자료에는 이 답이 없습니다.”
          </p>
        </aside>
      </div>
    </main>
  );
}
