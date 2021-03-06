import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedResult.css';

function SavedResult(props) {
  return (
    <section className="saved-result">
      <NewsCardList
        articles={props.articles}
        onCardBtnClick={props.onCardBtnClick}
      />
    </section>
  );
}

export default SavedResult;
