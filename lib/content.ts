export type SourceLink = {
  label: string;
  href: string;
  note?: string;
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
    value: "12 days",
    label: "AI-assisted SDK contribution",
    detail: "제안에서 upstream merge까지",
    href: "https://github.com/DataDog/dd-sdk-flutter/pull/1069",
  },
  {
    value: "15 releases",
    label: "Android · iOS · Web plugin",
    detail: "13개월의 공개 배포 기록",
    href: "https://pub.dev/packages/kakao_maps_flutter",
  },
  {
    value: "48 PRs",
    label: "Design system delivery",
    detail: "작성한 공개 PR 모두 merge",
    href: "https://github.com/ppbstudios/wds_flutter/pulls?q=is%3Apr+author%3Aseunghwanly",
  },
  {
    value: "55 tests",
    label: "Self-hosted mobile CI/CD",
    detail: "독립 환경에서 재실행",
    href: "https://github.com/seunghwanly/local-flutter-cicd-server",
  },
] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "connected-commerce",
    index: "01",
    category: "Domain · O2O",
    title: "온라인 계정과 오프라인 매장 경험을 하나의 흐름으로",
    summary:
      "본인인증과 동의를 신뢰 경계로 삼고, 매장 고객 연결과 예약·주문 상태를 클라이언트가 안전하게 해석할 수 있는 계약으로 정리했습니다.",
    role: "Client flow 설계 · 상태 계약 · 예외 처리 · 운영 관측",
    tags: ["O2O", "Identity", "Order state", "Observability"],
    metrics: [
      {
        value: "31,124",
        label: "연결 완료 사용자",
        context: "2026-03-11 출시 후 2026-05-10까지 누적",
      },
      {
        value: "5 flows",
        label: "매장 운영 기능",
        context: "고객 필터·연동 요청·주문이력 등",
      },
      {
        value: "99.92%",
        label: "장바구니 crash-free",
        context: "출시 첫 달 354,758 views 기준",
      },
    ],
    sections: [
      {
        id: "problem",
        label: "문제 / 제약",
        title: "같은 고객과 같은 주문을 각 시스템이 다르게 보고 있었습니다.",
        paragraphs: [
          "브랜드별 온라인 계정과 오프라인 매장 고객이 분리되어 있었습니다. 이메일이나 단순 전화번호만으로 같은 사람인지 판단하기 어려웠고, 매장 직원은 본인인증된 고객 정보와 지난 주문을 한 흐름에서 확인할 수 없었습니다.",
          "예약 정책과 화면은 QA 기간에도 바뀌었습니다. 장바구니처럼 되돌릴 수 있는 상태와 주문·결제처럼 복구 비용이 큰 상태를 하나로 묶으면 작은 정책 변경도 전체 흐름을 흔들 수 있었습니다.",
        ],
      },
      {
        id: "decision",
        label: "내가 내린 결정",
        title: "식별과 거래의 경계를 각각 명시했습니다.",
        bullets: [
          "온라인·오프라인 고객 연결은 본인인증과 명시적 동의를 통과해야만 성립하게 했습니다.",
          "서버가 총 단계·현재 단계·종료 이유를 조합해 내려주고, 클라이언트는 그 계약으로 화면과 종료 상태를 결정하게 했습니다.",
          "장바구니와 주문·결제를 하나의 거대한 상태로 만들지 않고 교체 가능한 단계로 나눴습니다.",
        ],
      },
      {
        id: "implementation",
        label: "구현 범위",
        title: "고객 연결부터 실패 상태까지 운영 가능한 흐름으로 묶었습니다.",
        bullets: [
          "알림·QR 기반 연결 요청과 본인인증 정보 표시",
          "매장 고객 필터와 지난 주문이력 조회",
          "앱·웹의 예약 단계와 종료 상태 표현",
          "예약 불가·재고 불일치·주문 실패 시나리오 QA",
          "배포 직후 레거시 데이터와 링크·브라우저 예외 추적",
        ],
      },
      {
        id: "verification",
        label: "검증",
        title: "출시 숫자보다 먼저 실패 모드가 닫혔는지 확인했습니다.",
        paragraphs: [
          "출시 첫 달 앱 242,694 sessions에서 crash-free 99.84%, 장바구니 354,758 views에서 99.92%, 웹 4,014 sessions에서 100%를 관측했습니다. 같은 관측 범위에서 예약·주문·결제를 막는 incident와 flow revert는 없었습니다.",
          "배포 당일에는 새 코드보다 기존 데이터의 공백이 더 큰 위험이라는 사실을 확인했습니다. 휴대폰 정보가 없을 수 있는 약 20만 레거시 계정을 식별하고 연결 흐름이 깨지지 않도록 우선 조치했습니다.",
        ],
      },
      {
        id: "learning",
        label: "배운 것",
        title: "새 화면보다 오래된 데이터와 실패 상태가 더 위험했습니다.",
        paragraphs: [
          "이후에는 기능 목록보다 식별 키가 없는 사용자의 규모, 되돌릴 수 있는 상태의 경계, 실패 시 고객과 매장 중 어디가 막히는지, 출시 후 안전을 판단할 지표를 먼저 확인합니다.",
        ],
      },
    ],
    limitation:
      "이 사례는 결제 멱등성, 중복 결제 방지 로직, POS 단말·카드리더·영수증 프린터 연동, 완전한 offline-first sync를 구현했다는 증거가 아닙니다.",
    sources: [],
  },
  {
    slug: "multiplatform-sdk",
    index: "02",
    category: "Platform · SDK",
    title: "하나의 Dart API로 Android·iOS·Web의 차이를 연결",
    summary:
      "공통점을 과도하게 추상화하지 않고, 안정적인 Dart 계약과 플랫폼 adapter, 기능 매트릭스로 세 SDK의 차이를 관리했습니다.",
    role: "API contract · Kotlin/Swift/JavaScript adapter · release · documentation",
    tags: ["Flutter", "Kotlin", "Swift/SPM", "JavaScript"],
    metrics: [
      {
        value: "3 platforms",
        label: "하나의 공개 API",
        context: "Android · iOS · Web",
      },
      {
        value: "15",
        label: "공개 releases",
        context: "2025-06-09부터 2026-07-01까지",
      },
      {
        value: "13 months",
        label: "유지보수 기간",
        context: "beta부터 0.2.1까지",
      },
    ],
    sections: [
      {
        id: "problem",
        label: "문제 / 제약",
        title: "공식 Flutter 지원이 없고 세 플랫폼의 생명주기도 달랐습니다.",
        paragraphs: [
          "Android, iOS, Web SDK는 초기화 방식과 이벤트 모델, 지원 기능이 달랐습니다. 제품 코드에 플랫폼 분기가 퍼질수록 기능 추가와 장애 재현 비용이 커지는 구조였습니다.",
        ],
      },
      {
        id: "decision",
        label: "내가 내린 결정",
        title: "차이를 숨기지 않고 계약으로 만들었습니다.",
        paragraphs: [
          "공통 API는 안정적인 최소 교집합으로 두고, 플랫폼별 기능 차이는 adapter와 문서의 capability matrix에 남겼습니다. 완전한 동일성을 약속하는 대신 어디까지 같은지 명확하게 설명하는 쪽을 택했습니다.",
        ],
      },
      {
        id: "implementation",
        label: "구현 범위",
        title: "Dart에서 네이티브와 Web까지 전체 경계를 직접 다뤘습니다.",
        bullets: [
          "Dart 공통 API와 event stream",
          "Android Kotlin adapter",
          "iOS Swift/SPM adapter",
          "Web JavaScript adapter",
          "camera·marker·InfoWindow·clusterer",
          "한·영 문서, example 앱, issue/PR template",
          "버전 검증과 GitHub OIDC 기반 pub.dev 배포",
        ],
      },
      {
        id: "verification",
        label: "검증",
        title: "Example과 공개 배포 이력이 계약의 일부가 됐습니다.",
        paragraphs: [
          "Example 앱으로 플랫폼별 동작을 확인하고 CHANGELOG로 변경 계약을 남겼습니다. 저장소와 pub.dev의 15개 배포 버전은 외부에서 직접 확인할 수 있습니다.",
        ],
      },
      {
        id: "learning",
        label: "배운 것 / 다음 변경",
        title: "멀티플랫폼 SDK의 비용은 코드를 한 번 쓰는 데서 끝나지 않습니다.",
        paragraphs: [
          "플랫폼 차이를 계속 설명하고 호환성을 책임지는 일이 가장 비쌌습니다. 다음 공개 개선은 Android·iOS·Web 최소 smoke test와 PR 단위 analyze/test matrix입니다.",
        ],
      },
    ],
    limitation:
      "현재 integration test의 실효 범위와 PR 필수 gate는 충분하지 않습니다. Swift Concurrency·Combine·XCTest나 AOSP/HAL 경험으로 확대해 말하지 않습니다.",
    sources: [
      {
        label: "GitHub repository",
        href: "https://github.com/seunghwanly/kakao_maps_flutter",
      },
      {
        label: "pub.dev package",
        href: "https://pub.dev/packages/kakao_maps_flutter",
      },
    ],
  },
  {
    slug: "observable-reliability",
    index: "03",
    category: "Reliability · OSS",
    title: "보이지 않던 화면을 관측하고 원인을 upstream에서 닫기",
    summary:
      "제품 대시보드의 우회가 아니라 Flutter SDK의 route parsing까지 내려가 재현·테스트하고, 외부 maintainer review와 정식 배포를 거쳐 운영에서 확인했습니다.",
    role: "Root-cause analysis · implementation · tests · external review · production check",
    tags: ["RUM", "Flutter SDK", "Open source", "AI-assisted"],
    metrics: [
      {
        value: "12 days",
        label: "제안에서 merge",
        context: "2026-06-25 → 2026-07-07",
      },
      {
        value: "5 tests",
        label: "query scenarios",
        context: "기존 route와 query-bearing route",
      },
      {
        value: "11 checks",
        label: "최종 CI",
        context: "외부 프로젝트의 merge gate",
      },
    ],
    sections: [
      {
        id: "problem",
        label: "문제 / 제약",
        title: "모바일 RUM에서 route query가 사라지고 있었습니다.",
        paragraphs: [
          "서로 다른 유입과 사용자 흐름이 같은 화면으로 뭉쳐 보여 제품 판단의 해상도가 낮아졌습니다. 사내 fork는 빠르지만 SDK를 올릴 때마다 패치를 유지해야 하는 선택이었습니다.",
        ],
      },
      {
        id: "decision",
        label: "내가 내린 결정",
        title: "급한 불은 제품에서 관측하고 반복 비용은 upstream에서 닫았습니다.",
        paragraphs: [
          "AI가 여러 SDK 레이어를 탐색하고 최초 구현·테스트·문서 초안을 만드는 일을 가속했습니다. 문제 가설, SDK가 책임질 범위, query 시나리오, maintainer 피드백의 수용 여부는 제가 통제했습니다.",
        ],
      },
      {
        id: "implementation",
        label: "구현 범위",
        title: "Flutter에서 네이티브 SDK까지 데이터가 이동하는 경로를 추적했습니다.",
        bullets: [
          "query가 유실되는 레이어 재현",
          "view URL과 query attribute 전달 구현",
          "기존 route 호환성과 query 시나리오 테스트",
          "maintainer review를 반영한 변경 범위 축소",
          "정식 SDK 버전 적용과 iOS·Android 운영 수집 확인",
        ],
      },
      {
        id: "verification",
        label: "검증",
        title: "코드 생성이 아니라 외부 검증 gate를 통과한 결과만 남겼습니다.",
        paragraphs: [
          "3 commits, 2 files, 5개 query test와 11개 CI check를 거쳐 기능 PR이 upstream에 merge됐습니다. 다음 날 정식 SDK 버전으로 배포됐고, 제품에 적용한 뒤 운영 iOS·Android에서 수집을 확인했습니다.",
        ],
      },
      {
        id: "learning",
        label: "배운 것",
        title: "AI는 탐색 공간을 줄였고, 올바른 범위는 리뷰와 운영 데이터가 정했습니다.",
        paragraphs: [
          "관측 도구의 공백을 제품 우회로 남겨두면 업그레이드마다 같은 비용을 냅니다. 해결 가능한 층까지 내려가되 외부 생태계의 재현·호환성 기준을 받아들이는 편이 장기적으로 더 저렴했습니다.",
        ],
      },
    ],
    limitation:
      "Datadog SDK maintainer 또는 AI Platform Engineer라고 주장하지 않습니다. AI 단독 기여도, 개발 속도 배수, 장애 복구 시간 개선도 측정하지 않았습니다.",
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
    category: "System · Design QA",
    title: "디자인 QA를 회의가 아니라 실행 가능한 preview로",
    summary:
      "토큰·foundation·component·Widgetbook을 하나의 monorepo로 운영하고, 작업에서 디자인 QA와 배포까지 같은 preview를 보게 했습니다.",
    role: "Design system architecture · component implementation · preview workflow · release",
    tags: ["Flutter", "Widgetbook", "Monorepo", "Design QA"],
    metrics: [
      {
        value: "48 PRs",
        label: "작성 PR merge",
        context: "공개 저장소에서 외부 확인 가능",
      },
      {
        value: "4 layers",
        label: "monorepo 구조",
        context: "tokens · foundation · components · preview",
      },
      {
        value: "2 surfaces",
        label: "공개 component catalog",
        context: "Flutter preview와 공용 UI live preview",
      },
    ],
    sections: [
      {
        id: "problem",
        label: "문제 / 제약",
        title: "스펙 일치 여부를 캡처와 반복 회의로 확인하고 있었습니다.",
        paragraphs: [
          "디자이너와 개발자가 서로 다른 화면을 보고 이야기하면 상태, 간격, 터치 동작의 작은 차이가 배포 직전까지 남습니다. 문서를 더 쓰는 것만으로는 실행 결과의 차이를 줄이기 어려웠습니다.",
        ],
      },
      {
        id: "decision",
        label: "내가 내린 결정",
        title: "합의의 단위를 문서에서 실행 가능한 컴포넌트로 바꿨습니다.",
        paragraphs: [
          "작업 중인 컴포넌트가 preview URL로 나오고, 디자이너가 같은 화면에서 확인한 뒤 배포되는 흐름을 만들었습니다. 구현 상태를 숨기지 않고 preview를 대화의 공통 객체로 사용했습니다.",
        ],
      },
      {
        id: "implementation",
        label: "구현 범위",
        title: "토큰부터 preview와 생성 도구까지 분리했습니다.",
        bullets: [
          "Melos 기반 package 경계",
          "token·foundation·component layer",
          "Widgetbook use case와 responsive 상태",
          "PR별 preview 배포",
          "디자인 확인 상태와 릴리즈 흐름",
          "React Native용 Storybook prototype과 공용 UI catalog 기여",
        ],
      },
      {
        id: "verification",
        label: "검증",
        title: "구조보다 반복되는 협업 기록으로 확인했습니다.",
        paragraphs: [
          "공개 Flutter WDS 저장소에서 제가 작성한 PR 48개가 모두 merge됐습니다. component catalog는 지금도 외부에서 열 수 있고, 화면별 적용은 preview를 기준으로 수동 디자인 QA를 거쳤습니다.",
        ],
      },
      {
        id: "learning",
        label: "배운 것 / 다음 변경",
        title: "사람의 검수는 강해졌지만 자동 회귀 검증은 남았습니다.",
        paragraphs: [
          "Widgetbook과 Storybook은 빠른 합의에 유효했지만 자동 visual regression이나 golden test를 대체하지 않습니다. 다음 단계는 필수 analyze·widget test와 제한된 golden diff gate입니다.",
        ],
      },
    ],
    limitation:
      "화면 개발 시간이나 코드 감소율은 재현 가능한 산식이 없어 사용하지 않습니다. 공개 PR 수는 활동의 증거이지 생산성 자체가 아닙니다.",
    sources: [
      {
        label: "Flutter WDS repository",
        href: "https://github.com/ppbstudios/wds_flutter",
      },
      {
        label: "작성한 공개 PR",
        href: "https://github.com/ppbstudios/wds_flutter/pulls?q=is%3Apr+author%3Aseunghwanly",
      },
      {
        label: "Flutter component preview",
        href: "https://design.winc.app",
      },
      {
        label: "기여한 공용 UI 시스템 · Live preview",
        href: "https://wds.winc.app",
      },
    ],
  },
];

