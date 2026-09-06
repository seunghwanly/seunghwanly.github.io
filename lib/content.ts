/**
 * 이 파일에는 문구와 단어만 둡니다.
 * 타입은 `lib/schema.dto.ts`, 화면 구조와 스타일은 `components/`에 있습니다.
 * 화면에 보이는 글자를 고치려면 이 파일만 고치면 됩니다.
 */
import type {
  AboutCopy,
  CaseDetailCopy,
  CaseStudy,
  IntroCopy,
  NotFoundCopy,
  ProofMetric,
  ResumeCopy,
  SiteCopy,
  SourceLink,
  UiCopy,
  WorkIndexCopy,
} from "./schema.dto";

/** 이력서와 공개 기록에 함께 쓰는 기준일. */
const asOf = "2026년 8월 10일 기준";

export const profileLinks: SourceLink[] = [
  { label: "GitHub", href: "https://github.com/seunghwanly" },
  { label: "Medium", href: "https://medium.com/@seunghwanly" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/seunghwanly",
  },
];

export const proofMetrics: ProofMetric[] = [
  {
    value: "datadog_flutter_plugin",
    label: "RUM 모바일⋅웹의 차이",
    detail: "문제 정의부터 3.4.0 릴리즈까지",
    href: "https://github.com/DataDog/dd-sdk-flutter/pull/1069",
  },
  {
    value: "kakao_maps_flutter",
    label: "공식 라이브러리 지원 범위 확대",
    detail: "Flutter(Android·iOS·Web) 지원",
    href: "https://pub.dev/packages/kakao_maps_flutter",
  },
  {
    value: "WDS",
    label: "윙크 디자인 시스템",
    detail: "Flutter에서 React까지",
    href: "https://design.winc.app/",
  },
];

