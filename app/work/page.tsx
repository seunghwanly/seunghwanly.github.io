import type { Metadata } from "next";
import {
  CaseRow,
  Eyebrow,
  PageIntro,
  ProofStrip,
} from "@/components/content-ui";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "O2O 제품, 멀티플랫폼 SDK, observability와 디자인 시스템을 문제·결정·검증·한계의 구조로 정리한 이승환의 대표 작업.",
};

export default function WorkPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="WORK · FOUR DECISION TRACES"
        title="코드보다 먼저, 어떤 경계를 소유했는지 보여 줍니다."
        description="프로젝트 이름이나 기술 목록 대신 문제의 제약, 버린 대안, 직접 내린 결정, 검증 방법과 아직 남은 공백을 같은 순서로 기록했습니다."
        meta="4 cases · Domain / Platform / Reliability / Design QA"
      />

      <section className="work-directory site-shell" aria-label="대표 사례 목록">
        <div className="case-list">
          {caseStudies.map((item) => (
            <CaseRow item={item} key={item.slug} />
          ))}
        </div>
      </section>

      <section className="work-principles site-shell" aria-labelledby="principles">
        <div className="section-heading">
          <Eyebrow>READING GUIDE</Eyebrow>
          <h2 id="principles">모든 사례에서 같은 세 가지를 확인할 수 있습니다.</h2>
        </div>
        <div className="principle-grid">
          <article>
            <span>01</span>
            <h3>Decision</h3>
            <p>팀 결과 중 제가 직접 판단하거나 구현한 범위를 구분합니다.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Verification</h3>
            <p>기간·분모·환경 또는 공개 원문으로 결과를 확인합니다.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Boundary</h3>
            <p>이 사례가 증명하지 못하는 영역과 다음 개선을 함께 둡니다.</p>
          </article>
        </div>
      </section>

      <section className="work-proof site-shell" aria-labelledby="work-proof">
        <div className="section-heading">
          <Eyebrow>PUBLIC PROOF</Eyebrow>
          <h2 id="work-proof">먼저 원문부터 보고 싶다면</h2>
        </div>
        <ProofStrip compact />
      </section>
    </main>
  );
}

