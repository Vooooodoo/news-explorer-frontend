import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import newsCardPhotoFirst from '../../images/news-card__photo_name_1.jpg';
import newsCardPhotoSecond from '../../images/news-card__photo_name_2.jpg';
import newsCardPhotoThird from '../../images/news-card__photo_name_3.jpg';
import './NewsCardList.css';

function NewsCardList(props) {
  return (
    <ul className="news-card-list">
      <NewsCard
        photo={newsCardPhotoFirst}
        tagClass="news-card__tag news-card__tag_hidden news-card__tag_shown"
        tagText="Природа"
        btnClass="news-card-btn news-card-btn_type_normal-save news-card-btn_type_marked-save news-card-btn_type_hover-save news-card-btn_type_focus-save"
        ariaLabel="Сохранить статью."
        popupText="Войдите, чтобы сохранять статьи"
        date="2&nbsp;августа, 2019"
        title="Национальное достояние&nbsp;&mdash; парки"
        text="В&nbsp;2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков&nbsp;&mdash; охраняемых территорий, где и&nbsp;сегодня каждый может приобщиться к&nbsp;природе."
        src="Лента.ру"
      />
      <NewsCard
        photo={newsCardPhotoSecond}
        tagClass="news-card__tag news-card__tag_hidden news-card__tag_shown"
        tagText="Природа"
        btnClass="news-card-btn news-card-btn_type_normal-save news-card-btn_type_marked-save news-card-btn_type_hover-save news-card-btn_type_focus-save"
        ariaLabel="Сохранить статью."
        popupText="Войдите, чтобы сохранять статьи"
        date="2&nbsp;августа, 2019"
        title="Лесные огоньки: история одной фотографии"
        text="Фотограф отвлеклась от&nbsp;освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из&nbsp;местных чудес природы."
        src="Медуза"
      />
      <NewsCard
        photo={newsCardPhotoThird}
        tagClass="news-card__tag news-card__tag_hidden news-card__tag_shown"
        tagText="Природа"
        btnClass="news-card-btn news-card-btn_type_normal-save news-card-btn_type_marked-save news-card-btn_type_hover-save news-card-btn_type_focus-save"
        ariaLabel="Сохранить статью."
        popupText="Войдите, чтобы сохранять статьи"
        date="2&nbsp;августа, 2019"
        title="&laquo;Первозданная тайга&raquo;: новый фотопроект Игоря Шпиленка"
        text="Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о&nbsp;необходимости их&nbsp;сохранения. В&nbsp;этот раз он&nbsp;отправился в&nbsp;Двинско-Пинежскую тайгу, где..."
        src="Риа"
      />
    </ul>
  );
}

export default NewsCardList;