export const publicProof: {
  group: string;
  items: SourceLink[];
}[] = [
  {
    group: "Open source",
    items: [
      {
        label: "Datadog Flutter SDK · route query contribution",
        href: "https://github.com/DataDog/dd-sdk-flutter/pull/1069",
        note: "기능 구현, 테스트, maintainer review와 merge",
      },
      {
        label: "kakao_maps_flutter",
        href: "https://github.com/seunghwanly/kakao_maps_flutter",
        note: "Android · iOS · Web plugin과 문서",
      },
      {
        label: "kakao_maps_flutter · pub.dev",
        href: "https://pub.dev/packages/kakao_maps_flutter",
        note: "13개월간 15개 release",
      },
      {
        label: "Flutter WDS",
        href: "https://github.com/ppbstudios/wds_flutter",
        note: "tokens · foundation · components · Widgetbook",
      },
      {
        label: "Self-hosted mobile CI/CD",
        href: "https://github.com/seunghwanly/local-flutter-cicd-server",
        note: "FastAPI · Fastlane · build queue · 55 tests",
      },
    ],
  },
  {
    group: "Writing",
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
      {
        label: "Medium archive",
        href: "https://medium.com/@seunghwanly",
        note: "Flutter · Web · 관측성에 대한 기록",
      },
    ],
  },
  {
    group: "Live systems",
    items: [
      {
        label: "Flutter component preview",
        href: "https://design.winc.app",
        note: "공개 Widgetbook",
      },
      {
        label: "기여한 공용 UI 시스템 · Live preview",
        href: "https://wds.winc.app",
        note: "공개 catalog만 연결하며 내부 저장소는 공개하지 않음",
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
    question: "토스플레이스와 가장 맞는 경험은 무엇인가요?",
    shortLabel: "가장 맞는 경험",
    keywords: ["토스", "토스플레이스", "적합", "경험", "강점", "fit"],
    answer:
      "오프라인 매장 고객과 온라인 계정을 연결한 O2O 제품 경험, Android·iOS·Web의 차이를 하나의 SDK 계약으로 다룬 경험, 그리고 제품에서 발견한 관측성 문제를 upstream까지 추적해 닫은 경험이 가장 가깝습니다.",
    known: [
      "고객 식별과 예약·주문 상태를 클라이언트 제품 경계로 설계했습니다.",
      "Kotlin·Swift/SPM·JavaScript adapter를 하나의 Dart API로 연결했습니다.",
      "운영에서 발견한 RUM 공백을 테스트와 외부 리뷰를 거쳐 정식 SDK 배포로 연결했습니다.",
    ],
    boundary:
      "결제 멱등성이나 POS 주변기기, AOSP/HAL을 직접 구현한 경험으로 확대하지 않습니다.",
    sources: [
      { label: "O2O case", href: "/work/connected-commerce" },
      { label: "SDK case", href: "/work/multiplatform-sdk" },
      {
        label: "Reliability case",
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
      "예약·주문·결제의 client flow와 상태 계약, 결제 실패 뒤 예약 상태를 조사하는 운영 경험은 있습니다. 다만 결제 코어의 멱등성이나 중복 결제 방지 로직, POS 단말·카드리더·영수증 프린터 연동은 확인 가능한 제 경험이 아닙니다.",
    known: [
      "총 단계·현재 단계·종료 이유를 조합한 주문 상태 계약을 설계했습니다.",
      "장바구니와 주문·결제를 복구 성질이 다른 단계로 분리했습니다.",
    ],
    boundary:
      "offline coupon 연동 경험을 production offline-first sync로 표현하지 않습니다.",
    sources: [{ label: "O2O case", href: "/work/connected-commerce" }],
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
      "AI는 여러 SDK 레이어의 탐색과 최초 구현·테스트·문서 초안을 가속했습니다. 문제 가설, 수정 범위, 리뷰 판단과 운영 검증은 제가 통제했고, 5개 query test와 11개 CI check, 외부 maintainer review를 통과한 결과만 성과로 남겼습니다.",
    known: [
      "Datadog Flutter SDK 기능 PR이 12일 만에 upstream merge됐습니다.",
      "AI 공동작업은 공개 commit metadata에도 남겼습니다.",
    ],
    boundary:
      "AI 단독 기여도나 생산성 배수를 계산하지 않았고, AI 플랫폼·RAG·모델 서빙 경험으로 말하지 않습니다.",
    sources: [
      {
        label: "AI Practice",
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
      "작업 뒤 화면 evidence를 자동으로 남기는 실험은 수행 시간을 늘렸고, 인증 session이 필요한 화면에서 원하는 상태를 재현하기 어려웠습니다. 그래서 모든 작업에 capture를 강제하지 않고 대상별 opt-in gate와 안전한 test session이 먼저 필요하다고 판단했습니다.",
    known: [
      "작업 완료와 사람이 결과를 검증할 수 있는 상태는 다른 문제였습니다.",
      "자동화의 존재보다 review coverage와 실패 비용을 먼저 봐야 했습니다.",
    ],
    boundary:
      "리뷰 시간 단축이나 생산성 향상 수치는 없으며, 내부 시스템의 이름과 URL은 공개하지 않습니다.",
    sources: [{ label: "AI Practice", href: "/ai-practice" }],
  },
  {
    id: "platform",
    question: "Native와 Web의 차이를 어떻게 다뤘나요?",
    shortLabel: "Native · Web 경계",
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
    ],
    answer:
      "완전한 동일성을 약속하기보다 공통 Dart 계약을 안정적인 최소 교집합으로 두고, Kotlin·Swift/SPM·JavaScript adapter의 차이를 기능 매트릭스에 명시했습니다. 제품에서는 WebView와 URL·History 같은 플랫폼 경계를 별도 문제로 다뤘습니다.",
    known: [
      "Android·iOS·Web을 지원하는 공개 Flutter plugin을 13개월간 운영했습니다.",
      "15개 버전을 pub.dev에 배포했습니다.",
    ],
    boundary:
      "Swift Concurrency·Combine·XCTest 또는 Android Framework/HAL 경험으로 확대하지 않습니다.",
    sources: [
      { label: "SDK case", href: "/work/multiplatform-sdk" },
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
      "Flutter WDS의 token·foundation·component·Widgetbook 구조와 컴포넌트를 개발하고, PR별 preview를 디자인 QA의 공통 화면으로 사용했습니다. 공개 저장소에서 작성한 PR 48개가 모두 merge됐습니다.",
    known: [
      "작업→preview→디자인 확인→배포의 협업 흐름을 운영했습니다.",
      "Flutter preview와 기여한 공용 UI 시스템의 live catalog를 공개하고 있습니다.",
    ],
    boundary:
      "개발 시간 단축률이나 코드 감소율은 산식이 없어 사용하지 않으며, 자동 visual regression은 아직 공백입니다.",
    sources: [
      { label: "Design QA case", href: "/work/design-to-preview" },
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
      "숫자는 기간·분모·환경을 같은 문장에 둡니다. 예를 들어 crash-free는 출시 첫 달의 앱 sessions, 장바구니 views, 웹 sessions를 분리해 기록했고, 해당 관측 범위 밖의 무장애를 주장하지 않습니다.",
    known: [
      "공개 숫자는 원본 PR·release·repository로 연결합니다.",
      "서로 충돌하거나 인과를 설명할 수 없는 수치는 공개 문장에서 제외했습니다.",
    ],
    boundary:
      "PR·commit·dashboard 개수만으로 제품 성과나 개인 생산성을 주장하지 않습니다.",
    sources: [
      { label: "Public proof", href: "/proof" },
      { label: "O2O case", href: "/work/connected-commerce" },
    ],
  },
  {
    id: "ai-gap",
    question: "RAG·MCP Gateway·모델 서빙 경험이 있나요?",
    shortLabel: "AI 경험의 경계",
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
      "프로덕션 RAG, MCP Gateway, Model Router, vLLM/Triton 모델 서빙을 직접 운영한 경험은 없습니다. 현재 강점은 AI-assisted delivery의 검증 방식과 coding-agent 결과를 사람이 리뷰할 수 있게 만드는 실행 경계입니다.",
    known: [
      "공개 SDK 사례에서 AI와 사람의 책임을 분리하고 테스트·리뷰·배포로 검증했습니다.",
      "agent 실험에서는 capture coverage와 인증 상태의 한계를 확인했습니다.",
    ],
    boundary:
      "관심 영역이나 입사 후 가설을 과거 경력처럼 표현하지 않습니다.",
    sources: [{ label: "AI Practice", href: "/ai-practice" }],
  },
];

