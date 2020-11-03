import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList(props) {
  return (
    <ul className="news-card-list">
      <NewsCard
        card={card}
        key={card._id}
        onCardSave={props.onCardSave}
        onCardDelete={props.onCardDelete}
      />
    </ul>
  );
}

export default NewsCardList;
