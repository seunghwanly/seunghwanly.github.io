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
const asOf = "2026년 9월 4일 기준";

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
    id: "membership",
    category: "통합멤버십 · O2O",
    title: "온라인과 오프라인 매장 고객을 하나로",
    summary:
      "브랜드마다 흩어져 있던 고객 정보를 본인인증을 기준으로 연결했습니다. 2026년 9월까지 온라인 고객과 오프라인 매장 고객 245,000+명이 하나의 계정으로 이어졌습니다.",
    role: "연결 기준 설계 · 본인인증 연동 · 신청 흐름 · 앱/웹 연동 · 배포",
    tags: ["O2O", "본인인증", "통합멤버십", "App · Web 연동"],
    metrics: [
      {
        value: "245,000+",
        label: "통합멤버십 연동한 브랜드 유저수",
        context: "2026-03-11 출시 후 2026-09-04까지 누적",
      },
      {
        value: "99.84%",
        label: "앱 crash-free 세션",
        context: "출시 첫 달 242,694 sessions 기준",
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
          "이메일만으로는 동일 사용자를 가려낼 수 없었습니다. 같은 사람이 브랜드마다 다른 계정으로 남아 혜택도 이력도 따로 쌓였습니다.",
        ],
      },
      {
        id: "changes",
        label: "바꾼 것",
        title: "본인인증을 연결 기준으로 삼은 계정 통합",
        bullets: [
          "본인인증과 제3자 정보제공 동의를 연결 기준으로 정하고, 유저 동의하에 온라인·오프라인 유저 정보를 잇도록 설계",
          "신청 화면과 완료 화면을 분리해 어느 단계에서 이탈하는지 추적할 수 있게 구성",
          "별도 도메인과 QR 숏링크, 딥링크, 인앱브라우저, 레거시 유저 예외를 처리한 뒤 배포",
        ],
      },
      {
        id: "result",
        label: "확인한 결과",
        title: "고객 245,000+명 연결",
        paragraphs: [
          "2026년 3월 첫 배포 후 9월까지 온·오프라인 고객 245,000+명이 연결됐습니다.",
          "출시 첫 달 앱 242,694 sessions의 crash-free는 99.84%, 장바구니 354,758 views는 99.92%, 웹 4,014 sessions는 100%였습니다.",
        ],
      },
    ],
    limitation:
      "연결된 고객이 실제로 브랜드를 오가며 더 많이 구매했는지는 측정하지 않았습니다. 연결 자체가 목표였고 그 뒤의 행동 변화는 다음 과제로 남겼습니다.",
    sources: [],
  },
  {
    id: "observability",
    category: "관측성 · 렌더링 전환",
    title: "관측할 수 있게 렌더링 방식을 두 번 바꿨다",
    summary:
      "Flutter Web은 Canvas로 그려서 화면 안에서 무슨 일이 일어나는지 볼 수 없었습니다. 관측 가능한 DOM으로 옮겨 이탈 구간을 드러냈고, 수단이 틀렸다는 걸 인정하고 한 번 더 되돌렸습니다.",
    role: "렌더링 방식 판단 · 화면 분리 · Datadog 대시보드·알림 구성 · 재이관",
    tags: ["Datadog RUM", "Product Analytics", "Expo Web", "Vite", "퍼널"],
    metrics: [
      { value: "77%", label: "유저통합 완료 퍼널", context: "2026-05-10 기준" },
      {
        value: "1.85%",
        label: "에러 세션 비율",
        context: "문의가 오기 전에 확인 가능",
      },
      {
        value: "636ms",
        label: "p75 LCP",
        context: "매장연동 완료 퍼널 73%와 함께 관측",
      },
    ],
    sections: [
      {
        id: "situation",
        label: "상황",
        title: "Canvas 렌더링이라 에러를 고객 문의로만 알았다",
        paragraphs: [
          "통합멤버십을 처음에 Flutter Web으로 만들었는데 Canvas 렌더링이라 Datadog SDK가 DOM 이벤트를 자동으로 수집하지 못했습니다. 에러가 나도 CS 문의가 들어와야 알 수 있었습니다.",
          "본인인증⋅유저통합⋅매장연동 중 어느 구간에서 이탈하는지도 알 수 없었습니다. 전환율을 올리는 것보다 먼저 보이게 만드는 게 순서였습니다.",
        ],
      },
      {
        id: "changes",
        label: "바꾼 것",
        title: "DOM 기반으로 옮기고 퍼널 경계를 화면 단위로 드러냄",
        bullets: [
          "SEO가 필요 없는 서비스라 DOM 기반이면 관측성이 생긴다고 판단해 React Native / Expo Web으로 이관",
          "결과⋅로딩⋅에러 화면을 유스케이스별로 분리해 퍼널 경계가 화면 단위로 드러나게 구성",
          "본인인증⋅유저통합⋅매장연동 퍼널, RUM 에러, LCP·INP·CLS, Frustration 세션을 하나의 대시보드로 모음",
          "이상 징후가 생기면 Slack으로 알림이 가도록 모니터 구성",
        ],
      },
      {
        id: "result",
        label: "확인한 결과",
        title: "문의가 오기 전에 에러를 먼저 보는 구조",
        paragraphs: [
          "2026년 5월 10일 기준으로 유저통합 완료 77%, 매장연동 완료 73%, 에러 세션 비율 1.85%, p75 LCP 636ms를 운영 지표로 보게 됐습니다.",
          "다만 React Native Web 의존이 번들 크기와 빌드 설정을 키웠습니다. 웹만 서빙하는 앱에 네이티브 레이어를 얹은 셈이라 Vite 정적 React로 다시 옮겼고, 이후 신규 웹은 DOM 기반으로 통일했습니다.",
        ],
      },
    ],
    limitation:
      "React Native Web은 실패한 실험이었습니다. 관측 가능해야 개선할 수 있다는 목표는 맞았지만 수단이 틀렸습니다. 이후로는 기술을 고를 때 관측⋅빌드⋅테스트에서 치를 비용을 먼저 따집니다.",
    sources: [],
  },
  {
    id: "reservation",
    category: "예약 상세 통합 · WebView",
    title: "4개 브랜드 예약 상세를 하나의 웹으로",
    summary:
      "브랜드마다 예약 상세 화면이 달라 같은 버그가 네 번 났고, 고칠 때마다 앱 심사를 기다려야 했습니다. 주문 상태 계약을 하나로 통일하고 앱은 그 계약을 소비하는 WebView로 바꿨습니다.",
    role: "상태 계약 설계 · 백엔드 조율 · 공용 웹 구현 · 브릿지 계층 · 어드민 읽기 모드",
    tags: ["예약 상세", "WebView", "브릿지", "React", "하위 호환"],
    metrics: [
      {
        value: "4개",
        label: "예약 상세를 통합한 브랜드",
        context: "윙크⋅하파크리스틴⋅젬아워⋅츄렌즈",
      },
      {
        value: "5개",
        label: "한 코드베이스를 공유하는 화면",
        context: "4개 브랜드와 어드민 읽기 모드",
      },
      {
        value: "심사 없이",
        label: "예약 상세 배포",
        context: "앱은 WebView 껍데기로 남김",
      },
    ],
    sections: [
      {
        id: "situation",
        label: "상황",
        title: "같은 예약 프로세스인데 브랜드마다 표현이 달랐다",
        paragraphs: [
          "브랜드별로 예약 상세 화면이 따로 있었고, 주문 상태와 액션이 각 화면의 파생 로직에 의존했습니다. 그래서 같은 성격의 버그가 브랜드마다 따로 났습니다.",
          "수정이 필요할 때마다 여러 화면의 상태와 동작을 함께 고쳐야 했고, 앱은 고칠 때마다 스토어 심사를 기다려야 했습니다. 어드민에서는 고객이 지금 어떤 화면을 보고 있는지 알 수 없어 직접 물어봐야 했습니다.",
        ],
      },
      {
        id: "changes",
        label: "바꾼 것",
        title: "상태 계약을 하나로 만들고 앱은 그 계약을 소비하게",
        bullets: [
          "화면을 네 번 고치는 대신 주문 상태 계약을 전체 단계⋅현재 단계⋅종료 원인으로 통일하고 백엔드 응답을 그 기준에 맞춤",
          "React 정적 웹으로 공용 예약 상세를 만들고 앱의 예약 상세 화면을 WebView로 교체",
          "호스트 판별과 메시지 송수신을 단일화한 브릿지 계층을 두어 4개 브랜드가 같은 인터페이스로 통신",
          "같은 화면을 읽기 전용으로 열어 어드민에서도 고객과 같은 상태를 보게 함",
        ],
      },
      {
        id: "result",
        label: "확인한 결과",
        title: "다섯 개 화면이 한 코드베이스를 공유",
        paragraphs: [
          "4개 브랜드와 어드민이 같은 코드베이스를 쓰게 됐습니다. 새 API 필드는 하위 호환을 확인한 뒤 배포했습니다.",
          "예약 상세는 앱 심사를 거치지 않고 배포할 수 있게 됐고, CS 문의가 들어오면 고객과 같은 예약 상태를 보면서 응대합니다.",
        ],
      },
    ],
    limitation:
      "브릿지 계약을 한 번에 크게 바꾸려다 되돌린 적이 있습니다. 앱과 웹은 같은 시각에 배포되지 않아서 어느 쪽이 먼저 나가도 하위 호환이 지켜져야 했습니다. 이후로는 필드 추가 → 양쪽 배포 → 구버전 제거 순으로 나누고 브릿지 메시지에 버전을 붙였습니다. 통합 뒤 브랜드별 중복 수정이 얼마나 줄었는지는 측정하지 않았습니다.",
    sources: [],
  },
  {
    id: "dto",
    category: "모노레포 · 타입 안정성",
    title: "조용히 삼켜지던 파싱 실패를 드러낸 DTO 표준화",
    summary:
      "DTO에 변환 로직이 섞여 같은 값이 두 이름으로 공존했고, 파싱에 실패해도 기본값을 채우고 넘어가 화면만 비었습니다. 14개 feature의 DTO를 서버 응답의 직역으로 되돌리고 실패가 드러나게 했습니다.",
    role: "DTO 규약 설계 · 실패 흐름 정의 · 전 feature 전환 · 데드코드 정리",
    tags: ["zod", "DTO", "모노레포", "Datadog", "AI 에이전트 규약"],
    metrics: [
      {
        value: "14개",
        label: "순수 zod로 전환한 feature",
        context: "2026-08-13 ~ 08-25",
      },
      {
        value: "6,334줄",
        label: "제거한 데드코드",
        context: "소비자가 없던 feature 9개 · 128파일",
      },
      {
        value: "119 → 17",
        label: "DTO에 남은 변환 로직 사용처",
        context: "전환 전후 비교",
      },
    ],
    sections: [
      {
        id: "situation",
        label: "상황",
        title: "실패해도 기본값을 채우고 넘어가 아무 데도 남지 않았다",
        paragraphs: [
          "DTO에 변환과 헬퍼가 섞여 있어 같은 값이 두 이름으로 공존하는 등 중복 키와 타입 불일치가 반복됐습니다.",
          "파싱에 실패해도 기본값을 채워 넣고 넘어가서 화면에는 빈 값이 보이는데 에러는 어디에도 남지 않았습니다. 여기에 더 이상 쓰이지 않는 feature 9개가 남아 전환 범위를 부풀리고 있었습니다.",
        ],
      },
      {
        id: "changes",
        label: "바꾼 것",
        title: "DTO는 서버 응답의 직역, 실패는 한 방향으로",
        bullets: [
          "DTO를 순수 zod로 되돌리고, 타입이 맞지 않으면 클라이언트에서 변환하지 않고 서버를 고치는 쪽으로 기준을 세움",
          "파싱 실패를 Datadog으로 보내는 보고 채널과 응답 봉투를 벗기는 공통 래퍼를 추가",
          "실패 흐름을 값 반환에서 예외를 던지고 훅이 보고하는 한 방향으로 바꿔 테스트할 지점을 명확히 함",
          "baseURL과 토큰을 props로 내려주던 체인을 컨텍스트 주입으로 전환하고, 소비자가 없는 feature 9개를 제거",
          "규약을 AGENTS.md에 명문화 — 사람만 읽는 문서가 아니라 AI 에이전트도 읽으니 생성되는 코드도 같은 규칙을 따르게",
        ],
      },
      {
        id: "result",
        label: "확인한 결과",
        title: "2주 만에 14개 feature 전환, 실패가 보이기 시작",
        paragraphs: [
          "2026년 8월 13일부터 25일까지 14개 feature의 DTO를 전환했습니다. DTO 안에 남아 있던 변환 로직 사용처는 119곳에서 17곳으로 줄었습니다.",
          "파싱 실패가 Datadog에 보고되기 시작했고, 소비자가 없던 feature 9개(128파일 6,334줄)가 사라졌습니다. 에이전트가 만든 PR도 같은 규약을 따르게 됐습니다.",
        ],
      },
    ],
    limitation:
      "기본값으로 실패를 덮던 코드를 걷어내며 조용한 성공이 가장 늦게 발견되는 버그라는 걸 확인했습니다. 다만 전환 전후로 파싱 실패 보고가 실제로 몇 건이나 늘었는지는 아직 추이를 확인하지 않았습니다.",
    sources: [],
  },
  {
    id: "flutter-web",
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
    id: "design-system",
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
      { label: "Me", href: "/#me" },
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
      "모바일과 웹을 오가며 서비스를 만들고 운영해 온 Frontend Engineer 이승환입니다. 경력과 주로 쓰는 기술을 함께 정리했습니다.",
  },
  illustrationAlt: "흔들리는 노트북을 그린 손그림",
  emailAriaLabel: "이메일 보내기",
  scrollHintLabel: "아래로 스크롤",
};

