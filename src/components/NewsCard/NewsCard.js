import React from 'react';
import NewsCardBtn from '../NewsCardBtn/NewsCardBtn';
import './NewsCard.css';

function NewsCard(props) {
  return (
    <li className="news-card tap-highlight">
      <img className="news-card__photo" src={props.photo} alt={`${props.title}.`} />
      <span className={props.tagClass}>{props.tagText}</span>
      <NewsCardBtn
        btnClass={props.btnClass}
        ariaLabel={props.ariaLabel}
        popupText={props.popupText}
      />
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
