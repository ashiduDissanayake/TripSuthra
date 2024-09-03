import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import LatestNews from "@/components/news/latestNews";
import ScrollNews from "@/components/news/scrollNews";
import { useEffect, useState } from "react";

export default function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/everything?q=tourism&apiKey=cb72372e42f440e08b548b3cb6f3b756`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  // Separate the main news from the rest
  const mainNews = articles[0];
  const otherNews = articles.slice(1);
  const displayNews = otherNews.slice(0, 10); // Display only the first 10 news items

  return (
    <>
      <div className="mb-4">
        <Navbar />
      </div>
      <div className="mb-4">
        {mainNews && (
          <LatestNews
            title={mainNews.title}
            description={mainNews.description}
            src={mainNews.urlToImage}
            url={mainNews.url}
            date={mainNews.publishedAt}
            isMain={true}
          />
        )}
      </div>
      <div className="flex w-full gap-4">
        <div className="w-3/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayNews.map((news, index) => (
              <LatestNews
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
                date={news.publishedAt}
              />
            ))}
          </div>
        </div>
        <div className="w-2/5">
          <ScrollNews articles={articles} />
        </div>
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </>
  );
}
