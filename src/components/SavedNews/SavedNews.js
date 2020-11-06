import React from 'react';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

function SavedNews() {
  return (
    <main>
      <section className="saved-news">
        <NewsCardList />
      </section>
    </main>
  );
}

export default SavedNews;
