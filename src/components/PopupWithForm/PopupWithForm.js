import React from 'react';
import { Link } from 'react-router-dom';
import './PopupWithForm.css';

function PopupWithForm(props) {
  return (
    <div id={props.id} className={props.isOpen ? 'popup popup_opened' : 'popup popup_closed'}>
      <form name={props.id.slice(0, props.id.indexOf('-'))} className="popup__form-container" onSubmit={props.onSubmit}>
        <h3 className="popup__form-title">{props.title}</h3>
        <fieldset className="popup__fieldset">
          <input id="login-popup-input-email" name="email" className="popup__input-text" type="email" placeholder="Введите почту" minLength="2" maxLength="40" required />
          <span id="login-popup-input-email-error" className="popup__input-error popup__input-error_hidden"></span>
          <input id="login-popup-input-password" name="password" className="popup__input-text" type="password" placeholder="Введите пароль" minLength="8" maxLength="40" required />
          <span id="login-popup-input-password-error" className="popup__input-error popup__input-error_hidden"></span>
          {props.children}
        </fieldset>
        <button className="popup__submit popup__submit_valid tap-highlight" type="submit">{props.btnText}</button>
        <button className="popup__close opacity tab tap-highlight" type="button" aria-label={props.ariaLabel} onClick={props.onClose}></button>
        <div className="popup__wrapper">
          <span className="popup__text">или</span>
          <Link className="popup__link opacity tap-highlight" to={props.linkRoute}>{props.linkText}</Link>
      </div>
      </form>
    </div>
  );
}

export default PopupWithForm;
