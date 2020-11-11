import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {
  return (
    <div id={props.id} className={`popup ${props.isOpen ? 'popup_opened' : 'popup_closed'}`}>
      <form name={props.id.slice(0, props.id.indexOf('-'))} className="popup__form-container" onSubmit={props.onSubmit} noValidate>
        <h3 className="popup__form-title">{props.title}</h3>
        <fieldset className="popup__fieldset">
          <label for="popup-email-input" className="popup__input-label">Email</label>
          <input id="popup-email-input" name="email" className="popup__input" onChange={props.onEmailChange} value={props.email} type="email" placeholder="Введите почту" minLength="2" maxLength="40" required />
          <span className={`popup__input-error popup__input-error_type_validation popup__input-error_hidden ${props.emailInputErrClass}`}>{props.emailInputErrMessage}</span>

          <label for="popup-password-input" className="popup__input-label">Пароль</label>
          <input id="popup-password-input" name="password" className="popup__input" onChange={props.onPassChange} value={props.password} type="password" placeholder="Введите пароль" minLength="8" maxLength="40" required />
          <span className={`popup__input-error popup__input-error_type_validation popup__input-error_hidden ${props.passInputErrClass}`}>{props.passInputErrMessage}</span>

          {props.id === 'registration-popup'
            && (<>
                <label for="popup-name-input" className="popup__input-label">Имя</label>
                <input id="popup-name-input" name="name" className="popup__input" onChange={props.onNameChange} value={props.name} type="text" placeholder="Введите своё имя" minLength="2" maxLength="40" pattern="^[А-Яа-яЁёa-zA-Z\s\-]+$" required />
                <span className={`popup__input-error popup__input-error_type_validation popup__input-error_hidden ${props.nameInputErrClass}`}>{props.nameInputErrMessage}</span>
              </>)
          }
          <span className="popup__input-error popup__input-error_type_registration popup__input-error_hidden">Такой пользователь уже есть</span>
        </fieldset>
        <button className={`popup__submit tap-highlight ${props.isFormValid ? 'popup__submit_valid' : 'popup__submit_invalid'}`} type="submit">{props.btnText}</button>
        <button className="popup__close opacity tab tap-highlight" type="button" aria-label={props.ariaLabel} onClick={props.onClose}></button>
        <div className="popup__wrapper">
          <span className="popup__text">или</span>
          <button className="popup__link opacity tap-highlight tab" type="button" onClick={props.onClick}>{props.linkText}</button>
        </div>
      </form>
    </div>
  );
}

export default PopupWithForm;
