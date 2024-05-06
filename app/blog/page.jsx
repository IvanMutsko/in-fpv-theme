import Link from "next/link";
import Image from "next/image";
import articles from "../data/blogs.json";

export default function Blog() {
  return (
    <>
      <h1>Різні статті на FPV тематику</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <article>
              <Link href={`blog/${article.id}`}>
                <Image
                  src={article.imageURL}
                  width={300}
                  height={200}
                  alt={article.id}
                />
                <h2>{article.title}</h2>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
