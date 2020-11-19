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

  //* создадим массив объектов
  const keywordsObjects = [...new Set(keywords)]
    .map(keyword => {
      const object = {};

      object.keyword = keyword; //* поле с ключевым словом
      object.quantity = keywords.filter((item) => (item === keyword)).length; //* поле с количеством ключевых слов

      return object;
    });
  //* отсортируем объекты по количеству ключевых слов, от большего к меньшему
  const sortedKeywordsObjects = keywordsObjects.sort((a, b) => (b.quantity - a.quantity));
  //* создадим массив только из отсортированных ключевых слов
  const sortedKeywords = sortedKeywordsObjects.map(item => {
    return item.keyword;
  });

  console.log(sortedKeywords);

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
