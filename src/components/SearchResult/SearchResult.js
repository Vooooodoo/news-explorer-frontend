import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import './SearchResult.css';

function SearchResult(props) {
  return (
    <section className="search-result">
      <h3 className="search-result__title">Результаты поиска</h3>
      <NewsCardList />
      <ShowMoreBtn
        onShowMore={props.onShowMore}
      />
    </section>
  );
}

export default SearchResult;
