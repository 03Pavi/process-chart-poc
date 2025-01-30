import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function ReadmePage() {
  const filePath = path.join(process.cwd(), "README.md");
  const markdownContent = fs.readFileSync(filePath, "utf-8");

  return (
    <div className="readme-container">
      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}
