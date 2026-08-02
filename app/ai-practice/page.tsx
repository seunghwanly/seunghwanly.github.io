import type { Metadata } from "next";
import {
  ActionGroup,
  ActionLink,
  BoundaryNote,
  Eyebrow,
  HumanAIContract,
  PageIntro,
  SourceList,
} from "@/components/content-ui";

export const metadata: Metadata = {
  title: "AI 활용",
  description:
    "Flutter SDK 수정과 코딩 에이전트 화면 캡처 실험에서 AI를 사용하고 결과를 확인한 방법.",
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
        title="AI를 개발에 사용한 두 가지 사례입니다."
        description="AI로 코드를 탐색하고 첫 구현안을 만들었습니다. 수정 범위와 병합 여부는 직접 판단하고 테스트와 리뷰, 제품 적용으로 결과를 확인했습니다."
      />

      <section className="ai-public-case site-shell" aria-labelledby="ai-public">
        <div className="section-heading">
          <Eyebrow>작업 1</Eyebrow>
          <h2 id="ai-public">Flutter SDK 수정에 AI를 사용했습니다.</h2>
          <p>
            모바일 화면 URL에서 쿼리가 빠지는 원인을 Flutter부터 네이티브
            SDK까지 추적했습니다. AI는 코드 탐색과 첫 구현안에 썼고 수정
            범위는 외부 메인테이너 리뷰를 반영해 결정했습니다.
          </p>
        </div>
        <HumanAIContract />
        <div className="ai-outcome-row">
          <div>
            <span>병합까지</span>
            <strong>12일</strong>
          </div>
          <div>
            <span>쿼리 테스트</span>
            <strong>5개</strong>
          </div>
          <div>
            <span>최종 검사</span>
            <strong>11개</strong>
          </div>
          <div>
            <span>정식 배포</span>
            <strong>다음 날</strong>
          </div>
        </div>
        <div className="ai-evidence-grid">
          <BoundaryNote>
            AI가 개발 시간을 얼마나 줄였는지는 측정하지 않았습니다. 공식
            저장소의 병합 결정은 외부 메인테이너가 맡았습니다.
          </BoundaryNote>
          <SourceList sources={datadogSources} />
        </div>
      </section>

      <section className="agent-learning" aria-labelledby="agent-learning">
        <div className="site-shell agent-learning-grid">
          <div className="section-heading">
            <Eyebrow>작업 2</Eyebrow>
            <h2 id="agent-learning">화면 캡처는 모든 작업에 맞지 않았습니다.</h2>
            <p>
              코딩 에이전트가 작업을 마치면 화면을 자동으로 캡처하는 기능을
              시험했습니다. 실행 시간이 늘고 로그인 상태가 필요한 화면은
              재현하기 어려워 모든 작업에 적용하지 않았습니다.
            </p>
          </div>
          <dl className="learning-summary">
            <div>
              <dt>확인한 문제</dt>
              <dd>실행 시간이 늘고 로그인 상태가 필요한 화면은 재현하기 어려웠습니다.</dd>
            </div>
            <div>
              <dt>바꾼 방식</dt>
              <dd>리뷰에 화면 근거가 꼭 필요한 작업에서만 선택해 사용합니다.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="page-cta site-shell">
        <div>
          <h2>SDK 수정 과정과 공개 기록을 더 볼 수 있습니다.</h2>
        </div>
        <ActionGroup>
          <ActionLink
            href="/work/observable-reliability"
            variant="primary"
            trailing="arrow"
          >
            관측 문제 해결 사례
          </ActionLink>
          <ActionLink href="/ask" variant="secondary" trailing="arrow">
            AI 경험 질문하기
          </ActionLink>
        </ActionGroup>
      </section>
    </main>
  );
}
