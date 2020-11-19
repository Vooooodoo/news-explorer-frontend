import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn';
import { ArticlesContext } from '../../contexts/ArticlesContext';
import './SearchResult.css';

function SearchResult(props) {
  const articles = React.useContext(ArticlesContext);

  return (
    <section className="search-result">
      <h3 className="search-result__title">Результаты поиска</h3>
      <NewsCardList
        articles={articles}
        onCardBtnClick={props.onCardBtnClick}
      />
      {props.isShowMoreBtn
        &&  <ShowMoreBtn
              onShowMore={props.onShowMore}
            />
      }
    </section>
  );
}

export default SearchResult;
