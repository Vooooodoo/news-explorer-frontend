import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';
import { ArticlesContext } from '../../contexts/ArticlesContext';

function NewsCardList() {
  const articles = React.useContext(ArticlesContext);

  return (
    <ul className="news-card-list">
      {articles.map((article) => (
        (<NewsCard
          photo={article.urlToImage}
          tagText="Природа"
          date={article.publishedAt}
          title={article.title}
          text={article.description}
          src={article.source.name}
        />)
      ))}
    </ul>
  );
}

export default NewsCardList;
