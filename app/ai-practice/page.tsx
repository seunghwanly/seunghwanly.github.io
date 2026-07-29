import type { Metadata } from "next";
import Link from "next/link";
import {
  BoundaryNote,
  Eyebrow,
  HumanAIContract,
  PageIntro,
  SourceList,
} from "@/components/content-ui";

export const metadata: Metadata = {
  title: "AI Practice",
  description:
    "AI가 맡은 범위, 사람이 통제한 판단, 통과한 검증 gate와 실패를 분리해 기록한 이승환의 AI-assisted engineering practice.",
};

const datadogSources = [
  {
    label: "Datadog Flutter SDK PR #1069",
    href: "https://github.com/DataDog/dd-sdk-flutter/pull/1069",
  },
  {
    label: "과정과 역할 분담",
    href: "https://medium.com/@seunghwanly/datadog-flutter-sdk-%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4-%EA%B8%B0%EC%97%AC%ED%95%98%EA%B8%B0-ai%EC%99%80-%ED%95%A8%EA%BB%98-2%EC%A3%BC-%EB%A7%8C%EC%97%90-%EA%B3%B5%EC%8B%9D-%EB%B0%B0%ED%8F%AC%EA%B9%8C%EC%A7%80-a5a25b209c47",
  },
  {
    label: "Claude 공동작성 · 최초 구현",
    href: "https://github.com/DataDog/dd-sdk-flutter/commit/3177b538c2e377e7386b2fbf20f60770694f20f6",
  },
  {
    label: "Codex 공동작성 · review 반영",
    href: "https://github.com/DataDog/dd-sdk-flutter/commit/1fc5d2fa115ad6ef39a2552c0b37a04bfb261160",
  },
];

