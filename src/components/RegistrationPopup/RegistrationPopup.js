import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegistrationPopup(props) {
  return (
    <PopupWithForm
      id="registration-popup"
      title="Регистрация"
      btnText="Зарегистрироваться"
      ariaLabel="Закрыть форму регистрации."
      linkText="Войти"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onClick={props.onClick}
    />
  );
}

export default RegistrationPopup;
