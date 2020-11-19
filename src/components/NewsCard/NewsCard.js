import React from 'react';
import { useLocation } from 'react-router-dom';
import NewsCardBtn from '../NewsCardBtn/NewsCardBtn';
import './NewsCard.css';

function NewsCard(props) {
  const { pathname } = useLocation();
  const isSavedNews = pathname === '/saved-news';

  //* преобразуем дату в формат, подходящий для объекта Date
  const formattedDate = props.date.slice(0, props.date.indexOf('T'));
  //* создадим новый объект Date с русской локализацией
  const newDate = new Date(formattedDate).toLocaleString('ru', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  //* создадим массив из отдельных слов
  const dateArray = newDate.split(' ');
  //* соберем слова как в макете
  const date = `${dateArray[0]} ${dateArray[1]}, ${dateArray[2]}`;

  return (
    <li id={props.id} className="news-card tap-highlight">
      <img className="news-card__photo" src={props.photo} alt={`${props.title}.`} />
      {isSavedNews
        && (<span className="news-card__tag">{props.tagText}</span>)
      }
      <NewsCardBtn
        onCardBtnClick={props.onCardBtnClick}
        isArticleMarked={props.isArticleMarked}
      />
      <a className="news-card__link" href={props.url} target="_blank">
        <div className="news-card__container">
          <p className="news-card__date">{isSavedNews ? props.date : date}</p>
          <h2 className="news-card__title">{props.title}</h2>
          <p className="news-card__text">{props.text}</p>
          <p className="news-card__src">{props.src}</p>
        </div>
      </a>
    </li>
  );
}

export default NewsCard;
