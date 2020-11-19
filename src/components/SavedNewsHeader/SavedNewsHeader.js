import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ArticlesContext } from '../../contexts/ArticlesContext';
import Navigation from '../Navigation/Navigation';
import './SavedNewsHeader.css';

function SavedNewsHeader(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const { savedArticles } = React.useContext(ArticlesContext);

  const keywords = savedArticles.map(item => {
    return item.keyword;
  });

  console.log(keywords);

  return (
    <header className="saved-news-header">
      <Navigation
        loggedIn={props.loggedIn}
        onSignOut={props.onSignOut}
      />
      <h1 className="saved-news-header__title">Сохранённые статьи</h1>
      <p className="saved-news-header__subtitle">{`${currentUser.name}, у вас ${props.articles.length} сохранённых статей`}</p>
      <p className="saved-news-header__text">По&nbsp;ключевым словам: <b>Природа</b>, <b>Тайга</b> и&nbsp;<b>2-м другим</b></p>
    </header>
  );
}

export default SavedNewsHeader;
