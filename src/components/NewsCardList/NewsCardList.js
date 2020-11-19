import React from 'react';
import { useLocation } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList(props) {
  const { pathname } = useLocation();
  const isSavedNews = pathname === '/saved-news';

  return (
    <ul className="news-card-list">
      {props.articles.map((article, index) => (
        <NewsCard
          key={index}
          id={isSavedNews && article._id}
          photo={isSavedNews ? article.image : article.urlToImage}
          tagText={isSavedNews && article.keyword}
          date={isSavedNews ? article.date : article.publishedAt }
          title={article.title}
          text={isSavedNews ? article.text : article.description }
          src={isSavedNews ? article.source : article.source.name}
          url={isSavedNews ? article.link : article.url}
          onCardBtnClick={props.onCardBtnClick}
          isArticleMarked={props.isArticleMarked}
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
