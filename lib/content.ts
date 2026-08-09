/**
 * 이 파일에는 문구와 단어만 둡니다.
 * 타입은 `lib/schema.dto.ts`, 화면 구조와 스타일은 `components/`에 있습니다.
 * 화면에 보이는 글자를 고치려면 이 파일만 고치면 됩니다.
 */
import type {
  AboutCopy,
  AskCopy,
  AskEntry,
  CaseDetailCopy,
  CaseStudy,
  ContractColumn,
  HomeCopy,
  IdentityFlowCopy,
  LayerDiagramCopy,
  NotFoundCopy,
  ProofCopy,
  ProofGroup,
  ResumeCopy,
  ProofMetric,
  SiteCopy,
  SourceLink,
  UiCopy,
  WorkIndexCopy,
} from "./schema.dto";

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

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    diagram: "identity",
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
    diagram: "platforms",
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
    diagram: "contract",
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
    diagram: "preview",
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
        related: [
          {
            label: "React 컴포넌트 미리보기",
            href: "https://wds.winc.app",
          },
        ],
      },
    ],
  },
];

export const publicProof: ProofGroup[] = [
  {
    group: "오픈소스",
    items: [
      {
        label: "Datadog Flutter SDK · @view.url_query 수정",
        href: "https://github.com/DataDog/dd-sdk-flutter/pull/1069",
        note: "코드 수정, 테스트, 메인테이너 리뷰와 병합",
      },
      {
        label: "kakao_maps_flutter",
        href: "https://github.com/seunghwanly/kakao_maps_flutter",
        note: "Android · iOS · Web 플러그인 · 13개월간 15회 배포",
        related: [
          {
            label: "pub.dev",
            href: "https://pub.dev/packages/kakao_maps_flutter",
          },
        ],
      },
      {
        label: "dio · 예제 코드 개선",
        href: "https://pub.dev/packages/dio",
        note: "Dart · Flutter HTTP Client 패키지 Contributor",
      },
      {
        label: "Flutter 디자인 시스템",
        href: "https://design.winc.app/",
        note: "토큰 · 기반 요소 · 컴포넌트 · Widgetbook",
      },
      {
        label: "자체 모바일 CI/CD",
        href: "https://github.com/seunghwanly/local-flutter-cicd-server",
        note: "FastAPI · Fastlane · build queue · 55 tests",
      },
    ],
  },
  {
    group: "블로그",
    items: [
      {
        label: "AI와 함께 Datadog SDK에 기여하기",
        href: "https://medium.com/@seunghwanly/datadog-flutter-sdk-%EC%98%A4%ED%94%88%EC%86%8C%EC%8A%A4-%EA%B8%B0%EC%97%AC%ED%95%98%EA%B8%B0-ai%EC%99%80-%ED%95%A8%EA%BB%98-2%EC%A3%BC-%EB%A7%8C%EC%97%90-%EA%B3%B5%EC%8B%9D-%EB%B0%B0%ED%8F%AC%EA%B9%8C%EC%A7%80-a5a25b209c47",
        note: "AI 역할, 사람의 통제, 외부 검증 과정",
      },
      {
        label: "Flutter Web 배포기",
        href: "https://medium.com/@seunghwanly/flutter-web-%EB%B0%B0%ED%8F%AC%EA%B8%B0-a2ba8b0212de",
        note: "모바일 제품의 Web 확장과 플랫폼별 결정",
      },
    ],
  },
  {
    group: "공개 미리보기",
    items: [
      {
        label: "WDS 컴포넌트 미리보기",
        href: "https://design.winc.app",
        note: "Flutter · React · Widgetbook · Storybook",
        related: [
          {
            label: "React 미리보기",
            href: "https://wds.winc.app",
          },
        ],
      },
    ],
  },
];

