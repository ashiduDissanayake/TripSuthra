import LatestNews from "@/components/news/latestNews";
import ScrollNews from "@/components/news/scrollNews";
import { useEffect, useState } from "react";

export default function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=cb72372e42f440e08b548b3cb6f3b756`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <>
      {articles.map((news, index) => (
        <LatestNews
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
          date={news.publishedAt}
        />
      ))}
      <ScrollNews articles={articles} />
    </>
  );
}
