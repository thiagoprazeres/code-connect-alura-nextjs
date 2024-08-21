import Link from "next/link";
import { Avatar } from "../Avatar";

import Image from "next/image";

export const CardPost = ({ post }) => {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="bg-base-300 card w-full shadow-xl"
    >
      <article>
        <header>
          <figure>
            <Image
              src={post.cover}
              alt={`Capa do post de título: ${post.title}`}
              title={`Capa do post de título: ${post.title}`}
              width={945}
              height={300}
              className="rounded-t-lg"
            />
          </figure>
        </header>
        <section className="card-body">
          <h3 className="card-title">{post.title}</h3>
          <p>{post.body}</p>
          <footer className="card-actions">
            <Avatar imageSrc={post.author.avatar} name={post.author.username} />
          </footer>
        </section>
      </article>
    </Link>
  );
};
