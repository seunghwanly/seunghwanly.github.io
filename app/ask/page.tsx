import type { Metadata } from "next";
import { AskExplorer } from "@/components/ask-explorer";
import { PageIntro } from "@/components/content-ui";

export const metadata: Metadata = {
  title: "질문 찾기",
  description:
    "이승환의 경력과 대표 작업에서 자주 묻는 질문을 찾아볼 수 있습니다.",
};

export default function AskPage() {
  return (
    <main id="main-content">
      <PageIntro
        title="경력과 작업에서 궁금한 내용을 찾아보세요."
        description="미리 정리한 질문에서 답을 찾습니다. 검색어는 저장하거나 서버로 보내지 않습니다."
      />
      <div className="ask-page-shell site-shell">
        <AskExplorer />
      </div>
    </main>
  );
}
