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
        title="빠르게⋅안정적으로 배포하고, 업무는 효율⋅생산적으로"
        description="디자인 시스템으로 구현⋅검수 비용을 줄이고, Android·iOS·Web 모든 플랫폼에서 같은 사용성을 제공할 수 있도록 고민했습니다."
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
