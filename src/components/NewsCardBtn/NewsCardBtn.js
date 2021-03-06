import React from 'react';
import { useLocation } from 'react-router-dom';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { ArticlesContext } from '../../contexts/ArticlesContext';
import './NewsCardBtn.css';

function NewsCardBtn(props) {
  const { pathname } = useLocation();
  const loggedIn = React.useContext(LoggedInContext);
  const { savedArticles } = React.useContext(ArticlesContext);
  const [isTooltipShown, setIsTooltipShown] = React.useState(false);

  const savedArticleBtnClass = `${
    savedArticles.some((item) => item.title === props.article.title)
      ? 'news-card-btn_type_marked-save'
      : 'news-card-btn_type_normal-save'
  }`;

  const btnClass = `${
    pathname === '/saved-news'
      ? 'news-card-btn_type_normal-delete news-card-btn_type_hover-delete news-card-btn_type_focus-delete'
      : `${savedArticleBtnClass} news-card-btn_type_hover-save news-card-btn_type_focus-save`
  }`;

  const popupText = `${
    pathname === '/saved-news'
      ? 'Убрать из сохранённых'
      : 'Войдите, чтобы сохранять статьи'
  }`;

  const ariaLabel = `${
    pathname === '/saved-news'
      ? 'Убрать статью из сохранённых.'
      : 'Сохранить статью.'
  }`;

  function handleMouseEnter() {
    if (pathname === '/saved-news' || !loggedIn) {
      setIsTooltipShown(true);
    }
  }

  function handleMouseLeave() {
    setIsTooltipShown(false);
  }

  function handleCardBtnClick() {
    props.onCardBtnClick(props.article);
  }

  return (
    <>
      <button className={`news-card-btn ${btnClass}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleCardBtnClick} type="button" aria-label={ariaLabel}></button>
      {isTooltipShown
        && (<span className="news-card-btn__popup news-card-btn__popup_hidden news-card-btn__popup_shown">{popupText}</span>)
      }
    </>
  );
}

export default NewsCardBtn;
