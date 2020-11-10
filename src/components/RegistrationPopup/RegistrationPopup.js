import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegistrationPopup(props) {
  return (
    <PopupWithForm
      id="registrtion-popup"
      title="Регистрация"
      btnText="Зарегистрироваться"
      ariaLabel="Закрыть форму регистрации."
      linkText="Войти"
      children={
        <>
          <label for="popup-name-input" className="popup__input-label">Имя</label>
          <input id="popup-name-input" name="name" className="popup__input" type="text" placeholder="Введите своё имя" minLength="2" maxLength="40" pattern="^[А-Яа-яЁёa-zA-Z\s\-]+$" required />
          <span id="popup-name-input-error" className="popup__input-error popup__input-error_hidden"></span>
        </>
      }
      isOpen={props.isOpen}
      onClose={props.onClose}
      onClick={props.onClick}
    />
  );
}

export default RegistrationPopup;
