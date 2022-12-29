import fs from "fs";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeExternalLinks from "rehype-external-links";
import rehypeStringify from "rehype-stringify";

const docsDirectory = path.join(process.cwd(), "..", "docs");

export async function getDocsHtmlMarkdown(filename: string) {
  const data = fs.readFileSync(path.join(docsDirectory, `${filename}.md`));
  const processed = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeExternalLinks, { target: "_blank" })
    .use(rehypeStringify)
    .process(data);

  return processed.toString();
}
