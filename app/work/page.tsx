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
        title="31,124명의 고객을 연결하고, 4개 브랜드의 예약 화면을 하나로 모았습니다."
        description="Android·iOS·Web에서 같은 기능을 제공할 수 있도록 공통 SDK를 만들었습니다. 운영 중 빠지던 데이터는 공식 SDK에서 바로잡았고, 디자인 시스템으로 구현과 검수의 기준도 맞췄습니다."
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
