import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export default function Post({ title, date, contentHtml }) {
  return (
    <main className="max-w-prose mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      <p className="text-sm text-gray-500 mb-8">{date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((name) => ({
    params: { slug: name.replace(/\.md$/, "") }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join("posts", `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processed = await remark().use(html).process(matterResult.content);
  return {
    props: {
      title: matterResult.data.title,
      date: matterResult.data.date,
      contentHtml: processed.toString()
    }
  };
}