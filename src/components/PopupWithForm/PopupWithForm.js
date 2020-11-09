import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {
  return (
    <div id={props.id} className={props.isOpen ? 'popup popup_opened' : 'popup popup_closed'}>
      <form name={props.id.slice(0, props.id.indexOf('-'))} className="popup__form-container" onSubmit={props.onSubmit}>
        <h3 className="popup__form-title">{props.title}</h3>
        <fieldset className="popup__fieldset">
          <label for="popup-email-input" className="popup__input-label">Email</label>
          <input id="popup-email-input" name="email" className="popup__input" type="email" placeholder="Введите почту" minLength="2" maxLength="40" required />
          <span id="popup-email-input-error" className="popup__input-error popup__input-error_hidden"></span>

          <label for="popup-password-input" className="popup__input-label">Пароль</label>
          <input id="popup-password-input" name="password" className="popup__input" type="password" placeholder="Введите пароль" minLength="8" maxLength="40" required />
          <span id="popup-password-input-error" className="popup__input-error popup__input-error_hidden"></span>

          {props.children}
        </fieldset>
        <button className="popup__submit popup__submit_valid tap-highlight" type="submit">{props.btnText}</button>
        <button className="popup__close opacity tab tap-highlight" type="button" aria-label={props.ariaLabel} onClick={props.onClose}></button>
        <div className="popup__wrapper">
          <span className="popup__text">или</span>
          <button className="popup__link opacity tap-highlight" onClick={props.onClick}>{props.linkText}</button>
      </div>
      </form>
    </div>
  );
}

export default PopupWithForm;
