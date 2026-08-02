import type { Metadata } from "next";
import {
  ButtonGroup,
  ButtonLink,
  Eyebrow,
  PageIntro,
} from "@/components/content-ui";
import { profileLinks } from "@/lib/content";

export const metadata: Metadata = {
  title: "소개와 경력",
  description:
    "Product Engineer 이승환의 경력, 핵심 역량, 일하는 원칙과 연락처. Mobile & Frontend · Client Platform.",
};

const timeline = [
  {
    period: "2023.06 — 현재",
    company: "PPB Studios",
    role: "플랫폼팀 매니저",
    summary:
      "온라인과 오프라인을 연결하고, 모바일과 웹으로 나뉜 서비스를 함께 운영합니다.",
    highlights: [
      {
        id: "membership",
        title: (
          <>
            통합 멤버십으로 고객 <span>188,886명</span> 연결
          </>
        ),
        detail:
          "Flutter Web으로 시작한 통합 멤버십을 React Native Web을 거쳐 React로 옮겼습니다. 신청과 완료 화면을 나눠 가입 과정에서 이탈하는 지점을 확인할 수 있게 했고, 2026년 8월 2일까지 온라인 계정과 매장 고객 188,886명을 연결했습니다. 최종 이관 뒤에는 Datadog으로 가입 전환, 오류 세션, Web Vitals를 함께 살폈습니다.",
      },
      {
        id: "reservation",
        title: "4개 브랜드의 예약 화면과 운영 기준 통합",
        detail:
          "브랜드마다 다르게 보이던 예약 상태를 총 단계·현재 단계·종료 이유로 정리하는 API를 설계·구현하고, 예약 상세를 공용 React 화면으로 합쳤습니다. 운영자도 고객과 같은 예약 상태를 읽기 전용으로 확인할 수 있어 CS 문의를 같은 기준으로 살펴볼 수 있게 됐습니다.",
      },
      {
        id: "delivery",
        title: "배포 대기를 줄이고 웹 문제를 쉽게 확인",
        detail:
          "수정 사항을 더 빨리 사용자에게 전달할 수 있도록 자체 호스팅 CI/CD를 구축해 같은 Flutter build/archive 시간을 17–20분에서 6–7분으로 줄였습니다. 웹에서는 문제를 더 쉽게 찾고 운영할 수 있도록 Flutter Web에서 React로 옮겼습니다.",
      },
      {
        id: "agent",
        title: "채팅에서 이슈 생성부터 PR까지 이어지는 에이전트 운영",
        detail:
          "채팅에서 이슈 생성부터 코드 수정, PR까지 이어지는 내부 에이전트 실행 환경에 기여하고 운영했습니다. 여러 방식으로 화면 검증을 시험했지만, Playwright CLI는 인증 세션 재현이 어렵고 직접 브랜치를 확인하는 것보다 오래 걸렸습니다. 그래서 기본 절차로 넣지 않고 필요한 작업에서만 사용했습니다.",
      },
    ],
  },
  {
    period: "2022.02 — 2023.06",
    company: "Databank",
    role: "모바일 엔지니어 → 모바일 파트 리드",
    summary:
      "인앱결제 문제를 해결하고 음원 파일을 가볍게 만들어 업로드 부담을 줄였습니다. TestGlider의 첫 모바일 앱도 출시했습니다.",
    highlights: [
      {
        id: "billing",
        title: "매출의 14%를 담당하던 인앱결제 경로 정상화",
        detail:
          "Play Store 정책 변경에 맞춰 인앱결제 SDK를 수정해 기존 결제 경로의 중단 위험을 막았습니다.",
      },
      {
        id: "audio",
        title: "AI 평가용 음원 파일 크기 약 90% 감소",
        detail:
          "WAV 음원을 FLAC으로 압축해 파일 용량을 약 3.4MB에서 340KB로 줄였습니다. 웹과 앱에서도 같은 입력 조건을 쓸 수 있게 했습니다.",
      },
      {
        id: "launch",
        title: "TestGlider 첫 모바일 앱 출시",
        detail:
          "TOEFL Speaking·Listening을 담은 앱을 2022년 8월 출시했습니다.",
      },
    ],
  },
];

