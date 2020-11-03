import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList(props) {
  return (
    <ul className="news-card-list"> {/* правила React требуют задавать ключи при работе со списками, они нужны для корректной работы движка */}
      {props.cards.map((card) => (
        (<NewsCard
          card={card}
          key={card._id}
          onCardSave={props.onCardSave}
          onCardDelete={props.onCardDelete}
        />)
      ))}
    </ul>
  );
}

export default NewsCardList;
