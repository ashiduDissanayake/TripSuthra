import {ScrollShadow} from "@nextui-org/react";
import Content from "./trendingNews";

export default function scrollNews({articles}) {
  return (
    <ScrollShadow className="w-[500px] h-[400px]">
      {articles.map((news, index) => (
        <Content
          key={index}
          title={news.title}
          author={news.author}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
          date={news.publishedAt}
        />
      ))}
    </ScrollShadow>
  );
}