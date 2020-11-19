import React from 'react';
import { useLocation } from 'react-router-dom';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import './NewsCardBtn.css';

function NewsCardBtn(props) {
  const loggedIn = React.useContext(LoggedInContext);
  const [isTooltipShown, setIsTooltipShown] = React.useState(false);
  const { pathname } = useLocation();

  const btnClass = `${
    pathname === '/saved-news'
      ? 'news-card-btn_type_normal-delete news-card-btn_type_hover-delete news-card-btn_type_focus-delete'
      : 'news-card-btn news-card-btn_type_normal-save news-card-btn_type_hover-save news-card-btn_type_focus-save'
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

  return (
    <>
      <button className={`news-card-btn ${btnClass}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={props.onCardBtnClick} type="button" aria-label={ariaLabel}></button>
      {isTooltipShown
        && (<span className="news-card-btn__popup news-card-btn__popup_hidden news-card-btn__popup_shown">{popupText}</span>)
      }
    </>
  );
}

export default NewsCardBtn;
