import type { Metadata } from "next";
import Link from "next/link";
import {
  Eyebrow,
  PageIntro,
  SmartLink,
} from "@/components/content-ui";
import { profileLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "About / Resume",
  description:
    "Product Engineer 이승환의 경력, 핵심 역량, 일하는 원칙과 연락처. Mobile & Frontend · Client Platform.",
};

const timeline = [
  {
    period: "2023.06 — NOW",
    company: "PPB Studios",
    role: "플랫폼팀 매니저",
    summary:
      "온·오프라인 고객 흐름, 앱·웹의 상태 계약, 관측 환경과 배포 경로를 함께 다룹니다.",
    highlights: [
      "본인인증 기반 통합 멤버십으로 고객 31,124명을 연결하고, 신청과 완료 화면을 나눠 단계별 이탈을 관측했습니다.",
      "동일한 build/archive를 17–20분에서 6–7분으로 줄이고, 약 5주 만에 출시한 Flutter Web은 운영 신호를 따라 React로 이관했습니다.",
      "코딩 에이전트 런타임의 기여자·운영자로서 실행 경로를 개선하고, 채택이 낮았던 화면 캡처는 필요한 워크플로에만 남겼습니다.",
    ],
  },
  {
    period: "2022.02 — 2023.06",
    company: "Databank",
    role: "모바일 엔지니어 → 모바일 파트 리드",
    summary:
      "Flutter 제품의 결제 경로와 AI 평가용 음원 입력을 개선하고 첫 모바일 앱을 출시했습니다.",
    highlights: [
      "Play Store 정책 변경에 대응해 회사 매출의 14%를 차지하던 기존 인앱결제 경로를 정상화했습니다.",
      "WAV를 FLAC으로 무손실 압축해 파일 용량을 약 90% 줄이고 웹·앱의 AI 평가 입력 조건을 맞췄습니다.",
      "3–4개월을 목표로 TOEFL Speaking·Listening을 담은 TestGlider 첫 모바일 앱을 2022년 8월 출시했습니다.",
    ],
  },
  {
    period: "2025.07 — 2025.08",
    company: "Independent",
    role: "Flutter Developer",
    summary:
      "한일 교류 SNS에서 WebSocket 실시간 채팅과 AI 번역을 연결하고 Optimistic UI를 적용했습니다.",
    highlights: [],
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="ABOUT / RESUME · 4+ YEARS"
        title="제품의 경계까지 책임지는 Mobile & Frontend Engineer"
        description="Flutter로 Android·iOS·Web 제품을 만들고, 필요하면 React/TypeScript로 웹을 다시 설계합니다. Kotlin·Swift SDK 연동부터 모바일 CI/CD와 Datadog 관측 환경까지 제품이 실제로 배포되고 운영되는 구간을 다룹니다."
        meta="Based in Seoul · available from Dec 2026"
      />

      <section className="resume-actions site-shell" aria-label="이력서와 연락">
        <a className="button button-primary" href="/resume.pdf">
          이력서 PDF 열기 <span aria-hidden="true">↗</span>
        </a>
        <a className="button button-secondary" href="mailto:seunghwanly@gmail.com">
          이메일 보내기
        </a>
        {profileLinks.map((link) => (
          <SmartLink className="button button-quiet" href={link.href} key={link.href}>
            {link.label} <span aria-hidden="true">↗</span>
          </SmartLink>
        ))}
      </section>

      <section className="selected-impact site-shell" aria-labelledby="impact">
        <div className="section-heading">
          <Eyebrow>SELECTED IMPACT</Eyebrow>
          <h2 id="impact">짧게 전달할 세 가지 결과</h2>
        </div>
        <div className="impact-list">
          <article>
            <span>DOMAIN</span>
            <h3>분산된 온라인 계정과 매장 고객을 연결</h3>
            <p>
              본인인증과 동의를 신뢰 경계로 삼아 고객 필터·연동 요청·지난
              주문을 하나의 운영 흐름으로 묶고, 2026-05-10까지 31,124명의
              연결을 완료했습니다.
            </p>
            <Link href="/work/connected-commerce">Case 보기 →</Link>
          </article>
          <article>
            <span>PLATFORM</span>
            <h3>Android·iOS·Web을 하나의 공개 SDK로</h3>
            <p>
              Dart API와 Kotlin·Swift/SPM·JavaScript adapter를 설계하고
              13개월 동안 15개 버전을 배포했습니다.
            </p>
            <Link href="/work/multiplatform-sdk">Case 보기 →</Link>
          </article>
          <article>
            <span>RELIABILITY</span>
            <h3>운영에서 발견한 SDK 공백을 upstream에서 해결</h3>
            <p>
              AI-assisted exploration, 5개 query test와 11개 CI check,
              외부 리뷰를 거쳐 기능 PR을 12일 만에 merge했습니다.
            </p>
            <Link href="/work/observable-reliability">Case 보기 →</Link>
          </article>
        </div>
      </section>

      <section className="career-section site-shell" aria-labelledby="career">
        <div className="section-heading">
          <Eyebrow>EXPERIENCE</Eyebrow>
          <h2 id="career">Career trace</h2>
        </div>
        <ol className="career-timeline">
          {timeline.map((item) => (
            <li key={`${item.company}-${item.period}`}>
              <time>{item.period}</time>
              <div>
                <h3>{item.company}</h3>
                <p className="career-role">{item.role}</p>
                <p>{item.summary}</p>
                {item.highlights.length > 0 && (
                  <ul className="career-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="capability-section site-shell" aria-labelledby="skills">
        <div className="section-heading">
          <Eyebrow>CAPABILITY CROSS-SECTION</Eyebrow>
          <h2 id="skills">기술은 제품 경계의 순서로 설명합니다.</h2>
        </div>
        <div className="capability-table-wrap">
          <table className="capability-table">
            <tbody>
              <tr>
                <th scope="row">Product Web</th>
                <td>React · TypeScript · Flutter Web · routing · performance</td>
              </tr>
              <tr>
                <th scope="row">Cross-platform</th>
                <td>Flutter · Dart · BLoC · React Native · WebView</td>
              </tr>
              <tr>
                <th scope="row">Native bridge</th>
                <td>Kotlin · Swift · SPM · Platform Channel · JavaScript SDK</td>
              </tr>
              <tr>
                <th scope="row">Reliability</th>
                <td>RUM · crash monitoring · test strategy · root-cause analysis</td>
              </tr>
              <tr>
                <th scope="row">Delivery</th>
                <td>Fastlane · GitHub Actions · self-hosted CI/CD · AWS</td>
              </tr>
              <tr>
                <th scope="row">AI practice</th>
                <td>Codex · Claude Code · Playwright evidence · human review gate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="principles-section site-shell" aria-labelledby="working">
        <div className="section-heading">
          <Eyebrow>WORKING PRINCIPLES</Eyebrow>
          <h2 id="working">함께 일할 때 지키는 원칙</h2>
        </div>
        <div className="principle-grid">
          <article>
            <span>01</span>
            <h3>경계를 먼저 정합니다.</h3>
            <p>누가 식별하고, 어디까지 되돌릴 수 있으며, 실패하면 무엇이 막히는지 확인합니다.</p>
          </article>
          <article>
            <span>02</span>
            <h3>결정은 관측 가능하게 만듭니다.</h3>
            <p>출시 전에 안전 지표와 실패 시나리오를 정하고 운영 신호로 다시 확인합니다.</p>
          </article>
          <article>
            <span>03</span>
            <h3>자동화도 리뷰를 통과해야 합니다.</h3>
            <p>AI와 CI가 만든 결과를 사람이 검증할 수 없으면 완료로 보지 않습니다.</p>
          </article>
        </div>
      </section>

      <section className="education-section site-shell">
        <div>
          <Eyebrow>EDUCATION</Eyebrow>
          <h2>동국대학교 컴퓨터공학과</h2>
          <p>학사 · 2016.02–2022.02 · GPA 3.85 / 4.5</p>
        </div>
        <div>
          <Eyebrow>TEACHING</Eyebrow>
          <h2>복잡한 경계를 설명 가능한 구조로</h2>
          <p>Goorm Dart 64강 · Flutter e-commerce 34강 · Flutter 실무 PT 강사</p>
        </div>
      </section>
    </main>
  );
}
