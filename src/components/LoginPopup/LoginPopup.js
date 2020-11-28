import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function LoginPopup(props) {
  const errorsDefaultState = {
    errorClass: '',
    errorMessage: '',
  };
  const shownErrorClass = 'popup__input-error_shown';

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [emailInputError, setEmailInputError] = React.useState(errorsDefaultState);
  const [passwordInputError, setPasswordInputError] = React.useState(errorsDefaultState);

  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);
  const [isFormValid, setIsFormValid] = React.useState(false);

  function handleEmailChange(evt) {
    setEmail(evt.target.value);

    if (!evt.target.validity.valid) {
      setEmailInputError({
        errorClass: shownErrorClass,
        errorMessage: evt.target.validationMessage,
      });
      setIsEmailValid(false);
    } else {
      setEmailInputError(errorsDefaultState);
      setIsEmailValid(true);
    }
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);

    if (!evt.target.validity.valid) {
      setPasswordInputError({
        errorClass: shownErrorClass,
        errorMessage: evt.target.validationMessage,
      });
      setIsPasswordValid(false);
    } else {
      setPasswordInputError(errorsDefaultState);
      setIsPasswordValid(true);
    }
  }

  function resetInputErrors() {
    setEmailInputError(errorsDefaultState);
    setPasswordInputError(errorsDefaultState);
  }

  function resetFormFields() {
    setEmail('');
    setPassword('');
  }

  function resetValidationState() {
    setIsEmailValid(false);
    setIsPasswordValid(false);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onSubmit(email, password);
  }

  React.useEffect(() => {
    resetInputErrors();
    resetFormFields();
    resetValidationState();
  }, [props.isOpen]);

  React.useEffect(() => {
    if (isEmailValid && isPasswordValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isEmailValid, isPasswordValid]);

  return (
    <PopupWithForm
      id="login-popup"
      title="Вход"
      btnText="Войти"
      ariaLabel="Закрыть форму входа."
      linkText="Зарегистрироваться"
      email={email}
      password={password}
      emailInputErrClass={emailInputError.errorClass}
      emailInputErrMessage={emailInputError.errorMessage}
      passInputErrClass={passwordInputError.errorClass}
      passInputErrMessage={passwordInputError.errorMessage}
      isOpen={props.isOpen}
      isFormValid={isFormValid}
      onClose={props.onClose}
      onClick={props.onClick}
      onEmailChange={handleEmailChange}
      onPassChange={handlePasswordChange}
      onSubmit={handleSubmit}
    />
  );
}

export default LoginPopup;
