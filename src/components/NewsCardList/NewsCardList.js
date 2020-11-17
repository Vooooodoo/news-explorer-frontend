import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { ArticlesContext } from '../../contexts/ArticlesContext';
import './NewsCardList.css';

function NewsCardList() {
  const articles = React.useContext(ArticlesContext);
  let reactKey = 0;

  return (
    <ul className="news-card-list">
      {articles.map((article) => (
        <NewsCard
          key={reactKey++}
          photo={article.urlToImage}
          tagText="Природа"
          date={article.publishedAt}
          title={article.title}
          text={article.description}
          src={article.source.name}
          url={article.url}
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
