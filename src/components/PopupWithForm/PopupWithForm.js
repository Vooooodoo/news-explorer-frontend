import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {
  const formName = props.id.slice(0, props.id.indexOf('-'))
  // const form = document.getElementsByName(props.id.slice(0, props.id.indexOf('-')));
  // const inputList = form.querySelectorAll('.popup__input');
  // const submitBtn = form.querySelector('.popup__submit');
  console.log(formName);



  function showInputError(evt) {
    const inputErrorElement = document.querySelector(`#${evt.target.id}-error`);

    inputErrorElement.classList.add('popup__input-error_shown');
    inputErrorElement.textContent = evt.target.validationMessage;
  }

  function hideInputError(evt) {
    const inputErrorElement = document.querySelector(`#${evt.target.id}-error`);

    inputErrorElement.classList.remove('popup__input-error_shown');
    inputErrorElement.textContent = '';
  }

  function isValid(evt) {
    if (!evt.target.validity.valid) {
      showInputError(evt);
    } else {
      hideInputError(evt);
    }
  }

  // function hasInvalidInput() {
  //   return this._inputList.some((item) => {
  //     return !item.validity.valid;
  //   }); //*прошлись по массиву инпутов внутри формы и проверили каждый на валидность, если найдется хоть один невалидный - метод вернет true
  // }

  // _toggleButtonState() {
  //   if (this._hasInvalidInput()) {
  //     this.disableSubmitButton();
  //   } else {
  //     this._submitButtonElement.classList.remove(this._invalidButtonClass);
  //     this._submitButtonElement.disabled = false;
  //   }
  // }

  // resetInputErrors() {
  //   this._inputList.forEach(item => {
  //     this._hideInputError(item);
  //   }); //*прошлись по массиву и для каждого инпута скрыли ошибки
  // }

  // disableSubmitButton() {
  //   this._submitButtonElement.classList.add(this._invalidButtonClass);
  //   this._submitButtonElement.disabled = true;
  // }

  return (
    <div id={props.id} className={props.isOpen ? 'popup popup_opened' : 'popup popup_closed'}>
      <form name={props.id.slice(0, props.id.indexOf('-'))} className="popup__form-container" onSubmit={props.onSubmit} noValidate>
        <h3 className="popup__form-title">{props.title}</h3>
        <fieldset className="popup__fieldset">
          <label for="popup-email-input" className="popup__input-label">Email</label>
          <input id="popup-email-input" name="email" className="popup__input" onChange={isValid} type="email" placeholder="Введите почту" minLength="2" maxLength="40" required />
          <span id="popup-email-input-error" className="popup__input-error popup__input-error_hidden"></span>

          <label for="popup-password-input" className="popup__input-label">Пароль</label>
          <input id="popup-password-input" name="password" className="popup__input" onChange={isValid} type="password" placeholder="Введите пароль" minLength="8" maxLength="40" required />
          <span id="popup-password-input-error" className="popup__input-error popup__input-error_hidden"></span>

          {props.children}
        </fieldset>
        <button className="popup__submit popup__submit_valid tap-highlight" type="submit">{props.btnText}</button>
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
