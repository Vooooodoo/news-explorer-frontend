import React from 'react';
import './TooltipPopup.css';

function TooltipPopup(props) {
  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : 'popup_closed'}`}>
      <div className="popup__form-container">
        <h3 className="popup__form-title">Пользователь успешно зарегистрирован!</h3>
        <button className="popup__tooltip-link opacity tap-highlight tab" type="button" onClick={props.onClick}>Войти</button>
        <button className="popup__close opacity tab tap-highlight" type="button" aria-label="Закрыть попап с подсказкой." onClick={props.onClose}></button>
      </div>
    </div>
  );
}

export default TooltipPopup;