const capabilities = [
  ["웹", "React · TypeScript · Flutter Web · 라우팅 · 성능"],
  ["멀티플랫폼", "Flutter · Dart · BLoC · React Native · WebView"],
  ["네이티브 연동", "Kotlin · Swift · SPM · 플랫폼 채널 · JavaScript SDK"],
  ["서버·자동화", "NestJS · FastAPI · API 계약 · 빌드 큐"],
  ["운영 안정성", "사용 흐름 분석 · 오류 모니터링 · 테스트 전략 · 원인 분석"],
  ["빌드·배포", "Fastlane · GitHub Actions · 자체 호스팅 CI/CD · AWS"],
  ["AI 개발 도구", "Codex · Claude Code · 코드 리뷰 · 테스트"],
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro
        title="모바일에서 시작해 웹과 서버까지 역할을 넓혀 왔습니다."
        description="Flutter로 모바일 개발을 시작했고, 비즈니스에 맞춰 React 웹까지 범위를 넓혔습니다. 앱과 웹이 같은 흐름을 쓰도록 예약 API를 설계하고 빌드 서버도 만들었습니다. 플랫폼 연동 문제가 생기면 Kotlin·Swift 코드를 고치고, 출시 뒤에는 사용자 흐름과 오류를 살폈습니다."
      />

      <ButtonGroup className="resume-actions site-shell" ariaLabel="이력서와 연락">
        <ButtonLink href="/resume.pdf" variant="primary" trailing="external">
          이력서 PDF 열기
        </ButtonLink>
        <ButtonLink href="mailto:seunghwanly@gmail.com" variant="secondary">
          이메일 보내기
        </ButtonLink>
        {profileLinks.map((link) => (
          <ButtonLink
            href={link.href}
            key={link.href}
            variant="tertiary"
            trailing="external"
          >
            {link.label}
          </ButtonLink>
        ))}
      </ButtonGroup>

      <section className="career-section site-shell" aria-labelledby="career">
        <div className="section-heading">
          <h2 id="career">경력</h2>
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
                      <li key={highlight.id}>
                        <h4>{highlight.title}</h4>
                        <p>{highlight.detail}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="project-section site-shell" aria-labelledby="projects">
        <div className="section-heading">
          <h2 id="projects">프로젝트</h2>
        </div>
        <article className="project-record">
          <time>2025.07 — 2025.08</time>
          <div>
            <h3>한일 교류 SNS</h3>
            <p>
              WebSocket 기반 실시간 채팅에 AI 번역을 연결했습니다.
              Optimistic UI를 적용해 서버 응답을 기다리는 동안에도 보낸
              메시지가 바로 보이게 만들었습니다.
            </p>
          </div>
        </article>
      </section>

      <section className="capability-section site-shell" aria-labelledby="skills">
        <div className="section-heading">
          <Eyebrow>기술</Eyebrow>
          <h2 id="skills">주로 사용하는 기술</h2>
        </div>
        <dl className="capability-list">
          {capabilities.map(([name, detail]) => (
            <div key={name}>
              <dt>{name}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="education-section site-shell">
        <div>
          <Eyebrow>학력</Eyebrow>
          <h2>동국대학교 컴퓨터공학과</h2>
          <p>학사 · 2016.02–2022.02 · GPA 3.85 / 4.5</p>
        </div>
        <div>
          <Eyebrow>강의</Eyebrow>
          <h2>강의 및 멘토링</h2>
          <ul className="teaching-list">
            <li>
              <strong>Goorm</strong>
              <span>Dart 64강 · Flutter e-commerce 34강</span>
            </li>
            <li>
              <strong>Comento</strong>
              <span>Flutter 실무 PT 강사</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