export const askEntries: AskEntry[] = [
  {
    id: "fit",
    question: "제품 엔지니어 역할과 가장 가까운 경험은 무엇인가요?",
    shortLabel: "가장 맞는 경험",
    keywords: ["제품 엔지니어", "모바일", "프론트엔드", "경험", "강점", "fit"],
    answer:
      "가장 가까운 경험은 온라인 계정과 매장 고객을 연결하고 4개 브랜드의 예약 상세를 공용 React 웹으로 옮긴 일입니다. Android·iOS·Web을 지원하는 Flutter 플러그인을 만들고 제품에서 발견한 문제를 공식 SDK까지 추적한 경험도 있습니다.",
    known: [
      "본인인증과 동의를 고객 연결 조건으로 정하고 예약·주문 상태를 설계했습니다.",
      "고객용과 매장용 예약 상세를 공용 웹으로 모았습니다. 앱 연동과 딥링크, WebView를 정리한 뒤 앱 업데이트까지 마쳤습니다.",
      "Kotlin·Swift/SPM·JavaScript 구현을 하나의 Dart API로 연결했습니다.",
      "제품에서 발견한 RUM 문제를 테스트와 외부 리뷰를 거쳐 공식 SDK에 반영했습니다.",
    ],
    boundary:
      "결제 코어의 멱등성, POS 주변기기와 AOSP/HAL은 직접 구현해 본 적이 없습니다.",
    sources: [
      { label: "고객 연결 작업", href: "/works/1" },
      { label: "윙크 Flutter Web 출시", href: "/works/2" },
      {
        label: "Flutter SDK 수정 작업",
        href: "/works/3",
      },
    ],
  },
  {
    id: "payment-gap",
    question: "결제나 POS 경험은 어디까지인가요?",
    shortLabel: "결제·POS 범위",
    keywords: [
      "결제",
      "pos",
      "포스",
      "카드",
      "프린터",
      "멱등",
      "주문",
      "payment",
    ],
    answer:
      "예약·주문·결제 화면의 흐름과 상태를 설계하고 결제 실패 뒤 예약 상태를 조사한 경험은 있습니다. 결제 코어의 멱등성이나 중복 결제 방지 로직, POS 단말·카드리더·영수증 프린터 연동은 직접 맡지 않았습니다.",
    known: [
      "서버가 총 단계·현재 단계·종료 이유를 내려주도록 주문 상태를 설계했습니다.",
      "장바구니와 주문·결제를 복구 방식이 다른 단계로 나눴습니다.",
    ],
    boundary:
      "오프라인 쿠폰 연동 경험은 있지만 제품 전체를 오프라인 우선 구조로 만들어 본 적은 없습니다.",
    sources: [{ label: "고객 연결 작업", href: "/works/1" }],
  },
  {
    id: "ai-practice",
    question: "AI를 실제 개발에 어떻게 사용했나요?",
    shortLabel: "AI 사용 방식",
    keywords: [
      "ai",
      "인공지능",
      "codex",
      "claude",
      "에이전트",
      "agent",
      "자동화",
    ],
    answer:
      "AI로 여러 SDK를 탐색하고 첫 구현안과 테스트·문서 초안을 만들었습니다. 문제 범위와 수정안, 리뷰 대응은 직접 판단했습니다. 쿼리 테스트 5개와 CI 검사 11개, 외부 메인테이너 리뷰를 통과한 결과만 반영했습니다.",
    known: [
      "Datadog Flutter SDK 수정안이 12일 만에 공식 저장소에 병합됐습니다.",
      "AI와 함께 작성한 공개 커밋에는 공동 작성 정보를 남겼습니다.",
    ],
    boundary:
      "AI가 개발 시간을 얼마나 줄였는지는 측정하지 않았습니다. AI 플랫폼과 RAG, 모델 서빙을 운영한 경험도 없습니다.",
    sources: [
      { label: "Flutter SDK 수정 작업", href: "/works/3" },
      {
        label: "Datadog PR #1069",
        href: "https://github.com/DataDog/dd-sdk-flutter/pull/1069",
      },
    ],
  },
  {
    id: "capture-learning",
    question: "Coding agent 실험에서 실패한 것은 무엇인가요?",
    shortLabel: "Agent 실험의 실패",
    keywords: [
      "capture",
      "캡처",
      "playwright",
      "실패",
      "학습",
      "review",
      "리뷰",
    ],
    answer:
      "작업이 끝난 뒤 화면을 자동 캡처하는 실험은 전체 실행 시간을 늘렸습니다. 로그인 상태가 필요한 화면은 원하는 장면을 재현하기도 어려웠습니다. 지금은 리뷰에 화면이 꼭 필요한 작업에서만 선택해 사용합니다.",
    known: [
      "에이전트가 작업을 끝낸 것과 사람이 결과를 확인할 수 있는 것은 다른 문제였습니다.",
      "자동화 여부보다 리뷰할 수 있는 화면의 범위와 실패 비용을 먼저 확인했습니다.",
    ],
    boundary:
      "리뷰 시간과 생산성 개선 수치는 측정하지 않았습니다. 내부 시스템 이름과 URL은 공개하지 않습니다.",
    sources: [{ label: "에이전트 운영 경험", href: "/about" }],
  },
  {
    id: "platform",
    question: "Native와 Web의 차이를 어떻게 다뤘나요?",
    shortLabel: "Native · Web 연동",
    keywords: [
      "native",
      "네이티브",
      "web",
      "웹",
      "android",
      "ios",
      "kotlin",
      "swift",
      "bridge",
      "sdk",
      "딥링크",
      "웹뷰",
      "예약",
      "공용",
    ],
    answer:
      "동작하지 않던 Vue2 웹을 Flutter 앱 코드베이스로 대체하면서 Platform stub pattern으로 플랫폼별 의존성을 빌드 단계에서 분리했습니다. 공개 작업에서는 kakao_maps_flutter의 Dart API 아래 Kotlin·Swift/SPM·JavaScript 구현을 나누어 Android·iOS·Web의 차이를 관리했습니다.",
    known: [
      "Vue2 웹을 유지보수하는 대신 앱 자산을 Web으로 확장하기로 빠르게 판단해 목표 기한보다 한 달 앞서 배포했습니다.",
      "Android·iOS·Web을 지원하는 공개 Flutter plugin을 13개월간 운영했습니다.",
      "버전 15개를 pub.dev에 배포했습니다.",
      "고객 화면과 매장 운영 화면이 같은 상세 내용을 보도록 맞췄습니다. 통합 화면을 운영에 반영하고 윙크 앱 업데이트까지 완료했습니다.",
    ],
    boundary:
      "Swift Concurrency·Combine·XCTest와 Android Framework/HAL 경험은 많지 않거나 없습니다.",
    sources: [
      { label: "윙크 Flutter Web 출시", href: "/works/2" },
      {
        label: "kakao_maps_flutter",
        href: "https://github.com/seunghwanly/kakao_maps_flutter",
      },
    ],
  },
  {
    id: "design-system",
    question: "디자인 시스템에서 직접 한 일은 무엇인가요?",
    shortLabel: "디자인 시스템 기여",
    keywords: [
      "디자인",
      "design",
      "wds",
      "widgetbook",
      "storybook",
      "qa",
      "컴포넌트",
      "component",
    ],
    answer:
      "Flutter WDS를 토큰, 기반 요소, 컴포넌트, Widgetbook으로 나누고 컴포넌트를 개발했습니다. PR마다 실행 가능한 미리보기를 공유해 디자인 검수에 사용했습니다. 공개 저장소에 작성한 PR 48개는 모두 병합됐습니다.",
    known: [
      "작업, 미리보기, 디자인 확인, 배포가 이어지는 협업 방식을 운영했습니다.",
      "Flutter Widgetbook과 React Storybook을 공개하고 있습니다.",
    ],
    boundary:
      "개발 시간 단축률과 코드 감소율은 측정하지 않았습니다. 자동 화면 회귀 테스트는 아직 보완할 과제입니다.",
    sources: [
      { label: "디자인 시스템 작업", href: "/works/4" },
      {
        label: "Flutter WDS",
        href: "https://design.winc.app/",
      },
    ],
  },
  {
    id: "measurement",
    question: "성과와 안정성 수치는 어떻게 검증했나요?",
    shortLabel: "수치 검증 방식",
    keywords: [
      "수치",
      "검증",
      "metric",
      "crash",
      "안정성",
      "세션",
      "측정",
      "근거",
    ],
    answer:
      "성과 수치에는 기간과 분모, 측정 환경을 함께 적습니다. 예를 들어 crash-free는 출시 첫 달의 앱 sessions, 장바구니 views, 웹 sessions를 나눠 기록했습니다.",
    known: [
      "공개한 숫자는 확인할 수 있는 PR과 배포 기록, 저장소로 연결합니다.",
      "서로 충돌하거나 원인을 설명할 수 없는 수치는 사용하지 않았습니다.",
    ],
    boundary:
      "PR과 커밋, 대시보드 개수만으로 제품 성과나 개인 생산성을 설명하지 않습니다.",
    sources: [
      { label: "공개 기록", href: "/proof" },
      { label: "고객 연결 작업", href: "/works/1" },
    ],
  },
  {
    id: "ai-gap",
    question: "RAG·MCP Gateway·모델 서빙 경험이 있나요?",
    shortLabel: "AI 플랫폼 경험",
    keywords: [
      "rag",
      "mcp",
      "gateway",
      "model",
      "모델",
      "서빙",
      "llm",
      "langfuse",
      "평가",
    ],
    answer:
      "프로덕션 RAG, MCP Gateway, Model Router와 vLLM/Triton 모델 서빙을 직접 운영해 본 적은 없습니다. AI는 소프트웨어 개발 과정에서 코드를 탐색하고 초안을 만드는 도구로 사용했습니다.",
    known: [
      "공개 SDK 작업에서 AI가 맡은 일과 직접 판단한 일을 나누고 테스트와 리뷰를 거쳤습니다.",
      "코딩 에이전트 실험에서는 화면 캡처 범위와 로그인 상태의 한계를 확인했습니다.",
    ],
    boundary: "관심 있는 기술을 이미 해본 일처럼 소개하지 않습니다.",
    sources: [{ label: "Flutter SDK 수정 작업", href: "/works/3" }],
  },
];

