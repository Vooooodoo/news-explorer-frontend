import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function LoginPopup(props) {
  return (
    <PopupWithForm
      id="login-popup"
      title="Вход"
      btnText="Войти"
      ariaLabel="Закрыть форму входа."
      linkText="Зарегистрироваться"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onClick={props.onClick}
    />
  );
}

export default LoginPopup;
