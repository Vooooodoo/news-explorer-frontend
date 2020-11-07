import React from 'react';
import { useLocation } from 'react-router-dom';
import NewsCardBtn from '../NewsCardBtn/NewsCardBtn';
import './NewsCard.css';

function NewsCard(props) {
  const { pathname } = useLocation();

  return (
    <li className="news-card tap-highlight">
      <img className="news-card__photo" src={props.photo} alt={`${props.title}.`} />
      {pathname === '/saved-news'
        ? (<span className="news-card__tag">{props.tagText}</span>)
        : (<></>)
      }
      <NewsCardBtn />
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