export default function AIPracticePage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="AI PRACTICE · HUMAN-CONTROLLED DELIVERY"
        title="AI가 만든 코드가 아니라, 검증 가능한 결과를 만듭니다."
        description="모델 이름이나 프롬프트 수를 성과로 두지 않습니다. AI가 탐색과 초안을 맡고, 사람이 문제·범위·리뷰·운영 검증을 통제하는 작업 계약을 사용합니다."
        meta="Problem → AI role → Human control → Verification → Limitation"
      />

      <section className="ai-public-case site-shell" aria-labelledby="ai-public">
        <div className="section-heading">
          <Eyebrow>01 · PUBLIC CASE</Eyebrow>
          <h2 id="ai-public">여러 SDK 레이어의 탐색을 upstream merge로 닫기</h2>
          <p>
            모바일 RUM의 route query 유실을 Flutter부터 네이티브 SDK까지
            추적했습니다. AI가 탐색 공간과 초안 시간을 줄였고, 외부
            maintainer와 운영 데이터가 최종 범위를 결정했습니다.
          </p>
        </div>
        <HumanAIContract />
        <div className="ai-outcome-row">
          <div>
            <span>MERGE WINDOW</span>
            <strong>12 days</strong>
          </div>
          <div>
            <span>QUERY TESTS</span>
            <strong>5</strong>
          </div>
          <div>
            <span>FINAL CHECKS</span>
            <strong>11</strong>
          </div>
          <div>
            <span>RELEASE</span>
            <strong>Next day</strong>
          </div>
        </div>
        <BoundaryNote>
          AI 단독 기여도와 개발 속도 향상률을 측정하지 않았습니다.
          maintainer나 AI Platform Engineer 경험으로 확대하지 않습니다.
        </BoundaryNote>
        <SourceList sources={datadogSources} />
      </section>

      <section className="agent-learning" aria-labelledby="agent-learning">
        <div className="site-shell agent-learning-grid">
          <div className="section-heading">
            <Eyebrow>02 · ANONYMIZED LEARNING</Eyebrow>
            <h2 id="agent-learning">
              작업 완료와 사람이 검증할 수 있는 상태는 다릅니다.
            </h2>
            <p>
              내부 coding-agent workflow에서 실행 뒤 화면 capture를
              리뷰 문맥에 연결하는 실험을 했습니다. 시스템 이름과 내부
              URL은 공개하지 않고 실패와 다음 설계만 남깁니다.
            </p>
          </div>
          <div className="failure-trace">
            <article>
              <span>OBSERVED</span>
              <h3>Capture가 전체 수행 시간을 늘렸습니다.</h3>
              <p>모든 작업에 자동 적용할 만큼 이득이 일정하지 않았습니다.</p>
            </article>
            <article>
              <span>CONSTRAINT</span>
              <h3>인증 session이 필요한 화면은 coverage가 낮았습니다.</h3>
              <p>원하는 사용자 상태를 안전하게 재현할 fixture가 없었습니다.</p>
            </article>
            <article>
              <span>DECISION</span>
              <h3>강제가 아니라 workflow별 opt-in gate로 바꿨습니다.</h3>
              <p>화면 evidence가 실제 리뷰 판단에 필요한 작업만 선택합니다.</p>
            </article>
            <article>
              <span>NEXT</span>
              <h3>안전한 test session과 evidence success 기준이 먼저입니다.</h3>
              <p>capture 개수보다 검토 가능한 상태의 비율을 측정해야 합니다.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="ai-boundaries site-shell" aria-labelledby="ai-gaps">
        <div className="section-heading">
          <Eyebrow>03 · CAPABILITY BOUNDARY</Eyebrow>
          <h2 id="ai-gaps">해본 것과 관심 있는 것을 섞지 않습니다.</h2>
        </div>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th scope="col">확인 가능한 경험</th>
                <th scope="col">아직 없는 경험</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AI-assisted multi-layer code exploration</td>
                <td>프로덕션 RAG·Model Router 운영</td>
              </tr>
              <tr>
                <td>테스트·리뷰·배포·운영 관측 gate</td>
                <td>MCP Gateway·vLLM/Triton 모델 서빙</td>
              </tr>
              <tr>
                <td>Agent runtime의 reviewability와 lifecycle</td>
                <td>LLM 평가 플랫폼과 비용·지연 baseline</td>
              </tr>
              <tr>
                <td>공개 commit의 AI coauthor disclosure</td>
                <td>AI 생산성 N배라는 인과 측정</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="future-hypothesis site-shell" aria-labelledby="future">
        <div className="section-heading">
          <Eyebrow>04 · FUTURE HYPOTHESIS · NOT EXPERIENCE</Eyebrow>
          <h2 id="future">토스플레이스에서의 첫 90일 AI 제품 가설</h2>
          <p>
            자동 실행부터 시작하지 않습니다. 사장님이 반복해서 판단하는
            한 문제를 고르고, 근거와 승인 경계를 먼저 설계합니다.
          </p>
        </div>
        <ol className="ninety-day-grid">
          <li>
            <span>0–30</span>
            <h3>Map the decision</h3>
            <p>
              반복 업무의 시간·오류·재작업을 기준선으로 잡고 데이터,
              tool 권한과 개인정보 경계를 정의합니다.
            </p>
          </li>
          <li>
            <span>31–60</span>
            <h3>Source-backed slice</h3>
            <p>
              이상 신호, 원문 근거와 권장 행동을 한 카드에 두고 외부
              변경은 사람의 승인 뒤 실행합니다.
            </p>
          </li>
          <li>
            <span>61–90</span>
            <h3>Canary and gates</h3>
            <p>
              정확도·source coverage·승인/수정률·지연·비용·실패와
              fallback을 측정하고 효과가 없으면 확대하지 않습니다.
            </p>
          </li>
        </ol>
      </section>

      <section className="page-cta site-shell">
        <div>
          <p className="eyebrow">CONTINUE THE TRACE</p>
          <h2>구체적인 결정과 공개 원문을 이어서 보세요.</h2>
        </div>
        <div>
          <Link className="button button-primary" href="/work/observable-reliability">
            Reliability case
          </Link>
          <Link className="button button-secondary" href="/ask">
            AI 경험 질문하기
          </Link>
        </div>
      </section>
    </main>
  );
}

