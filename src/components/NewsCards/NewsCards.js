import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import './NewsCards.css';

function NewsCards() {
  return (
    <section className="news-cards">
      <h2 className="news-cards__title">Результаты поиска</h2>
      <NewsCardList />
      <ShowMoreBtn />
    </section>
  );
}

export default NewsCards;
