import type { Metadata } from "next";
import { CaseRow, PageIntro } from "@/components/content-ui";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "대표 작업",
  description:
    "고객 연결, 멀티플랫폼 SDK, 운영 안정성과 디자인 시스템에서 직접 맡은 일과 결과를 정리한 이승환의 대표 작업.",
};

export default function WorkPage() {
  return (
    <main id="main-content">
      <PageIntro
        title="제품 문제를 해결한 네 가지 작업입니다."
        description="각 작업에서 맡은 일과 선택한 방법, 구현 과정, 확인한 결과를 순서대로 정리했습니다."
      />

      <section className="work-directory site-shell" aria-label="대표 사례 목록">
        <div className="case-list">
          {caseStudies.map((item) => (
            <CaseRow item={item} key={item.slug} />
          ))}
        </div>
      </section>
    </main>
  );
}
