import type { Metadata } from "next";
import {
  Eyebrow,
  PageIntro,
  ProofStrip,
  SmartLink,
} from "@/components/content-ui";
import { publicProof } from "@/lib/content";

export const metadata: Metadata = {
  title: "Public Proof",
  description:
    "이승환의 공개 GitHub PR, package release, repository, live component preview와 글을 한곳에서 확인하는 public proof index.",
};

export default function ProofPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="PUBLIC PROOF · SOURCE BEFORE CLAIM"
        title="클릭해서 확인할 수 있는 것만 모았습니다."
        description="GitHub PR, package release, repository, live component preview와 글을 원문으로 연결합니다. 내부 운영 링크와 고객 데이터는 이 페이지에 없습니다."
        meta="Curated 2026-07-29 · no private source indexing"
      />

      <section className="proof-ledger site-shell" aria-labelledby="proof-ledger">
        <h2 id="proof-ledger" className="sr-only">
          핵심 공개 근거
        </h2>
        <ProofStrip />
      </section>

      <section className="proof-groups site-shell" aria-label="공개 근거 디렉터리">
        {publicProof.map((group, groupIndex) => (
          <article className="proof-group" key={group.group}>
            <div className="proof-group-heading">
              <span aria-hidden="true">0{groupIndex + 1}</span>
              <h2>{group.group}</h2>
            </div>
            <ul>
              {group.items.map((item) => (
                <li key={item.href}>
                  <SmartLink href={item.href}>
                    <strong>{item.label}</strong>
                    <span aria-hidden="true">↗</span>
                  </SmartLink>
                  <p>{item.note}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="measurement-method site-shell" aria-labelledby="method">
        <div className="section-heading">
          <Eyebrow>MEASUREMENT METHOD</Eyebrow>
          <h2 id="method">숫자를 출판하는 네 가지 조건</h2>
        </div>
        <ol className="method-list">
          <li>
            <span>01</span>
            <div>
              <h3>Contribution</h3>
              <p>팀 결과와 제가 직접 결정·구현한 범위를 구분합니다.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Context</h3>
              <p>기간·분모·환경을 숫자와 같은 화면에 둡니다.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Source</h3>
              <p>외부 링크가 있다면 한 번에 원문으로 도달하게 합니다.</p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>Boundary</h3>
              <p>인과를 증명하지 못하거나 충돌하는 수치는 제외합니다.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="not-claimed site-shell" aria-labelledby="not-claimed">
        <div>
          <Eyebrow>NOT CLAIMED</Eyebrow>
          <h2 id="not-claimed">경험으로 말하지 않는 것</h2>
        </div>
        <ul>
          <li>결제 멱등성과 중복 결제 방지 로직의 직접 설계</li>
          <li>POS 단말·카드리더·영수증 프린터 연동</li>
          <li>AOSP Framework/HAL과 C/C++ 시스템 레벨 실무</li>
          <li>프로덕션 offline-first sync</li>
          <li>RAG·MCP Gateway·Model Router·모델 서빙 운영</li>
          <li>AI로 생산성이 몇 배 높아졌다는 인과 수치</li>
        </ul>
      </section>
    </main>
  );
}

