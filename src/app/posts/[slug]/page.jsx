import markdownToHtml from "../../lib/markdownToHtml";
import { postsData } from "../../../data/posts";
import { Avatar } from "@/components/Avatar";

import Image from "next/image";

export async function generateStaticParams() {
  return postsData.posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const post = postsData.posts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  return {
    title: post.title,
  };
}

export default async function PostDetails({ params }) {
  // Encontrar o post que corresponde ao slug
  const post = postsData.posts.find((post) => post.slug === params.slug);

  // Caso o post não seja encontrado, pode retornar uma página 404 ou mensagem de erro
  if (!post) {
    return <p>Post não encontrado</p>;
  }

  const contentHtml = await markdownToHtml(post.markdown);

  return (
    <section className="bg-primary-content px-5 py-3 lg:px-8 lg:py-5">
      <nav className="breadcrumbs text-sm" aria-label="Breadcrumb">
        <ul>
          <li>
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="mr-0.5 h-4 w-4 stroke-current"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              Posts
            </a>
          </li>
          <li aria-current="page">{post.title}</li>
        </ul>
      </nav>
      <article className="mt-5">
        <h2 className="text-3xl font-black mb-3">{post.title}</h2>
        <Image src={post.cover} alt={post.title} width={945} height={300} className="mb-3 w-full" />
        <p>{post.body}</p>
        <h3 className="text-xl font-bold my-3">Código:</h3>
        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className="mockup-code"
        />
        <div className="mt-8">
          <Avatar imageSrc={post.author.avatar} name={post.author.username} />
        </div>
      </article>
    </section>
  );
}