/* ================================================================== *
 * 대표 작업
 * ================================================================== */

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    category: "통합멤버십 · O2O",
    title: "온라인과 오프라인 매장 고객을 하나로",
    summary:
      "본인인증 기반으로 온라인 고객과 오프라인 매장 고객 199,000+명을 연결했습니다. 예약 상태 API를 설계⋅구현하고 4개 브랜드와 오프라인 예약내역을 하나의 웹 서비스로 통합했습니다.",
    role: "본인인증 · 예약 상태 API · 공용 예약 상세 · 앱/웹 연동 · 배포",
    tags: ["O2O", "본인인증", "공용 예약 상세", "App · Web 연동"],
    metrics: [
      {
        value: "199,000+",
        label: "통합멤버십 연동한 브랜드 유저수",
        context: "2026-03-11 출시 후 2026-08-10까지 누적",
      },
      {
        value: "4개",
        label: "윙크⋅하파크리스틴⋅젬아워⋅츄렌즈",
        context: "2026-07-31 공용 예약 상세 운영 반영",
      },
      {
        value: "99.92%",
        label: "장바구니 crash-free",
        context: "출시 첫 달 354,758 views 기준",
      },
    ],
    sections: [
      {
        id: "situation",
        label: "상황",
        title: "브랜드마다 흩어진 고객 정보로 동일 고객 식별 불가",
        paragraphs: [
          "각 브랜드에서 예약한 유저와 매장에서 구매한 고객 정보가 분리돼 같은 고객인지 확인하기 어려웠습니다. 매장에서도 고객의 지난 온라인 예약 건을 확인할 수 없었습니다.",
          "브랜드별로 예약상세화면이 다르고 같은 예약 프로세스도 표현이 달랐습니다. 수정이 필요할 때마다 여러 화면의 상태와 동작을 함께 고쳐야 했습니다.",
        ],
      },
      {
        id: "changes",
        label: "바꾼 것",
        title: "본인인증 기반 고객 연결 및 예약 화면 통합",
        bullets: [
          "유저 동의하에 본인인증 정보를 기준으로 온라인·오프라인 유저 정보 연결",
          "예약 유형에 따라 바뀌는 상태 API 응답 구조를 직접 설계·구현해 앱과 웹이 같은 기준으로 화면을 그리도록 정리",
          "4개 브랜드 예약 상세를 공용 웹(React)으로 이관, 일반예약⋅구매예약 화면 동시 운영",
          "별도 도메인⋅QR 숏링크 서버, 딥링크, 인앱브라우저, 레거시 유저 예외를 처리한 뒤 배포",
        ],
      },
      {
        id: "result",
        label: "확인한 결과",
        title: "고객 199,000+명 연결 및 공용 예약 화면 운영 반영",
        paragraphs: [
          "출시 첫 달 앱 242,694 sessions의 crash-free는 99.84%, 장바구니 354,758 views는 99.92%, 웹 4,014 sessions는 100%였습니다.",
          "2026년 7월에는 공용 예약 화면을 운영에 반영하고 윙크 앱 업데이트까지 마쳤습니다.",
        ],
      },
    ],
    limitation:
      "공용 예약 화면으로 바꾼 뒤 로딩 시간과 작업 시간이 얼마나 줄었는지는 측정하지 않았습니다.",
    sources: [],
  },
  {
    id: "2",
    category: "레거시 정상화 · Flutter Web",
    title: "예약이 되지 않던 Vue2 웹, Flutter 앱 코드베이스로 대체",
    summary:
      "웹으로 들어온 유저가 예약을 온전히 마칠 수 없는 상태였습니다. Vue2를 고치는 대신 이미 검증된 Flutter 앱을 Web으로 확장하는 쪽을 빠르게 택했고, 약속한 기한보다 한 달 앞서 배포해 웹에서도 예약되기 시작했습니다.",
    role: "웹 확장 전략 판단 · 플랫폼 의존성 분리 · AWS 웹 인프라 구성 · 라우팅·SEO·딥링크 · 배포",
    tags: ["Vue2 대체", "Flutter Web", "Platform stub", "AWS", "SEO"],
    metrics: [
      {
        value: "+104%",
        label: "월 순 방문자",
        context: "17,791명 → 36,402명 · 웹 대체 후",
      },
      {
        value: "1개월",
        label: "기한보다 앞선 출시",
        context: "12월 말 목표 → 11월 말 운영 배포",
      },
      {
        value: "2초 이내",
        label: "첫 화면 표시",
        context: "FCP 평균 4초 이상 → 2초 이하",
      },
    ],
    sections: [
      {
        id: "situation",
        label: "상황",
        title: "유입은 유지되는데 웹에서 예약 완료 불가",
        paragraphs: [
          "Vue2로 만든 웹 서비스가 정상 동작하지 않아 웹으로 들어온 사용자가 예약 흐름을 완료할 수 없었습니다. 앱을 설치하지 않은 사용자는 그대로 이탈했습니다.",
          "신규 제품 출시가 예정돼 있어 그때까지는 앱과 같은 경험을 웹에서도 제공해야 했습니다. 고칠 대상은 명확했지만 남은 기간이 짧았습니다.",
        ],
      },
      {
        id: "changes",
        label: "바꾼 것",
        title: "Vue2 유지보수 대신 검증된 앱 자산의 Web 확장",
        bullets: [
          "Vue2 유지보수와 Flutter 앱 확장을 비교해 이미 운영에서 검증된 상품·예약·결제 흐름을 그대로 쓰는 쪽으로 결정. 이 판단을 빠르게 내린 것이 기한 단축의 핵심",
          "서드파티·패키지의 웹 호환성을 먼저 확인하고 Platform stub pattern으로 플랫폼별 의존성을 빌드 단계에서 분리, 모바일 전용 코드로 인한 웹 빌드 차단 방지",
          "카카오맵 Web 지원, 라우팅, SEO, 딥링크 처리 및 레거시 링크 redirect로 기존 주소 유입 유지",
          "AWS 기반 웹 인프라 신규 구성 후 운영 배포",
        ],
      },
      {
        id: "result",
        label: "확인한 결과",
        title: "웹 예약 정상화 및 월 순 방문자 2배 증가",
        paragraphs: [
          "불안정했던 웹을 대체해 일반 예약과 구매 예약을 웹에서 완료할 수 있게 했습니다. 목표 기한은 12월 말이었지만 11월 말에 배포했습니다.",
          "대체한 뒤 월 순 방문자는 17,791명에서 36,402명으로 늘었습니다. 첫 화면 표시는 평균 4초 이상에서 2초 이하로 줄었고 Lighthouse 점수는 기존 대비 30점 이상 개선됐습니다.",
        ],
      },
    ],
    limitation:
      "웹으로 들어온 사용자 중 예약까지 이어진 비율은 따로 측정하지 않았습니다. 방문자 증가에는 신규 제품 출시와 프로모션도 함께 작용했습니다. Flutter Web은 빠른 대체에 효과적이었지만 DOM 기반 관측에 한계가 있어 이후 React Native Web을 거쳐 React로 옮겼습니다.",
    sources: [
      {
        label: "Flutter Web 배포기",
        href: "https://medium.com/@seunghwanly/flutter-web-%EB%B0%B0%ED%8F%AC%EA%B8%B0-a2ba8b0212de",
      },
      {
        label: "윙크 웹",
        href: "https://shop.winc.app",
      },
    ],
  },
  {
    id: "3",
    category: "운영 안정성 · 오픈소스",
    title: "Datadog RUM 이슈 발견 및 오픈소스 기여",
    summary:
      "문제를 재현해 SDK를 수정하고 테스트와 외부 리뷰를 거쳐 공식 버전에 반영했습니다. AI는 코드 탐색과 첫 구현안 작성에 활용했습니다.",
    role: "원인 분석 · SDK 수정 · 테스트 · 외부 리뷰 · 제품 적용",
    tags: ["RUM", "Flutter SDK", "오픈소스", "AI"],
    metrics: [
      {
        value: "12일",
        label: "제안부터 병합까지",
        context: "2026-06-25 → 2026-07-07",
      },
      {
        value: "5개",
        label: "쿼리 테스트",
        context: "기존 화면 경로와 쿼리가 포함된 경로",
      },
      {
        value: "11개",
        label: "CI 검사",
        context: "외부 프로젝트의 병합 전 검사",
      },
    ],
    sections: [
      {
        id: "situation",
        label: "상황",
        title: "모바일 화면 URL의 쿼리 정보 누락",
        paragraphs: [
          "Datadog의 실제 사용자 모니터링(RUM)에서 서로 다른 유입이 같은 화면으로 집계됐습니다. 제품 코드에서 우회하면 빠르게 고칠 수 있지만 SDK를 올릴 때마다 같은 패치를 유지해야 했습니다.",
        ],
      },
      {
        id: "changes",
        label: "바꾼 것",
        title: "Flutter SDK 원인 규명 및 공식 저장소 수정안 제출",
        bullets: [
          "Flutter부터 네이티브 SDK까지 쿼리가 사라지는 지점 재현",
          "화면 URL과 쿼리 속성 전달 및 기존 경로 회귀 테스트",
          "외부 메인테이너 리뷰 반영으로 수정 범위 축소",
          "AI로 관련 SDK 탐색과 첫 구현안·테스트·문서 초안 작성, 문제 범위와 수정안·리뷰 대응은 직접 판단",
        ],
      },
      {
        id: "result",
        label: "확인한 결과",
        title: "12일 만에 병합, 다음 날 공식 버전 배포",
        paragraphs: [
          "코드 파일 2개와 쿼리 테스트 5개, CI 검사 11개를 거쳐 수정안이 공식 저장소에 병합됐습니다. 제품에 새 버전을 적용한 뒤 iOS와 Android에서 쿼리가 수집되는지도 확인했습니다.",
        ],
      },
    ],
    limitation:
      "개발 속도 향상률과 장애 복구 시간은 측정하지 않았습니다. AI는 개발 보조 도구로 사용했으며 SDK 유지보수와 병합 결정은 외부 메인테이너가 맡았습니다.",
    sources: [
      {
        label: "Datadog Flutter SDK PR #1069",
        href: "https://github.com/DataDog/dd-sdk-flutter/pull/1069",
      },
      {
        label: "과정과 역할 분담",
        href: "https://medium.com/@seunghwanly/datadog-flutter-sdk-%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4-%EA%B8%B0%EC%97%AC%ED%95%98%EA%B8%B0-ai%EC%99%80-%ED%95%A8%EA%BB%98-2%EC%A3%BC-%EB%A7%8C%EC%97%90-%EA%B3%B5%EC%8B%9D-%EB%B0%B0%ED%8F%AC%EA%B9%8C%EC%A7%80-a5a25b209c47",
      },
    ],
  },
  {
    id: "4",
    category: "디자인 시스템",
    title: "일관된 디자인으로 사용자 경험과 생산성을 개선",
    summary:
      "Flutter와 React에 맞춘 디자인 시스템을 만들었습니다. 구현과 QA 생산성을 높이고 사용자에게 일관된 경험을 제공했습니다.",
    role: "디자인 시스템 구조 · 컴포넌트 구현 · 미리보기 · 배포",
    tags: ["디자인 시스템", "Flutter", "Widgetbook", "React", "Storybook"],
    metrics: [
      {
        value: "48개",
        label: "병합된 공개 PR",
        context: "공개 저장소에서 외부 확인 가능",
      },
      {
        value: "4단계",
        label: "모노레포 구조",
        context: "토큰 · 기반 요소 · 컴포넌트 · 미리보기",
      },
    ],
    sections: [
      {
        id: "situation",
        label: "상황",
        title: "디자인과 실제 화면의 차이를 배포 직전 발견",
        paragraphs: [
          "디자이너와 개발자가 서로 다른 화면을 보면 상태, 간격, 터치 동작의 차이가 배포 직전까지 남았습니다. 문서와 캡처만으로는 실제 동작을 함께 확인하기 어려웠습니다.",
        ],
      },
      {
        id: "changes",
        label: "바꾼 것",
        title: "PR마다 실행 가능한 컴포넌트 미리보기 공유",
        bullets: [
          "Melos 모노레포를 토큰·기반 요소·컴포넌트·미리보기 4단계로 분리",
          "Flutter는 Widgetbook, React는 Storybook으로 같은 디자인 시스템 확인 환경 제공",
          "반응형 상태와 주요 사용 예시 작성, PR마다 미리보기 배포",
          "디자인 확인이 끝난 컴포넌트만 배포 절차로 이관",
        ],
      },
      {
        id: "result",
        label: "확인한 결과",
        title: "작성한 공개 PR 48개 전량 병합",
        paragraphs: [
          "Flutter WDS 공개 저장소에서 작성한 PR 48개를 확인할 수 있습니다. Flutter Widgetbook과 React Storybook도 공개 링크로 열려 있습니다.",
        ],
      },
    ],
    limitation:
      "개발 시간 단축률과 코드 감소율은 측정하지 않았습니다. 자동 화면 회귀 테스트는 다음에 보완할 과제입니다.",
    sources: [
      {
        label: "Flutter WDS 저장소",
        href: "https://github.com/ppbstudios/wds_flutter",
      },
      {
        label: "작성한 공개 PR",
        href: "https://github.com/ppbstudios/wds_flutter/pulls?q=is%3Apr+author%3Aseunghwanly",
      },
      {
        label: "Flutter 컴포넌트 미리보기",
        href: "https://design.winc.app",
      },
      {
        label: "React 컴포넌트 미리보기",
        href: "https://wds.winc.app",
      },
    ],
  },
];

