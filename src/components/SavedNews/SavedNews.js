import React from 'react';
import SavedResult from '../SavedResult/SavedResult';

function SavedNews(props) {
  return (
    <main>
      <SavedResult
        articles={props.articles}
        onCardBtnClick={props.onCardBtnClick}
      />
    </main>
  );
}

export default SavedNews;
