import Image from "next/image";
import articles from "../../data/blogs.json";

export default function Page({ params }) {
  const data = articles.find((article) => article.id === params.id);

  return (
    <article>
      <h1>{data.title}</h1>
      <Image src={data.imageURL} width={500} height={300} alt={data.title} />
      {data.content.map((item, idx) => {
        if (item.type === "image") {
          return (
            <Image
              src={item.url}
              width={300}
              height={200}
              alt={data.title}
              key={item.url}
            />
          );
        } else if (item.type === "heading") {
          return <h2 key={idx}>{item.text}</h2>;
        } else if (item.type === "text") {
          return <p key={idx}>{item.content}</p>;
        } else if (item.type === "list") {
          return (
            <div key={idx}>
              <h3>{item.listTitle}</h3>
              <ul>
                {item.content.map((el) => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
            </div>
          );
        } else {
          console.log("Unknown type", item.type);
        }
      })}
    </article>
  );
}
