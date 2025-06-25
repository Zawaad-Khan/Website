import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const posts = getSortedPostsData();
  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <main className="max-w-prose mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Zawaad Khan</h1>
      <p className="mb-8 text-lg text-gray-600">Essays on strategy, economics, and reality.</p>
      {posts.map(({ id, title, date }) => (
        <div key={id} className="mb-6">
          <a href={`/${id}`} className="text-2xl text-accent font-bold">{title}</a>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      ))}
    </main>
  );
}