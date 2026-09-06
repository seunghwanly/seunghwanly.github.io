/**
 * 화면에 들어가는 문구의 형태만 정의합니다.
 * 실제 문구는 `lib/content.ts`, 구조와 스타일은 `components/`에 있습니다.
 *
 * 화면은 다섯 개입니다.
 *   Intro   `/`            이름과 연락처
 *   Me      `/about`       한 줄 소개, 기술, 경력, 프로젝트
 *   Works   `/works`       대표 작업 목록
 *   Work    `/works/[id]`  작업 하나의 상세
 *   Resume  `/resume`      이력서 한 장
 */

/* ================================================================== *
 * 공통 조각
 * ================================================================== */

/** 외부로 나가는 링크. 새 창에서 열립니다. */
export type SourceLink = {
  label: string;
  href: string;
};

/** 버튼이나 링크 하나. */
export type ActionCopy = {
  label: string;
  href: string;
};

/** `웹 — React · TypeScript` 처럼 이름과 내용이 짝을 이루는 줄. */
export type LabelledDetail = {
  label: string;
  detail: string;
};

/** 각 화면의 `<title>` 과 `description`. */
export type PageMetaCopy = {
  title: string;
  description: string;
};

/**
 * 문구 한 토막. `strong` 인 토막만 굵게 그립니다.
 * 줄바꿈은 `text` 안의 `\n` 을 그대로 씁니다.
 */
export type TextRun = {
  text: string;
  strong?: boolean;
};

/** Intro 화면의 기술 카드. `icon` 은 `public/` 기준 경로입니다. */
export type TechItem = {
  name: string;
  icon: string;
  /** 아이콘 원본 비율. 카드 안에서 높이 96px 로 맞춰 그립니다. */
  width: number;
  height: number;
};

/* ================================================================== *
 * 대표 작업
 * ================================================================== */

/** 작업 상세의 한 단락. 문단이나 목록 중 하나를 채웁니다. */
export type CaseSection = {
  id: string;
  label: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

/** 작업에서 확인한 수치 하나. */
export type CaseMetric = {
  value: string;
  label: string;
  context: string;
};

export type CaseStudy = {
  id: string;
  category: string;
  title: string;
  summary: string;
  role: string;
  tags: string[];
  metrics: CaseMetric[];
  sections: CaseSection[];
  /** 측정하지 않은 것과 남은 과제. 빈 문자열이면 그리지 않습니다. */
  limitation: string;
  sources: SourceLink[];
};

/** 이력서의 공개 기록 한 줄. */
export type ProofMetric = {
  value: string;
  label: string;
  detail: string;
  href: string;
};

/* ================================================================== *
 * 사이트 전체
 * ================================================================== */

export type SiteMetadataCopy = {
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  applicationName: string;
  keywords: string[];
  shareTitle: string;
  shareDescription: string;
  ogImageAlt: string;
};

/** 구조화 데이터(JSON-LD)에 들어가는 값. */
export type PersonSchemaCopy = {
  name: string;
  alternateName: string;
  jobTitle: string;
  sameAs: string[];
  knowsAbout: string[];
};

/** 하단에 떠 있는 내비게이션. */
export type NavCopy = {
  ariaLabel: string;
  items: ActionCopy[];
};

export type SiteCopy = {
  name: string;
  role: string;
  email: string;
  skipToContent: string;
  metadata: SiteMetadataCopy;
  person: PersonSchemaCopy;
  nav: NavCopy;
};

/** 여러 화면이 함께 쓰는 문구. */
export type UiCopy = {
  tagListAriaLabel: string;
  /** 뒤로 가는 버튼. `↩` 기호는 컴포넌트가 붙입니다. */
  backToTop: string;
  backToList: string;
  newTabSuffix: string;
  caseLinkAriaSuffix: string;
};

/* ================================================================== *
 * Intro (`/`)
 * ================================================================== */

export type IntroCopy = {
  /** Intro 와 Me 를 함께 담는 첫 화면의 meta. */
  meta: PageMetaCopy;
  /** 이름 옆 일러스트의 대체 텍스트. */
  illustrationAlt: string;
  emailAriaLabel: string;
  /** 아래로 이어진다는 것을 알리는 표시의 대체 텍스트. */
  scrollHintLabel: string;
};

/* ================================================================== *
 * Me (`/about`)
 * ================================================================== */

/** 경력 한 건 안에서 직접 맡은 일. */
export type CareerHighlight = {
  id: string;
  title: string;
  detail: string;
};

export type CareerEntry = {
  period: string;
  company: string;
  role: string;
  summary: string;
  highlights: CareerHighlight[];
};

export type ProjectEntry = {
  period: string;
  title: string;
  role: string;
  description: string;
  sources: SourceLink[];
};

export type AboutCopy = {
  /** 두 줄 헤드라인. Figma 시안은 "모바일" 과 "웹" 만 굵게 씁니다. */
  headline: TextRun[];
  techListAriaLabel: string;
  tech: TechItem[];
  career: {
    title: string;
    entries: CareerEntry[];
  };
  projects: {
    title: string;
    entries: ProjectEntry[];
  };
};

/* ================================================================== *
 * Works (`/works`, `/works/[id]`)
 * ================================================================== */

export type WorkIndexCopy = {
  meta: PageMetaCopy;
  listAriaLabel: string;
};

export type CaseDetailCopy = {
  fallbackTitle: string;
  roleLabel: string;
  metricsLabel: string;
  limitationLabel: string;
  sourcesLabel: string;
  asideAriaLabel: string;
};

/* ================================================================== *
 * Resume (`/resume`)
 * ================================================================== */

export type ResumeCopy = {
  meta: PageMetaCopy;
  headline: string;
  updatedAt: string;
  contactAriaLabel: string;
  download: ActionCopy;
  profile: string[];
  sections: {
    profile: string;
    career: string;
    projects: string;
    skills: string;
    records: string;
    education: string;
    teaching: string;
    awards: string;
  };
  skills: LabelledDetail[];
  education: {
    title: string;
    detail: string;
  };
  teaching: LabelledDetail[];
  awards: LabelledDetail[];
};

/* ================================================================== *
 * 404
 * ================================================================== */

export type NotFoundCopy = {
  code: string;
  title: string;
  description: string;
  actions: ActionCopy[];
};