/* ================================================================== *
 * 사이트 전체
 * ================================================================== */

export const site: SiteCopy = {
  name: "이승환",
  role: "Frontend Engineer",
  email: "seunghwanly@gmail.com",
  skipToContent: "본문으로 건너뛰기",
  metadata: {
    defaultTitle: "이승환 — Frontend Engineer",
    titleTemplate: "%s · 이승환",
    description:
      "Flutter 앱과 React 웹을 만들고 Kotlin·Swift 연동부터 빌드·배포 자동화와 운영 중 오류 추적까지 맡아 온 Frontend Engineer 이승환의 포트폴리오입니다.",
    applicationName: "Seunghwan Lee Portfolio",
    keywords: [
      "Frontend Engineer",
      "Mobile",
      "Flutter",
      "React",
      "TypeScript",
      "Kotlin",
      "Swift",
      "Client Platform",
      "Observability",
    ],
    shareTitle: "이승환 — Frontend Engineer",
    shareDescription:
      "모바일과 웹을 오가며 서비스를 만들고 운영한 이승환의 대표 작업.",
    ogImageAlt: "Seunghwan Lee · Frontend Engineer · Mobile · Web",
  },
  person: {
    name: "이승환",
    alternateName: "Seunghwan Lee",
    jobTitle: "Frontend Engineer — Mobile & Web",
    sameAs: [
      "https://github.com/seunghwanly",
      "https://medium.com/@seunghwanly",
      "https://www.linkedin.com/in/seunghwanly",
    ],
    knowsAbout: [
      "Flutter",
      "React",
      "TypeScript",
      "Kotlin",
      "Swift",
      "REST API design",
      "FastAPI",
      "Client SDK",
      "Mobile observability",
      "Design systems",
      "AI-assisted software delivery",
    ],
  },
  nav: {
    ariaLabel: "주요 메뉴",
    items: [
      { label: "Me", href: "/about" },
      { label: "Works", href: "/works" },
      { label: "Resume", href: "/resume" },
    ],
  },
};

