import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import './SearchResult.css';

function SearchResult() {
  return (
    <section className="search-result">
      <h3 className="search-result__title">Результаты поиска</h3>
      <NewsCardList />
      <ShowMoreBtn />
    </section>
  );
}

export default SearchResult;
