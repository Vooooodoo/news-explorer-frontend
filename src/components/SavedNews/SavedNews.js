import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

function SavedNews() {
  return (
    <section className="saved-news">
      <NewsCardList />
    </section>
  );
}

export default SavedNews;
