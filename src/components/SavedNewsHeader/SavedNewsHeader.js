import React from 'react';
import { declOfNum } from '../../utils/helpers';
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

  const articleDecl = declOfNum(savedArticles.length, ['статья', 'статьи', 'статей']);
  const savedDecl = declOfNum(savedArticles.length, ['сохраненная', 'сохраненных', 'сохраненных']);
  const otherDecl =
    sortedKeywords.slice(3).length === 0
    ? ''
    : declOfNum(sortedKeywords.slice(3).length, ['другому', 'другим', 'другим']);
  const topThreeKeywords = sortedKeywords.slice(0, 3).join(', ');
  const topTwoKeywords = sortedKeywords.slice(0, 2).join(', ');
  const allKeywords =
    sortedKeywords.length <= 3
    ? topThreeKeywords
    : `${topTwoKeywords} и ${sortedKeywords.slice(3).length}`;
  const keywordPostfix =
    sortedKeywords.slice(3).length > 4 || sortedKeywords.slice(3).length < 2
    ? ''
    : '-м';

  return (
    <header className="saved-news-header">
      <Navigation
        loggedIn={props.loggedIn}
        onSignOut={props.onSignOut}
      />
      <h1 className="saved-news-header__title">Сохранённые статьи</h1>
      <p className="saved-news-header__subtitle">{`${currentUser.name}, у вас ${props.articles.length} ${savedDecl} ${articleDecl}`}</p>
      <p className="saved-news-header__text">По&nbsp;ключевым словам: <b>{`${allKeywords}${keywordPostfix} ${otherDecl}`}</b></p>
    </header>
  );
}

export default SavedNewsHeader;
