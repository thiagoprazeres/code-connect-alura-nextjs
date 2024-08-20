import { CardPost } from "@/components/CardPost";
import { postsData } from "../data/posts.js";

export default function Page() {
  return (
    <main className="px-5 py-3">
      <h1 className="text-4xl font-extrabold dark:text-white">Lista de postagens</h1>
      <div className="stats bg-dark shadow">
        <div className="stat">
          <div className="stat-title">Total de posts</div>
          <div className="stat-value">{postsData.posts.length}</div>
          <div className="stat-desc">escritos</div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {postsData.posts.map((post) => (
          <CardPost post={post} key={post.id} />
        ))}
      </div>
    </main>
  );
}
