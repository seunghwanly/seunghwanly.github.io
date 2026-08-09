/**
 * Shapes for everything in `lib/content.ts`.
 *
 * `content.ts` holds only 문구·단어 — no types, no markup, no styling. This
 * file holds only types. If you are editing wording, you want `content.ts`.
 */

/* ------------------------------------------------------------------ *
 * Building blocks
 * ------------------------------------------------------------------ */

/** A link with a visible label, plus optional note and sibling links. */
export type SourceLink = {
  label: string;
  href: string;
  note?: string;
  related?: Array<{
    label: string;
    href: string;
  }>;
};

/** A button or link the reader can act on. */
export type ActionCopy = {
  label: string;
  href: string;
};

/** `label` names the thing, `detail` explains it in a phrase. */
export type LabelledDetail = {
  label: string;
  detail: string;
};

/** Per-route `<title>` and `<meta name="description">`. */
export type PageMetaCopy = {
  title: string;
  description: string;
};

/** The header block that opens a route. */
export type PageIntroCopy = {
  eyebrow?: string;
  title: string;
  description: string;
  meta?: string;
};

/** The heading block that opens a section inside a route. */
export type SectionCopy = {
  eyebrow?: string;
  title: string;
  description?: string;
};

/** A closing call to action. */
export type CtaCopy = {
  eyebrow?: string;
  title: string;
  actions: ActionCopy[];
};

/* ------------------------------------------------------------------ *
 * Portfolio data
 * ------------------------------------------------------------------ */

/** One headline record on the home page's proof strip. */
export type ProofMetric = {
  value: string;
  label: string;
  detail: string;
  href: string;
};

