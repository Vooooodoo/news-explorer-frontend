import React from 'react';
import './NewsCardBtn.css';

function NewsCardBtn(props) {
  return (
    <>
      <button className={props.btnClass} type="button" aria-label={props.ariaLabel} onClick={props.onClick}></button>
      <span className="news-card-btn__popup news-card-btn__popup_hidden news-card-btn__popup_shown">{props.popupText}</span>
    </>
  );
}

export default NewsCardBtn;
