import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function LoginPopup(props) {
  return (
    <PopupWithForm
      id="login-popup"
      title="Вход"
      btnText="Войти"
      ariaLabel="Закрыть форму входа."
      isOpen={props.isOpen}
      onClose={props.onClose}
    />
  );
}

export default LoginPopup;
