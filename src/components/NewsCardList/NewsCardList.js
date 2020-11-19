import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList(props) {
  return (
    <ul className="news-card-list">
      {props.articles.map((article, index) => (
        <NewsCard
          key={index}
          photo={article.urlToImage}
          tagText="Природа"
          date={article.publishedAt}
          title={article.title}
          text={article.description}
          src={article.source.name}
          url={article.url}
          onCardBtnClick={props.onCardBtnClick}
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
