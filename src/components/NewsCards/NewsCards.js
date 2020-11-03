import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import './NewsCards.css';

function NewsCards() {
  return (
    <section className="news-cards">
      <h3 className="news-cards__title">Результаты поиска</h3>
      <NewsCardList />
      <ShowMoreBtn />
    </section>
  );
}

export default NewsCards;