/** One numbered part of a case study. */
export type CaseSection = {
  id: string;
  label: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

/** One measured result of a case study. */
export type CaseMetric = {
  value: string;
  label: string;
  context: string;
};

/**
 * Which diagram a case study shows above its metrics. Naming the diagram in
 * the data keeps the choice explicit instead of hiding it behind an id check.
 */
export type CaseDiagramKind =
  /** 통합 고객 식별 흐름 */
  | "identity"
  /** 하나의 코드베이스로 세 플랫폼 운영 */
  | "platforms"
  /** 사람과 AI의 역할 분담 */
  | "contract"
  /** 디자인 → 구현 → 검수 */
  | "preview";

/** A full case study, rendered at `/works/[id]`. */
export type CaseStudy = {
  /**
   * URL segment — `/works/1` — and the case number shown on screen. Keep it
   * short and stable; changing it changes a public URL.
   */
  id: string;
  diagram: CaseDiagramKind;
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

/** A titled group of public records on `/proof`. */
export type ProofGroup = {
  group: string;
  items: SourceLink[];
};

/** One prepared question and answer on `/ask`. */
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

/* ------------------------------------------------------------------ *
 * Site chrome
 * ------------------------------------------------------------------ */

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

export type SiteHeaderCopy = {
  homeAriaLabel: string;
  brandName: string;
  brandTrace: string;
  navAriaLabel: string;
  mobileNavAriaLabel: string;
  menuLabel: string;
  menuAriaLabel: string;
  resumeLabel: string;
};

export type SiteFooterCopy = {
  title: string;
  description: string;
  linksAriaLabel: string;
  extraLinks: ActionCopy[];
  emailLabel: string;
};

/** Structured data for search engines. */
export type PersonSchemaCopy = {
  name: string;
  alternateName: string;
  jobTitle: string;
  sameAs: string[];
  knowsAbout: string[];
};

export type SiteCopy = {
  name: string;
  role: string;
  email: string;
  resumeHref: string;
  skipToContent: string;
  metadata: SiteMetadataCopy;
  header: SiteHeaderCopy;
  footer: SiteFooterCopy;
  person: PersonSchemaCopy;
  nav: ActionCopy[];
};

/* ------------------------------------------------------------------ *
 * Reusable component wording
 * ------------------------------------------------------------------ */

export type UiCopy = {
  /** `<ul>` label for a row of technology tags. */
  tagListAriaLabel: string;
  proofStrip: {
    /** Rendered as `기록 / 01`, `기록 / 02`, … */
    counterLabel: string;
    /** Appended to each cell's aria-label. */
    opensNewTab: string;
  };
  caseRow: {
    linkLabel: string;
    /** Appended after the case title in the link's aria-label. */
    linkAriaSuffix: string;
  };
  sourceList: {
    defaultTitle: string;
    privateTitle: string;
    privateBody: string;
  };
  boundaryNote: {
    label: string;
  };
};

/* ------------------------------------------------------------------ *
 * Diagram wording
 * ------------------------------------------------------------------ */

export type LayerDiagramCopy = {
  caption: string;
  count: string;
  layers: LabelledDetail[];
  noteLabel: string;
  note: string;
};

/** One labelled step of the identity flow diagram. */
export type IdentityFlowStep = {
  step: string;
  title: string;
  detail: string;
};

export type IdentityFlowCopy = {
  caption: string;
  before: {
    step: string;
    listAriaLabel: string;
    sources: LabelledDetail[];
  };
  gate: IdentityFlowStep;
  result: IdentityFlowStep & { machineValue: string };
  after: {
    step: string;
    description: string;
    listAriaLabel: string;
    features: string[];
  };
  note: {
    ariaLabel: string;
    title: string;
    body: string;
    disclaimer: string;
  };
};

/** One column of the human/AI responsibility split. */
export type ContractColumn = {
  label: string;
  items: string[];
};

/* ------------------------------------------------------------------ *
 * Route wording
 * ------------------------------------------------------------------ */

export type HomeCopy = {
  meta: PageMetaCopy;
  hero: {
    eyebrow: string;
    titleLead: string;
    /** Rendered in the accent colour on its own line. */
    titleAccent: string;
    lede: string;
    actions: ActionCopy[];
  };
  proof: SectionCopy & { link: ActionCopy };
  work: SectionCopy & { aside: string };
  cta: CtaCopy;
};

export type WorkIndexCopy = {
  meta: PageMetaCopy;
  intro: PageIntroCopy;
  listAriaLabel: string;
};

export type CaseDetailCopy = {
  fallbackTitle: string;
  backLabel: string;
  /** Rendered as `작업 01 · 통합멤버십 · O2O`. */
  indexPrefix: string;
  roleLabel: string;
  tocAriaLabel: string;
  tocTitle: string;
  boundary: {
    navLabel: string;
    label: string;
    title: string;
  };
  pagination: {
    ariaLabel: string;
    previous: string;
    next: string;
  };
  contractDiagram: {
    caption: string;
  };
  sdkDiagram: {
    caption: string;
    contract: string;
    platforms: LabelledDetail[];
    description: string;
  };
  previewDiagram: {
    caption: string;
    steps: LabelledDetail[];
  };
};

/** One emphasised achievement under a career entry. */
export type CareerHighlight = {
  id: string;
  title: string;
  /** Substring of `title` to render bold and in the accent colour. */
  emphasis?: string;
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
  /** How the work was taken on, e.g. `프리랜서 · Flutter Developer`. */
  role?: string;
  description: string;
  sources?: SourceLink[];
};

export type AboutCopy = {
  meta: PageMetaCopy;
  intro: PageIntroCopy;
  actions: {
    ariaLabel: string;
    resumeLabel: string;
    emailLabel: string;
  };
  career: SectionCopy & { entries: CareerEntry[] };
  projects: SectionCopy & { entries: ProjectEntry[] };
  skills: SectionCopy & { listAriaLabel: string; items: LabelledDetail[] };
  education: SectionCopy & { detail: string };
  teaching: SectionCopy & { items: LabelledDetail[] };
};

export type AskCopy = {
  meta: PageMetaCopy;
  intro: PageIntroCopy;
  console: {
    title: string;
    mode: string;
    searchLabel: string;
    searchPlaceholder: string;
    suggestionsAriaLabel: string;
    /** `askEntries` ids offered as suggestion chips, in order. */
    featuredIds: string[];
    answerLabel: string;
    knownLabel: string;
    boundaryLabel: string;
    sourcesAriaLabel: string;
    empty: {
      label: string;
      title: string;
      body: string;
      linkLabel: string;
    };
  };
};

/**
 * The résumé at `/resume`. It reads career, projects, skills, education and
 * teaching straight from `about`, and the public records from `publicProof`,
 * so a wording change lands on both pages at once. Only the résumé-specific
 * framing lives here — and `public/resume.pdf` is printed from this page, so
 * there is one source rather than three drifting copies.
 */
export type ResumeCopy = {
  meta: PageMetaCopy;
  /** Line under the name. */
  headline: string;
  /** When the résumé was last reviewed. */
  updatedAt: string;
  contactAriaLabel: string;
  download: ActionCopy;
  /** Opening paragraphs: how this person works, not what they shipped. */
  profile: string[];
  /** Section labels, in render order. */
  sections: {
    profile: string;
    career: string;
    projects: string;
    skills: string;
    records: string;
    education: string;
    teaching: string;
  };
};

export type ProofCopy = {
  meta: PageMetaCopy;
  intro: PageIntroCopy;
  listAriaLabel: string;
};

export type NotFoundCopy = {
  eyebrow: string;
  title: string;
  description: string;
  actions: ActionCopy[];
};
