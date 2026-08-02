export type SourceLink = {
  label: string;
  href: string;
  note?: string;
  related?: Array<{
    label: string;
    href: string;
  }>;
};

export type CaseSection = {
  id: string;
  label: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type CaseMetric = {
  value: string;
  label: string;
  context: string;
};

export type CaseStudy = {
  slug: string;
  index: string;
  category: string;
  title: string;
  summary: string;
  role: string;
  tags: string[];
  metrics: CaseMetric[];
  sections: CaseSection[];
  limitation: string;
  sources: SourceLink[];
};

export const profileLinks: SourceLink[] = [
  { label: "GitHub", href: "https://github.com/seunghwanly" },
  { label: "Medium", href: "https://medium.com/@seunghwanly" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/seunghwanly",
  },
];

export const proofMetrics = [
  {
    value: "12일",
    label: "Flutter SDK 수정",
    detail: "제안부터 공식 저장소 병합까지",
    href: "https://github.com/DataDog/dd-sdk-flutter/pull/1069",
  },
  {
    value: "15회",
    label: "멀티플랫폼 플러그인 배포",
    detail: "13개월간 Android·iOS·Web 지원",
    href: "https://pub.dev/packages/kakao_maps_flutter",
  },
  {
    value: "48개",
    label: "디자인 시스템 PR",
    detail: "작성한 공개 PR 모두 병합",
    href: "https://github.com/ppbstudios/wds_flutter/pulls?q=is%3Apr+author%3Aseunghwanly",
  },
  {
    value: "55개",
    label: "FastAPI 빌드 서버 테스트",
    detail: "Webhook·빌드 큐·작업 공간 격리 확인",
    href: "https://github.com/seunghwanly/local-flutter-cicd-server",
  },
] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "connected-commerce",
    index: "01",
    category: "통합멤버십 · O2O",
    title: "온라인과 오프라인 매장 고객을 하나로",
    summary:
      "본인인증 기반으로 온라인 고객과 오프라인 매장 고객 188,886명을 연결했습니다. 예약 상태 API를 직접 설계·구현하고 4개 브랜드의 예약 상세를 공용 React 웹으로 통합했습니다.",
    role: "고객 연결 조건 · 예약 상태 API · 공용 예약 상세 · 앱·웹 연동 · 배포",
    tags: ["O2O", "본인인증", "공용 예약 상세", "App · Web 연동"],
    metrics: [
      {
        value: "188,886",
        label: "연결 완료 사용자",
        context: "2026-03-11 출시 후 2026-08-02까지 누적",
      },
      {
        value: "4개",
        label: "브랜드 앱·웹",
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
        title: "온라인 계정과 매장 고객 정보가 따로 관리되고 있었습니다.",
        paragraphs: [
          "브랜드별 온라인 계정과 매장 고객 정보가 분리돼 같은 사람인지 확인하기 어려웠습니다. 매장 직원도 본인인증을 마친 고객 정보와 지난 주문을 한 화면에서 볼 수 없었습니다.",
          "예약 상세는 앱과 웹, 고객용과 매장용으로 나뉘어 있었습니다. 정책이 바뀔 때마다 여러 화면의 상태와 동작을 함께 고쳐야 했습니다.",
        ],
      },
      {
        id: "changes",
        label: "바꾼 것",
        title: "본인인증으로 고객을 연결하고 예약 화면을 하나로 모았습니다.",
        bullets: [
          "본인인증과 동의를 온라인·오프라인 고객의 연결 조건으로 정했습니다.",
          "총 단계·현재 단계·종료 이유를 내려주는 API 응답 구조를 직접 설계·구현해 앱과 웹이 같은 기준으로 화면을 결정하도록 했습니다.",
          "4개 브랜드의 예약 상세를 공용 React 웹으로 옮기고 고객용과 매장용 화면을 함께 운영했습니다.",
          "앱 연동, 딥링크, WebView와 주문 실패·레거시 계정 예외를 처리한 뒤 배포했습니다.",
        ],
      },
      {
        id: "result",
        label: "확인한 결과",
        title: "고객 188,886명을 연결하고 공용 예약 화면을 운영에 반영했습니다.",
        paragraphs: [
          "출시 첫 달 앱 242,694 sessions의 crash-free는 99.84%, 장바구니 354,758 views는 99.92%, 웹 4,014 sessions는 100%였습니다. 이 기간에 예약·주문·결제를 막는 incident와 flow revert는 없었습니다.",
          "배포 당일에는 연결에서 빠진 레거시 약 20만 계정을 찾아 우선 조치했습니다. 2026년 7월에는 공용 예약 화면을 운영에 반영하고 Winc 앱 업데이트까지 마쳤습니다.",
        ],
      },
    ],
    limitation:
      "공용 예약 화면으로 바꾼 뒤 로딩 시간과 작업 시간 감소율은 측정하지 않았습니다. 결제 코어와 POS 주변기기는 이 작업의 범위가 아닙니다.",
    sources: [],
  },
  {
    slug: "multiplatform-sdk",
    index: "02",
    category: "제품 출시 · Flutter Web",
    title: "캠페인 직전, 윙크 웹을 Flutter Web으로 다시 열었습니다.",
    summary:
      "앱과 다르게 동작하던 기존 웹 대신 Flutter 앱 코드베이스를 Web까지 확장했습니다. 2025년 11월 26일 운영에 배포했고, 이틀 뒤 블랙프라이데이부터 12월 캣티튜드 출시까지 웹 예약·구매 경로로 사용했습니다.",
    role: "웹 확장 설계 · 공통 라우팅 · 플랫폼별 초기화 · 웹 사용성 · 배포",
    tags: ["Flutter Web", "go_router", "Web API", "제품 출시"],
    metrics: [
      {
        value: "3개",
        label: "함께 운영한 플랫폼",
        context: "Android · iOS · Web이 비즈니스 로직 공유",
      },
      {
        value: "11월 26일",
        label: "운영 배포",
        context: "2025년 · 블랙프라이데이 이틀 전 출시",
      },
      {
        value: "1.4초",
        label: "첫 화면 표시",
        context: "당시 프로덕션 웹 FCP 기준",
      },
    ],
    sections: [
      {
        id: "situation",
        label: "상황",
        title: "기존 웹에서는 캠페인 유입을 예약과 구매로 잇기 어려웠습니다.",
        paragraphs: [
          "기존 웹은 앱과 별도로 운영돼 예약 기능이 빠져 있었고, 매장 변경 뒤 장바구니 검증과 결제수단 표시도 앱과 다르게 동작했습니다. 프로모션으로 들어온 고객을 앱 설치로 돌려보내면 신규 고객이 이탈할 수 있는 상황이었습니다.",
          "블랙프라이데이와 캣티튜드 출시가 이어지는 시점이라, 새 웹을 오래 만드는 것보다 이미 검증된 Flutter 앱의 상품·예약·결제 흐름을 웹까지 확장하는 편이 빠르다고 판단했습니다.",
        ],
      },
      {
        id: "changes",
        label: "바꾼 것",
        title: "기존 Flutter 앱에 Web을 더하고, 웹에서 필요한 동작은 따로 풀었습니다.",
        bullets: [
          "Android·iOS 앱에 Web 진입점을 추가하고 상품·예약·결제의 비즈니스 로직을 함께 쓰도록 정리했습니다.",
          "앱과 웹의 이동 규칙을 공통 라우터와 하나의 target_url로 합치고, 기존 딥링크와 광고 URL도 계속 열리게 했습니다.",
          "모바일 전용 패키지가 웹 실행을 막지 않도록 초기화 순서와 조건부 import를 플랫폼별로 분리했습니다.",
          "반응형 화면과 마우스 스크롤, 중첩 스크롤, 예약·결제 뒤의 브라우저 뒤로 가기를 웹 환경에 맞게 다듬었습니다.",
        ],
      },
      {
        id: "result",
        label: "확인한 결과",
        title: "캣티튜드 출시 전에 캠페인 유입을 받을 웹 경로를 열었습니다.",
        paragraphs: [
          "11월 26일 shop.winc.app에 배포하고 이틀 뒤 블랙프라이데이 화면까지 반영했습니다. 12월에는 캣티튜드 출시 페이지와 품절 뒤 재입고 알림 페이지를 같은 웹에서 운영했습니다.",
          "캣티튜드 캠페인은 앱 푸시와 카카오 메시지에서 이 페이지로 고객을 보냈습니다. 주력 컬러와 디즈니 마리 굿즈는 출시 직후 품절됐고 재입고 문의가 이어졌습니다. 앱을 설치하지 않은 고객도 상품을 보고 예약·구매로 넘어갈 수 있는 경로를 출시 전에 마련했습니다.",
        ],
      },
    ],
    limitation:
      "캣티튜드의 성과에는 제품 자체와 프로모션, 오프라인 수요가 함께 작용했습니다. Flutter Web이 만든 매출만 따로 측정하지는 않았습니다. 빠른 출시에 효과적이었지만 DOM 기반 관측에는 한계가 있어 이후 React Native Web을 거쳐 React로 옮겼습니다.",
    sources: [
      {
        label: "Flutter Web 배포기",
        href: "https://medium.com/@seunghwanly/flutter-web-%EB%B0%B0%ED%8F%AC%EA%B8%B0-a2ba8b0212de",
      },
      {
        label: "Winc 웹",
        href: "https://shop.winc.app",
      },
    ],
  },
  {
    slug: "observable-reliability",
    index: "03",
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
        title: "모바일 화면 URL에서 쿼리 정보가 빠지고 있었습니다.",
        paragraphs: [
          "Datadog의 실제 사용자 모니터링(RUM)에서 서로 다른 유입이 같은 화면으로 집계됐습니다. 제품 코드에서 우회하면 빠르게 고칠 수 있지만 SDK를 올릴 때마다 같은 패치를 유지해야 했습니다.",
        ],
      },
      {
        id: "changes",
        label: "바꾼 것",
        title: "Flutter SDK에서 원인을 찾아 공식 저장소에 수정안을 보냈습니다.",
        bullets: [
          "Flutter부터 네이티브 SDK까지 쿼리가 사라지는 위치를 재현했습니다.",
          "화면 URL과 쿼리 속성을 전달하고 기존 경로가 깨지지 않는지 테스트했습니다.",
          "외부 메인테이너 리뷰를 반영해 수정 범위를 줄였습니다.",
          "AI로 관련 SDK를 탐색하고 첫 구현안과 테스트·문서 초안을 만들었습니다. 문제 범위와 수정안, 리뷰 대응은 직접 판단했습니다.",
        ],
      },
      {
        id: "result",
        label: "확인한 결과",
        title: "12일 만에 병합됐고 다음 날 공식 버전으로 배포됐습니다.",
        paragraphs: [
          "코드 2개 파일과 쿼리 테스트 5개, CI 검사 11개를 거쳐 수정안이 공식 저장소에 병합됐습니다. 제품에 새 버전을 적용한 뒤 iOS와 Android에서 쿼리가 수집되는 것도 확인했습니다.",
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
    slug: "design-to-preview",
    index: "04",
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
        title: "디자인과 실제 화면의 차이를 배포 직전에 발견하곤 했습니다.",
        paragraphs: [
          "디자이너와 개발자가 서로 다른 화면을 보면 상태, 간격, 터치 동작의 차이가 배포 직전까지 남았습니다. 문서와 캡처만으로는 실제 동작을 함께 확인하기 어려웠습니다.",
        ],
      },
      {
        id: "changes",
        label: "바꾼 것",
        title: "PR마다 실행 가능한 컴포넌트 미리보기를 공유했습니다.",
        bullets: [
          "Melos 모노레포를 토큰, 기반 요소, 컴포넌트, 미리보기로 나눴습니다.",
          "Flutter는 Widgetbook, React는 Storybook으로 같은 디자인 시스템을 확인하게 했습니다.",
          "반응형 상태와 주요 사용 예시를 만들고 PR마다 미리보기를 배포했습니다.",
          "디자인 확인이 끝난 컴포넌트만 배포 절차로 넘겼습니다.",
        ],
      },
      {
        id: "result",
        label: "확인한 결과",
        title: "작성한 공개 PR 48개가 모두 병합됐습니다.",
        paragraphs: [
          "Flutter WDS 공개 저장소에서 작성한 PR 48개를 확인할 수 있습니다. Flutter Widgetbook과 React Storybook도 공개 링크로 열어 볼 수 있습니다.",
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

export const publicProof: {
  group: string;
  items: SourceLink[];
}[] = [
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
        label: "Flutter 디자인 시스템",
        href: "https://github.com/ppbstudios/wds_flutter",
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

export type AskEntry = {
  id: string;
  question: string;
  shortLabel: string;
  keywords: string[];
  answer: string;
  known: string[];
  boundary: string;
  sources: SourceLink[];
};

export const askEntries: AskEntry[] = [
  {
    id: "fit",
    question: "제품 엔지니어 역할과 가장 가까운 경험은 무엇인가요?",
    shortLabel: "가장 맞는 경험",
    keywords: [
      "제품 엔지니어",
      "모바일",
      "프론트엔드",
      "경험",
      "강점",
      "fit",
    ],
    answer:
      "가장 가까운 경험은 온라인 계정과 매장 고객을 연결하고, 4개 브랜드의 예약 상세를 공용 React 웹으로 옮긴 일입니다. Android·iOS·Web을 지원하는 Flutter 플러그인을 만든 경험과 제품에서 발견한 문제를 공식 SDK까지 추적한 경험도 있습니다.",
    known: [
      "본인인증과 동의를 고객 연결 조건으로 정하고 예약·주문 상태를 설계했습니다.",
      "고객용과 매장용 예약 상세를 공용 웹으로 모았습니다. 앱 연동과 딥링크, WebView를 정리한 뒤 앱 업데이트까지 마쳤습니다.",
      "Kotlin·Swift/SPM·JavaScript 구현을 하나의 Dart API로 연결했습니다.",
      "제품에서 발견한 RUM 문제를 테스트와 외부 리뷰를 거쳐 공식 SDK에 반영했습니다.",
    ],
    boundary:
      "결제 코어의 멱등성, POS 주변기기와 AOSP/HAL은 직접 구현한 경험이 없습니다.",
    sources: [
      { label: "고객 연결 작업", href: "/work/connected-commerce" },
      { label: "Winc Flutter Web 출시", href: "/work/multiplatform-sdk" },
      {
        label: "Flutter SDK 수정 작업",
        href: "/work/observable-reliability",
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
      "예약·주문·결제 화면의 흐름과 상태를 설계하고, 결제 실패 뒤 예약 상태를 조사한 경험은 있습니다. 결제 코어의 멱등성이나 중복 결제 방지 로직, POS 단말·카드리더·영수증 프린터 연동은 직접 맡지 않았습니다.",
    known: [
      "서버가 총 단계·현재 단계·종료 이유를 내려주도록 주문 상태를 설계했습니다.",
      "장바구니와 주문·결제를 복구 방식이 다른 단계로 나눴습니다.",
    ],
    boundary:
      "오프라인 쿠폰 연동 경험은 있지만 제품 전체를 오프라인 우선 구조로 만든 경험은 아닙니다.",
    sources: [{ label: "고객 연결 작업", href: "/work/connected-commerce" }],
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
      {
        label: "AI 활용 사례",
        href: "/ai-practice",
      },
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
    sources: [{ label: "AI 활용 사례", href: "/ai-practice" }],
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
      "Winc 앱의 상품·예약·결제 로직을 Flutter Web까지 확장하고 앱과 웹의 이동 규칙을 공통 라우터와 target_url로 합쳤습니다. 공개 작업에서는 kakao_maps_flutter의 Dart API 아래 Kotlin·Swift/SPM·JavaScript 구현을 나누어 Android·iOS·Web의 차이를 관리했습니다.",
    known: [
      "Flutter 앱 코드베이스를 Web까지 확장해 블랙프라이데이와 캣티튜드 출시 전에 운영에 배포했습니다.",
      "Android·iOS·Web을 지원하는 공개 Flutter plugin을 13개월간 운영했습니다.",
      "15개 버전을 pub.dev에 배포했습니다.",
      "고객 화면과 매장 운영 화면이 같은 상세 내용을 보도록 맞췄습니다. 통합 화면을 운영에 반영하고 Winc 앱 업데이트까지 완료했습니다.",
    ],
    boundary:
      "Swift Concurrency·Combine·XCTest와 Android Framework/HAL 경험은 많지 않거나 없습니다.",
    sources: [
      { label: "Winc Flutter Web 출시", href: "/work/multiplatform-sdk" },
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
      { label: "디자인 시스템 작업", href: "/work/design-to-preview" },
      {
        label: "Flutter WDS",
        href: "https://github.com/ppbstudios/wds_flutter",
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
      { label: "고객 연결 작업", href: "/work/connected-commerce" },
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
      "프로덕션 RAG, MCP Gateway, Model Router와 vLLM/Triton 모델 서빙을 직접 운영한 경험은 없습니다. AI는 소프트웨어 개발 과정에서 코드를 탐색하고 초안을 만드는 도구로 사용했습니다.",
    known: [
      "공개 SDK 작업에서 AI가 맡은 일과 직접 판단한 일을 나누고 테스트와 리뷰를 거쳤습니다.",
      "코딩 에이전트 실험에서는 화면 캡처 범위와 로그인 상태의 한계를 확인했습니다.",
    ],
    boundary:
      "관심 있는 기술을 이미 해본 일처럼 소개하지 않습니다.",
    sources: [{ label: "AI 활용 사례", href: "/ai-practice" }],
  },
];
