/**
 * 화면에 들어가는 문구의 형태만 정의합니다.
 * 실제 문구는 `lib/content.ts`, 구조와 스타일은 `components/`에 있습니다.
 *
 * 화면은 네 개입니다.
 *   Home    `/`            Intro 와 Me 를 한 스크롤에
 *   Works   `/works`       대표 작업 목록
 *   Work    `/works/[id]`  작업 하나의 상세
 *   Resume  `/resume`      이력서 한 장
 */

/** 외부로 나가는 링크. 새 창에서 열립니다. */
export type SourceLink = {
  label: string;
  href: string;
};

type ActionCopy = {
  label: string;
  href: string;
};

type LabelledDetail = {
  label: string;
  detail: string;
};

type PageMetaCopy = {
  title: string;
  description: string;
};

/** `strong` 인 토막만 굵게 그립니다. 줄바꿈은 `text` 안의 `\n` 을 씁니다. */
type TextRun = {
  text: string;
  strong?: boolean;
};

/** `icon` 은 `public/` 기준 경로, `width`/`height` 는 원본 비율입니다. */
export type TechItem = {
  name: string;
  icon: string;
  width: number;
  height: number;
};

/* ================================================================== *
 * 대표 작업
 * ================================================================== */

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
  id: string;
  category: string;
  title: string;
  summary: string;
  role: string;
  tags: string[];
  metrics: CaseMetric[];
  sections: CaseSection[];
  /** 빈 문자열이면 그리지 않습니다. */
  limitation: string;
  sources: SourceLink[];
};

export type ProofMetric = {
  value: string;
  label: string;
  detail: string;
  href: string;
};

/* ================================================================== *
 * 사이트 전체
 * ================================================================== */

type SiteMetadataCopy = {
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
type PersonSchemaCopy = {
  name: string;
  alternateName: string;
  jobTitle: string;
  sameAs: string[];
  knowsAbout: string[];
};

/** Figma GNB 컴포넌트셋의 `selected` 변형 이름. */
export type NavVariant = "default" | "me" | "works" | "resume";

type NavItem = ActionCopy & {
  variant: Exclude<NavVariant, "default">;
};

type NavCopy = {
  ariaLabel: string;
  items: NavItem[];
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

export type UiCopy = {
  tagListAriaLabel: string;
  /** `↩` 기호는 컴포넌트가 붙입니다. */
  backToTop: string;
  backToList: string;
  caseLinkAriaSuffix: string;
};

/* ================================================================== *
 * Home (`/`)
 * ================================================================== */

export type IntroCopy = {
  meta: PageMetaCopy;
  illustrationAlt: string;
  emailAriaLabel: string;
};

type CareerHighlight = {
  id: string;
  title: string;
  detail: string;
};

type CareerEntry = {
  period: string;
  company: string;
  role: string;
  summary: string;
  highlights: CareerHighlight[];
};

type ProjectEntry = {
  period: string;
  title: string;
  role: string;
  description: string;
  sources: SourceLink[];
};

export type AboutCopy = {
  /** Figma 시안은 "모바일" 과 "웹" 만 굵게 씁니다. */
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