/* ================================================================== *
 * Me (`/about`)
 * ================================================================== */

export const about: AboutCopy = {
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
          "윙크⋅하파크리스틴⋅츄렌즈⋅젬아워 등 7개 서비스의 앱(Flutter)과 웹(React), 인프라(AWS)를 2인 프론트 조직에서 맡고 있습니다.",
        highlights: [
          {
            id: "membership",
            title: "통합 멤버십으로 고객 245,000+명 연결",
            detail:
              "브랜드별로 유저가 분산돼 이메일만으로는 동일 사용자 식별이 어려운 상태. 본인인증과 제3자 정보제공 동의를 연결 기준으로 정하고 Flutter Web → React Native Web → React로 점진 이관, 신청과 완료 화면을 분리해 이탈 지점 추적 가능하게 구성. 2026년 9월까지 온·오프라인 고객 245,000+명 연결, 이관 후 Datadog으로 가입 전환·오류 세션·Web Vitals 관측",
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
    awards: "Award",
  },
  skills: [
    { label: "웹", detail: "React · TypeScript · Next.js · Vite · Flutter Web" },
    {
      label: "크로스 플랫폼",
      detail: "Flutter · Dart · Bloc · React Native / Expo Web · WebView",
    },
    {
      label: "네이티브 연동",
      detail: "Kotlin · Swift · SPM · Platform Channel · Shorebird",
    },
    { label: "서버", detail: "NestJS · FastAPI" },
    {
      label: "인프라",
      detail:
        "AWS(S3 · CloudFront · Lambda · ECS · ELB · Route53) · Terraform · Atlantis",
    },
    {
      label: "관측",
      detail:
        "Datadog RUM · Product Analytics · Monitor · Error Tracking · Lighthouse",
    },
    {
      label: "빌드·배포",
      detail: "Fastlane · GitHub Actions · GitHub Environments",
    },
    { label: "디자인 시스템", detail: "WDS · Widgetbook · Figma MCP" },
    {
      label: "AI 개발 도구",
      detail: "Claude Code · Codex · Linear 에이전트 · n8n · MCP",
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
  awards: [
    { label: "NH농협은행 메타버스 핀테크 해커톤 장려상", detail: "2021.12" },
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