/* ================================================================== *
 * 여러 화면이 함께 쓰는 문구
 * ================================================================== */

export const ui: UiCopy = {
  tagListAriaLabel: "관련 기술과 주제",
  backToTop: "위로",
  backToList: "목록으로",
  newTabSuffix: "새 창에서 열기",
  caseLinkAriaSuffix: "자세히 보기",
};

/* ================================================================== *
 * Intro (`/`)
 * ================================================================== */

export const intro: IntroCopy = {
  meta: {
    title: "Frontend Engineer",
    description:
      "모바일과 웹을 오가며 서비스를 만들고 운영해 온 Frontend Engineer 이승환입니다.",
  },
  illustrationAlt: "흔들리는 노트북을 그린 손그림",
  emailAriaLabel: "이메일 보내기",
};

/* ================================================================== *
 * Me (`/about`)
 * ================================================================== */

export const about: AboutCopy = {
  meta: {
    title: "소개",
    description:
      "Frontend Engineer 이승환의 소개와 경력. 모바일과 웹을 오가며 서비스를 만들고 운영해 왔습니다.",
  },
  headline: [
    { text: "모바일", strong: true },
    { text: "과 " },
    { text: "웹", strong: true },
    { text: "을 오가며\n서비스를 만들고 운영해왔습니다." },
  ],
  techListAriaLabel: "주로 사용하는 기술",
  tech: [
    { name: "Flutter", icon: "/tech/flutter.png", width: 300, height: 372 },
    { name: "React", icon: "/tech/react.png", width: 512, height: 512 },
  ],
  career: {
    title: "경력",
    entries: [
      {
        period: "2023.06 — 현재",
        company: "PPB Studios",
        role: "플랫폼팀 매니저",
        summary:
          "온라인과 오프라인을 연결하고 모바일과 웹으로 나뉜 서비스를 함께 운영합니다.",
        highlights: [
          {
            id: "membership",
            title: "통합 멤버십으로 고객 199,000+명 연결",
            detail:
              "브랜드별로 유저가 분산돼 이메일만으로는 동일 사용자 식별이 어려운 상태. 본인인증과 제3자 정보제공 동의를 연결 기준으로 정하고 Flutter Web → React Native Web → React로 점진 이관, 신청과 완료 화면을 분리해 이탈 지점 추적 가능하게 구성. 2026년 8월까지 온·오프라인 고객 199,000+명 연결, 이관 후 Datadog으로 가입 전환·오류 세션·Web Vitals 관측",
          },
          {
            id: "reservation",
            title: "4개 브랜드의 예약 화면과 운영 기준 통합",
            detail:
              "브랜드마다 예약 상태 표현이 달라 정책 변경 시 여러 화면을 함께 수정해야 하는 상태. 총 단계·현재 단계·종료 이유로 상태 계약을 통일하는 API를 설계·구현하고 예약 상세를 공용 React 화면으로 통합. 운영자도 고객과 같은 상태를 읽기 전용으로 확인해 CS 문의를 동일 기준으로 처리 가능",
          },
          {
            id: "delivery",
            title: "CI/CD 자동화로 배포 시간 95% 단축",
            detail:
              "주 1회 4시간이 걸리던 수동 배포가 개발 시간을 제약. 내부 자원을 활용해 FastAPI + Fastlane 자동화 서버를 구축, 배포 시간 95% 단축(4시간 → 15분)으로 주 3시간 개발 시간 확보 및 부가비용 절감",
          },
          {
            id: "performance",
            title: "성능 최적화로 메모리 50% 절감 및 이탈률 7% 감소",
            detail:
              "상품 관련 화면에서 Crash가 빈번하게 발생. Profile mode로 메모리 누수 지점을 파악해 이미지·스크롤 최적화와 Optimistic UI를 적용, 메모리 사용량 50% 절감(624MiB → 313MiB)으로 저사양 기기 사용성 확보 및 이탈률 7% 감소",
          },
          {
            id: "leading",
            title: "파트 내 기술 리딩과 리뷰 문화 정착",
            detail:
              "클린아키텍처 전환을 위해 DI 개념부터 BLoC 이벤트·상태 관리까지 단계별 교육, 이해가 어려운 기능은 다이어그램과 페어 프로그래밍으로 1:1 멘토링. custom_lint를 제작해 반복 실수를 차단하고 700+ 테스트 코드를 구축해 코드 리뷰 문화 정착",
          },
          {
            id: "agent",
            title: "Slack에서 이슈 생성부터 PR까지 이어지는 에이전트 운영",
            detail:
              "Slack에서 이슈 생성 → 코드 수정 → PR까지 이어지는 내부 에이전트 실행 환경에 기여하고 운영. 화면 검증 자동화를 여러 방식으로 시험했으나 Playwright CLI는 인증 세션 재현이 어렵고 직접 브랜치를 확인하는 편이 빨라, 기본 절차에서 제외하고 필요한 작업에만 선택 적용",
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
              "Play Store 정책 변경으로 매출의 14%를 담당하는 인앱결제가 조회 불가 상태. 기존 라이브러리의 deprecated API 의존성을 원인으로 확인하고 in_app_purchase를 직접 fork해 새 Billing API 구조에 맞춰 수정, 결제 경로 정상화로 매출 손실 방지",
          },
          {
            id: "audio",
            title: "AI 평가용 음원 업로드 시간 90% 단축",
            detail:
              "Speaking 답안 제출 시 3–4MB 음원 업로드 지연이 학습 흐름을 끊고, 같은 발음에도 웹과 앱의 AI 점수가 달라 신뢰도 저하. AI 모델 입력 스펙에 맞춰 FLAC 무손실 압축과 44.1kHz 표준화를 적용, 업로드 시간 90% 단축 및 웹–앱 간 일관된 피드백 제공",
          },
          {
            id: "launch",
            title: "TestGlider 첫 모바일 앱 출시",
            detail:
              "TestGlider 모바일 진출이 필요한 상황에서 3–4개월 내 출시를 목표로 웹 서비스를 분석해 모바일 최적화 지점 도출. 2022년 8월 첫 앱을 출시해 TOEFL Speaking·Listening 기능 런칭",
          },
        ],
      },
    ],
  },
  projects: {
    title: "프로젝트",
    entries: [
      {
        period: "2025.07 — 2025.08",
        title: "우리다치 · 한일 교류 SNS",
        role: "프리랜서 · Flutter Developer",
        description:
          "뷰와 컨트롤러를 1:1로 매핑하는 구조로 재설계해 의존성을 줄였고 WebSocket 기반 실시간 채팅에 AI 번역을 연결했습니다. Optimistic UI로 서버 응답을 기다리는 동안에도 보낸 메시지가 바로 보이게 만들었습니다.",
        sources: [
          {
            label: "App Store",
            href: "https://apps.apple.com/us/app/%EC%9A%B0%EB%A6%AC%EB%8B%A4%EC%B9%98-%ED%95%9C%EC%9D%BC-%EA%B5%90%EB%A5%98-sns/id6749172069",
          },
        ],
      },
    ],
  },
};