/* ================================================================== *
 * 사이트 공통 — 메타데이터, 헤더, 푸터
 * ================================================================== */

export const site: SiteCopy = {
  name: "이승환",
  role: "Product Engineer",
  email: "seunghwanly@gmail.com",
  resumeHref: "/resume",
  skipToContent: "본문으로 건너뛰기",
  metadata: {
    defaultTitle: "이승환 — Product Engineer · Mobile & Web",
    titleTemplate: "%s · 이승환",
    description:
      "Flutter 앱과 React 웹을 만들고 Kotlin·Swift 연동부터 빌드·배포 자동화와 운영 중 오류 추적까지 맡아 온 Product Engineer 이승환의 포트폴리오입니다.",
    applicationName: "Seunghwan Lee Portfolio",
    keywords: [
      "Product Engineer",
      "Mobile",
      "Frontend",
      "Flutter",
      "React",
      "TypeScript",
      "Kotlin",
      "Swift",
      "Client Platform",
      "Observability",
    ],
    shareTitle: "이승환 — Product Engineer · Mobile & Web",
    shareDescription:
      "모바일과 웹을 오가며 제품을 만들고 운영한 이승환의 대표 작업.",
    ogImageAlt: "Seunghwan Lee · Product Engineer · Mobile · Web",
  },
  header: {
    homeAriaLabel: "이승환 포트폴리오 홈",
    brandName: "이승환",
    brandTrace: "Product Engineer",
    navAriaLabel: "주요 메뉴",
    mobileNavAriaLabel: "모바일 주요 메뉴",
    menuLabel: "메뉴",
    menuAriaLabel: "메뉴 열기",
    resumeLabel: "이력서",
  },
  footer: {
    title: "이승환 · Product Engineer",
    description:
      "Flutter로 모바일 개발을 시작해 React까지 확장해 운영하고 있습니다.",
    linksAriaLabel: "외부 프로필",
    extraLinks: [{ label: "질문 찾기", href: "/ask" }],
    emailLabel: "Email",
  },
  person: {
    name: "이승환",
    alternateName: "Seunghwan Lee",
    jobTitle: "Product Engineer — Mobile & Web",
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
  nav: [
    { label: "작업", href: "/works" },
    { label: "소개", href: "/about" },
    { label: "모아보기", href: "/proof" },
  ],
};

/* ================================================================== *
 * 여러 화면이 함께 쓰는 문구
 * ================================================================== */

export const ui: UiCopy = {
  tagListAriaLabel: "관련 기술과 주제",
  proofStrip: {
    counterLabel: "기록",
    opensNewTab: "관련 기록 새 창에서 열기",
  },
  caseRow: {
    linkLabel: "확인하기",
    linkAriaSuffix: "확인하기",
  },
  sourceList: {
    defaultTitle: "확인 자료",
    privateTitle: "측정 기준",
    privateBody:
      "공개해도 되는 집계만 사용했습니다. 운영 화면과 고객 데이터, 내부 링크는 포함하지 않았습니다.",
  },
  boundaryNote: {
    label: "범위와 한계",
  },
};

/* ================================================================== *
 * 개념도
 * ================================================================== */

export const layerDiagram: LayerDiagramCopy = {
  caption: "앱과 웹에서 맡아 온 영역",
  count: "5개 영역",
  layers: [
    { label: "웹", detail: "React / TypeScript · Flutter Web" },
    { label: "크로스 플랫폼", detail: "Flutter · React Native" },
    { label: "네이티브 연동", detail: "Platform Channel · WebView" },
    { label: "네이티브", detail: "Kotlin · Swift" },
    {
      label: "배포·운영",
      detail: "빌드·배포 자동화 · 사용 흐름 확인 · 오류 추적",
    },
  ],
  noteLabel: "처음부터 운영까지",
  note: "화면 구현부터 네이티브 연동, 배포와 운영 중 오류 확인까지",
};

export const identityFlow: IdentityFlowCopy = {
  caption: "통합 고객 식별 흐름",
  before: {
    step: "01 · 연결 전",
    listAriaLabel: "연결 전 고객 정보",
    sources: [
      { label: "온라인 계정", detail: "앱 회원 정보" },
      { label: "매장 고객", detail: "매장 방문·거래 정보" },
    ],
  },
  gate: {
    step: "02 · 연결 기준",
    title: "본인인증과 동의",
    detail: "동일 고객임을 확인",
  },
  result: {
    step: "03 · 연결 결과",
    title: "199,000+명",
    machineValue: "199000",
    detail: "통합 고객으로 식별",
  },
  after: {
    step: "04 · 연결 후",
    description: "매장에서 한 고객 정보로 확인",
    listAriaLabel: "연결 후 제공한 기능",
    features: ["고객 필터·알림", "QR", "주문 이력"],
  },
  note: {
    ariaLabel: "운영 중 확인한 공백",
    title: "운영 중 확인한 공백 · 레거시 약 20만 계정",
    body: "통합 고객 식별에서 빠진 계정군을 발견해 조치했습니다.",
    disclaimer: "개념도이며 실제 고객 분포와 무관합니다.",
  },
};

export const humanAiContract: ContractColumn[] = [
  {
    label: "AI가 도운 일",
    items: ["수정할 SDK 코드 탐색", "첫 수정안 작성", "테스트·문서 초안"],
  },
  {
    label: "제가 맡은 판단",
    items: ["문제 원인과 수정 범위", "외부 리뷰 대응", "제품 적용과 결과 확인"],
  },
  {
    label: "확인한 결과",
    items: [
      "쿼리 테스트 5개",
      "CI 검사 11개",
      "메인테이너 리뷰",
      "iOS·Android 데이터 수집",
    ],
  },
];

/* ================================================================== *
 * 홈 (/)
 * ================================================================== */

export const home: HomeCopy = {
  meta: {
    title: "Product Engineer · Mobile & Web",
    description:
      "Flutter 앱과 React 웹을 만들고 제품 API와 Kotlin·Swift 연동부터 빌드·배포 자동화와 운영 중 오류 추적까지 맡아 온 Product Engineer 이승환의 대표 작업.",
  },
  hero: {
    eyebrow: "Product Engineer ⋅ Mobile & Web",
    titleLead: "모바일과 웹을 오가며",
    titleAccent: "제품을 만들고 운영했습니다.",
    lede: "사용자 관점에서 고민하며 지속 가능한 서비스를 만듭니다. Flutter로 모바일을 시작해 비즈니스 요구에 맞춰 React 웹까지 넓혔고 필요하면 Kotlin·Swift 연동과 배포 자동화까지 다룹니다. 오버엔지니어링을 지양하고 유지보수할 수 있는 선에서 본질적인 문제에 집중합니다. AI는 탐색과 초안에 활용하고 결과는 테스트와 리뷰로 확인합니다.",
    actions: [
      { label: "대표 작업 보기", href: "/works" },
      { label: "이력서 보기", href: "/resume" },
    ],
  },
  proof: {
    eyebrow: "작업 기록",
    title: "직접 확인할 수 있는 기록",
    link: { label: "확인하기", href: "/proof" },
  },
  work: {
    title: "대표 작업",
    aside: "맡은 일 · 선택한 방법 · 결과",
  },
  cta: {
    eyebrow: "이력서와 연락처",
    title: "더 자세한 경력은 이력서에서 확인할 수 있습니다.",
    actions: [
      { label: "이력서 보기", href: "/resume" },
      { label: "이메일 보내기", href: "mailto:seunghwanly@gmail.com" },
    ],
  },
};

/* ================================================================== *
 * 대표 작업 목록 (/works)
 * ================================================================== */

export const workIndex: WorkIndexCopy = {
  meta: {
    title: "대표 작업",
    description:
      "유저 연동, 크로스 플랫폼 SDK, 운영 안정성과 디자인 시스템에서 직접 맡은 일과 결과를 정리한 이승환의 대표 작업.",
  },
  intro: {
    title: "빠르게⋅안정적으로 배포하고, 업무는 효율적⋅생산적으로",
    description:
      "디자인 시스템으로 구현⋅검수 비용을 줄이고 Android·iOS·Web 모든 플랫폼에서 같은 사용성을 제공할 수 있도록 고민했습니다.",
  },
  listAriaLabel: "대표 사례 목록",
};

/* ================================================================== *
 * 작업 상세 (/works/[id])
 * ================================================================== */

export const caseDetail: CaseDetailCopy = {
  fallbackTitle: "대표 작업",
  backLabel: "대표 작업",
  indexPrefix: "작업",
  roleLabel: "직접 맡은 일",
  tocAriaLabel: "사례 구조",
  tocTitle: "내용",
  boundary: {
    navLabel: "남은 과제",
    label: "마지막으로",
    title: "남은 과제와 범위",
  },
  pagination: {
    ariaLabel: "다른 사례",
    previous: "이전 작업",
    next: "다음 작업",
  },
  contractDiagram: {
    caption: "사람과 AI의 역할 분담",
  },
  sdkDiagram: {
    caption: "하나의 코드베이스로 세 플랫폼 운영",
    contract: "상품 · 예약 · 결제 로직",
    platforms: [
      { label: "Android", detail: "기존 Flutter 앱" },
      { label: "iOS", detail: "기존 Flutter 앱" },
      { label: "Web", detail: "Vue2 웹 대체 · 11월 말 배포" },
    ],
    description:
      "상품, 예약, 결제의 비즈니스 로직을 Android와 iOS 앱에서 공유하고 같은 Flutter 코드베이스를 Web까지 확장해 동작하지 않던 Vue2 웹을 대체한 구조입니다.",
  },
  previewDiagram: {
    caption: "디자인 → 구현 → 검수",
    steps: [
      { label: "컴포넌트", detail: "tokens · state · interaction" },
      { label: "실행 화면", detail: "Widgetbook · Storybook" },
      { label: "디자인 검수", detail: "같은 화면에서 확인" },
      { label: "배포", detail: "버전이 붙은 패키지" },
    ],
  },
};

/* ================================================================== *
 * 소개와 경력 (/about)
 * ================================================================== */

export const about: AboutCopy = {
  meta: {
    title: "소개와 경력",
    description:
      "Product Engineer 이승환의 경력, 핵심 역량, 일하는 원칙과 연락처. Mobile & Frontend · Client Platform.",
  },
  intro: {
    title: "모바일에서 시작해 웹과 서버까지 역할을 넓혀 왔습니다.",
    description:
      "사용자 관점에서 고민하며 오래 운영할 수 있는 제품을 만듭니다. 클린아키텍처로 바꾸기 쉬운 구조를 잡고 700+ 테스트 코드로 안정적인 운영을 뒷받침했으며 기능 구현에서 멈추지 않고 일관된 UI와 터치 영역까지 맞춰 왔습니다. 최근에는 AI를 배포 자동화와 SDK 기여, 문서화에 활용하되 문제 범위와 수정 판단은 직접 내리고 오버엔지니어링을 지양해 본질적인 문제에 집중합니다. 전체를 갈아엎기보다 점진적으로 전환해 서비스를 멈추지 않는 쪽을 택해 왔습니다.",
  },
  actions: {
    ariaLabel: "이력서와 연락",
    resumeLabel: "이력서 보기",
    emailLabel: "이메일 보내기",
  },
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
            emphasis: "199,000+명",
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
            emphasis: "메모리 50% 절감",
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
  skills: {
    eyebrow: "기술",
    title: "주로 사용하는 기술",
    listAriaLabel: "주로 사용하는 기술",
    items: [
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
  },
  education: {
    eyebrow: "학력",
    title: "동국대학교 컴퓨터공학과",
    detail: "학사 · 2016.02–2022.02 · GPA 3.85 / 4.5",
  },
  teaching: {
    eyebrow: "강의",
    title: "강의 및 멘토링",
    items: [
      { label: "Goorm", detail: "Dart 64강 · Flutter e-commerce 34강" },
      { label: "Comento", detail: "Flutter 실무 PT 강사" },
    ],
  },
};

/* ================================================================== *
 * 질문 찾기 (/ask)
 * ================================================================== */

export const ask: AskCopy = {
  meta: {
    title: "질문 찾기",
    description:
      "이승환의 경력과 대표 작업에서 자주 묻는 질문을 찾아볼 수 있습니다.",
  },
  intro: {
    title: "경력과 작업에서 궁금한 내용을 찾아보세요.",
    description:
      "미리 정리한 질문에서 답을 찾습니다. 검색어는 저장하거나 서버로 보내지 않습니다.",
  },
  console: {
    title: "질문 찾기",
    mode: "공개한 답변만 검색합니다.",
    searchLabel: "질문 검색",
    searchPlaceholder: "예: 결제 경험",
    suggestionsAriaLabel: "추천 질문",
    featuredIds: ["fit", "platform", "design-system", "ai-practice"],
    answerLabel: "답변",
    knownLabel: "관련 경험",
    boundaryLabel: "경험 범위",
    sourcesAriaLabel: "관련 페이지와 공개 기록",
    empty: {
      label: "검색 결과",
      title: "관련 내용을 찾지 못했습니다.",
      body: "다른 단어로 검색하거나 이메일로 직접 물어보세요.",
      linkLabel: "직접 질문하기",
    },
  },
};

/* ================================================================== *
 * 이력서 (/resume)
 * ------------------------------------------------------------------ *
 * 경력·프로젝트·기술·학력·강의는 about 에서, 공개 기록은 publicProof 에서
 * 그대로 읽습니다. 여기에는 이력서에만 필요한 문구만 둡니다.
 * ================================================================== */

export const resume: ResumeCopy = {
  meta: {
    title: "이력서",
    description:
      "Product Engineer 이승환의 이력서. 경력과 정량 성과, 공개 기록, 학력과 강의를 한 장에 정리했습니다.",
  },
  headline: "Product Engineer · Mobile & Web",
  updatedAt: "2026년 8월 10일 기준",
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
};

/* ================================================================== *
 * 작업 기록 (/proof)
 * ================================================================== */

export const proof: ProofCopy = {
  meta: {
    title: "작업 기록",
    description:
      "이승환의 GitHub 기여, 패키지 배포, 저장소, 컴포넌트 미리보기와 블로그 글을 한곳에서 확인합니다.",
  },
  intro: {
    title: "기여한 모든 것",
    description:
      "GitHub PR, 라이브러리, public repository와 컴포넌트 미리보기를 한 곳에 모았습니다.",
    meta: "2026년 8월 10일 기준",
  },
  listAriaLabel: "작업 기록 목록",
};

/* ================================================================== *
 * 404
 * ================================================================== */

export const notFound: NotFoundCopy = {
  eyebrow: "404",
  title: "페이지를 찾을 수 없습니다.",
  description: "주소를 확인하거나 대표 작업으로 돌아가세요.",
  actions: [
    { label: "대표 작업 보기", href: "/works" },
    { label: "홈으로", href: "/" },
  ],
};
