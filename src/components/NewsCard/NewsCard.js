import React from 'react';
import './NewsCard.css';

function NewsCard(props) {
  return (
    <li className="news-card tap-highlight">
      <img className="news-card__photo" src={props.photo} alt={`${props.title}.`} />
      <button className={props.btnClass} type="button" aria-label={props.ariaLabel} onClick={props.onClick}></button>
      <span className="news-card__popup news-card__popup_hidden news-card__popup_shown">{props.popupText}</span>
      <div className="news-card__container">
        <p className="news-card__date">{props.date}</p>
        <h2 className="news-card__title">{props.title}</h2>
        <p className="news-card__text">{props.text}</p>
        <p className="news-card__src">{props.src}</p>
      </div>
    </li>
  );
}

export default NewsCard;
