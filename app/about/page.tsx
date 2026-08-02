import type { Metadata } from "next";
import {
  ActionGroup,
  ActionLink,
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
      "온라인 계정과 매장 고객을 연결하고 앱·웹에 나뉜 제품을 함께 운영합니다.",
    highlights: [
      "본인인증 기반 통합 멤버십으로 고객 31,124명을 연결하고, 신청과 완료 화면을 나눠 단계별 이탈을 관측했습니다.",
      "예약의 총 단계·현재 단계·종료 이유를 내려주는 API를 직접 설계·구현하고 4개 브랜드의 공용 예약 화면에 적용했습니다.",
      "같은 Flutter build/archive 작업을 17–20분에서 6–7분으로 줄였습니다. 약 5주 만에 출시한 Flutter Web은 사용 중 확인한 문제를 바탕으로 React로 옮겼습니다.",
      "코딩 에이전트 실행 환경에 기여하고 운영했습니다. 활용도가 낮았던 화면 캡처는 필요한 작업에서만 사용하도록 바꿨습니다.",
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
    company: "프리랜스",
    role: "Flutter 개발자",
    summary:
      "한일 교류 SNS에서 WebSocket 실시간 채팅과 AI 번역을 연결하고 Optimistic UI를 적용했습니다.",
    highlights: [],
  },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro
        title="앱과 웹을 함께 만드는 제품 엔지니어 이승환입니다."
        description="Flutter로 Android·iOS·Web 제품을 만들고 필요하면 React로 웹을 다시 설계합니다. 제품 흐름에 필요한 API와 자동화 서버도 구현하며, Kotlin·Swift 연동부터 배포 후 오류 추적까지 직접 맡아 왔습니다."
      />

      <ActionGroup className="resume-actions site-shell" ariaLabel="이력서와 연락">
        <ActionLink href="/resume.pdf" variant="primary" trailing="external">
          이력서 PDF 열기
        </ActionLink>
        <ActionLink href="mailto:seunghwanly@gmail.com" variant="secondary">
          이메일 보내기
        </ActionLink>
        {profileLinks.map((link) => (
          <ActionLink
            href={link.href}
            key={link.href}
            variant="quiet"
            trailing="external"
          >
            {link.label}
          </ActionLink>
        ))}
      </ActionGroup>

      <section className="career-section site-shell" aria-labelledby="career">
        <div className="section-heading">
          <Eyebrow>경력</Eyebrow>
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
          <Eyebrow>기술</Eyebrow>
          <h2 id="skills">주로 사용하는 기술</h2>
        </div>
        <div className="capability-table-wrap">
          <table className="capability-table">
            <tbody>
              <tr>
                <th scope="row">웹</th>
                <td>React · TypeScript · Flutter Web · 라우팅 · 성능</td>
              </tr>
              <tr>
                <th scope="row">멀티플랫폼</th>
                <td>Flutter · Dart · BLoC · React Native · WebView</td>
              </tr>
              <tr>
                <th scope="row">네이티브 연동</th>
                <td>Kotlin · Swift · SPM · 플랫폼 채널 · JavaScript SDK</td>
              </tr>
              <tr>
                <th scope="row">운영 안정성</th>
                <td>사용 흐름 분석 · 오류 모니터링 · 테스트 전략 · 원인 분석</td>
              </tr>
              <tr>
                <th scope="row">빌드·배포</th>
                <td>FastAPI 빌드 큐 · Fastlane · GitHub Actions · 자체 호스팅 CI/CD · AWS</td>
              </tr>
              <tr>
                <th scope="row">개발 보조 도구</th>
                <td>Codex · Claude Code · Playwright · 코드 리뷰와 테스트</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="education-section site-shell">
        <div>
          <Eyebrow>학력</Eyebrow>
          <h2>동국대학교 컴퓨터공학과</h2>
          <p>학사 · 2016.02–2022.02 · GPA 3.85 / 4.5</p>
        </div>
        <div>
          <Eyebrow>강의</Eyebrow>
          <h2>Dart와 Flutter 강의</h2>
          <p>Goorm Dart 64강 · Flutter e-commerce 34강 · Flutter 실무 PT 강사</p>
        </div>
      </section>
    </main>
  );
}