/* ================================================================== *
 * Works (`/works`, `/works/[id]`)
 * ================================================================== */

export const workIndex: WorkIndexCopy = {
  meta: {
    title: "대표 작업",
    description:
      "유저 연동, 크로스 플랫폼, 운영 안정성과 디자인 시스템에서 직접 맡은 일과 결과를 정리한 이승환의 대표 작업.",
  },
  listAriaLabel: "대표 작업 목록",
};

export const caseDetail: CaseDetailCopy = {
  fallbackTitle: "대표 작업",
  roleLabel: "직접 맡은 일",
  metricsLabel: "확인한 수치",
  limitationLabel: "범위와 한계",
  sourcesLabel: "확인 자료",
  asideAriaLabel: "작업 요약 정보",
};

/* ================================================================== *
 * Resume (`/resume`)
 * ================================================================== */

export const resume: ResumeCopy = {
  meta: {
    title: "이력서",
    description:
      "Frontend Engineer 이승환의 이력서. 경력과 정량 성과, 공개 기록, 학력과 강의를 한 장에 정리했습니다.",
  },
  headline: "Frontend Engineer · Mobile & Web",
  updatedAt: asOf,
  contactAriaLabel: "연락처와 외부 프로필",
  download: { label: "PDF 다운로드", href: "/resume.pdf" },
  profile: [
    "사용자 관점에서 고민하며 지속 가능한 서비스를 만듭니다. Flutter로 모바일을 시작해 비즈니스 요구에 맞춰 React 웹까지 넓혔고 예약 상태 API 설계부터 Kotlin·Swift 연동, 빌드·배포 자동화까지 맡아 왔습니다.",
    "전체를 갈아엎기보다 점진적으로 전환해 서비스를 멈추지 않는 쪽을 택합니다. 오버엔지니어링을 지양하고 유지보수할 수 있는 선에서 본질적인 문제에 집중합니다. AI는 탐색과 초안에 활용하고 결과는 테스트와 리뷰로 확인합니다.",
  ],
  sections: {
    profile: "Profile",
    career: "Career",
    projects: "Projects",
    skills: "Skills",
    records: "Public Records",
    education: "Education",
    teaching: "Lecture",
  },
  skills: [
      {
        label: "웹",
        detail: "React · TypeScript · Flutter Web",
      },
      {
        label: "크로스 플랫폼",
        detail: "Flutter · Dart · BLoC · React Native · WebView",
      },
      {
        label: "네이티브 연동",
        detail: "Kotlin · Swift · SPM · Platform Channel",
      },
      { label: "서버", detail: "NestJS · FastAPI" },
      {
        label: "관측",
        detail: "Datadog RUM",
      },
      {
        label: "빌드·배포",
        detail: "Fastlane · GitHub Actions · AWS",
      },
      {
        label: "AI 개발 도구",
        detail: "Codex · Claude Code",
      },
    ],
  education: {
    title: "동국대학교 컴퓨터공학과",
    detail: "학사 · 2016.02–2022.02 · GPA 3.85 / 4.5",
  },
  teaching: [
      { label: "Goorm", detail: "Dart 64강 · Flutter e-commerce 34강" },
      { label: "Comento", detail: "Flutter 실무 PT 강사" },
    ],
};

/* ================================================================== *
 * 404
 * ================================================================== */

export const notFound: NotFoundCopy = {
  code: "404",
  title: "페이지를 찾을 수 없습니다.",
  description: "주소를 확인하거나 대표 작업으로 돌아가세요.",
  actions: [
    { label: "대표 작업 보기", href: "/works" },
    { label: "홈으로", href: "/" },
  ],
};
