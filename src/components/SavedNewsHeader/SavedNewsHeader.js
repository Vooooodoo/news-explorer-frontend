import React from 'react';
import Navigation from '../Navigation/Navigation';
import './SavedNewsHeader.css';

function SavedNewsHeader(props) {
  return (
    <header className="saved-news-header">
      <Navigation
        loggedIn={props.loggedIn}
        onSignOut={props.onSignOut}
      />
      <h1 className="saved-news-header__title">Сохранённые статьи</h1>
      <p className="saved-news-header__subtitle">Грета, у&nbsp;вас 5&nbsp;сохранённых статей</p>
      <p className="saved-news-header__text">По&nbsp;ключевым словам: <b>Природа</b>, <b>Тайга</b> и&nbsp;<b>2-м другим</b></p>
    </header>
  );
}

export default SavedNewsHeader;
