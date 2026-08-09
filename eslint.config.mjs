import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    // Korean copy lives in lib/content.ts only. Pages and components hold
    // structure and styling, so a Hangul string here means wording leaked out
    // of the single source and the two will drift apart.
    files: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "Literal[value=/[가-힣]/]",
          message: "한글 문구는 lib/content.ts 에 두고 여기서는 참조만 하세요.",
        },
        {
          selector: "TemplateElement[value.raw=/[가-힣]/]",
          message: "한글 문구는 lib/content.ts 에 두고 여기서는 참조만 하세요.",
        },
        {
          selector: "JSXText[value=/[가-힣]/]",
          message: "한글 문구는 lib/content.ts 에 두고 여기서는 참조만 하세요.",
        },
      ],
    },
  },
]);

export default eslintConfig;
