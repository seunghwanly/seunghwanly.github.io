import type { Metadata } from "next";
import {
  PageIntro,
  SmartLink,
} from "@/components/content-ui";
import { publicProof } from "@/lib/content";

export const metadata: Metadata = {
  title: "작업 기록",
  description:
    "이승환의 GitHub 기여, 패키지 배포, 저장소, 컴포넌트 미리보기와 블로그 글을 한곳에서 확인합니다.",
};

export default function ProofPage() {
  return (
    <main id="main-content">
      <PageIntro
        title="기여한 모든 것"
        description="GitHub PR, 라이브러리, public repository와 컴포넌트 미리보기를 한 곳에 모았습니다."
        meta="2026년 8월 2일 기준"
      />

      <section className="proof-groups site-shell" aria-label="작업 기록 목록">
        {publicProof.map((group, groupIndex) => (
          <article className="proof-group" key={group.group}>
            <div className="proof-group-heading">
              <span aria-hidden="true">0{groupIndex + 1}</span>
              <h2>{group.group}</h2>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item.href}>
                  <div className="proof-group-links">
                    <SmartLink href={item.href}>
                      <strong>{item.label}</strong>
                      <span aria-hidden="true">↗</span>
                    </SmartLink>
                    {item.related?.map((related) => (
                      <SmartLink href={related.href} key={related.href}>
                        <strong>{related.label}</strong>
                        <span aria-hidden="true">↗</span>
                      </SmartLink>
                    ))}
                  </div>
                  <p>{item.note}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

    </main>
  );
}
