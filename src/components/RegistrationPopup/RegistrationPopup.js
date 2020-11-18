import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function RegistrationPopup(props) {
  const errorsDefaultState = {
    errorClass: '',
    errorMessage: '',
  };
  const shownErrorClass = 'popup__input-error_shown';

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  const [emailInputError, setEmailInputError] = React.useState(errorsDefaultState);
  const [passwordInputError, setPasswordInputError] = React.useState(errorsDefaultState);
  const [nameInputError, setNameInputError] = React.useState(errorsDefaultState);

  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);
  const [isNameValid, setIsNameValid] = React.useState(false);
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

  function handleNameChange(evt) {
    setName(evt.target.value);

    if (!evt.target.validity.valid) {
      setNameInputError({
        errorClass: shownErrorClass,
        errorMessage: evt.target.validationMessage,
      });
      setIsNameValid(false);
    } else {
      setNameInputError(errorsDefaultState);
      setIsNameValid(true);
    }
  }

  function resetInputErrors() {
    setEmailInputError(errorsDefaultState);
    setPasswordInputError(errorsDefaultState);
    setNameInputError(errorsDefaultState);
  }

  function resetFormFields() {
    setEmail('');
    setPassword('');
    setName('');
  }

  function resetValidationState() {
    setIsEmailValid(false);
    setIsPasswordValid(false);
    setIsNameValid(false);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onSubmit(email, password, name);
  }

  React.useEffect(() => {
    resetInputErrors();
    resetFormFields();
    resetValidationState();
  }, [props.isOpen]);

  React.useEffect(() => {
    if (isEmailValid && isPasswordValid && isNameValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [isEmailValid, isPasswordValid, isNameValid]);

  return (
    <PopupWithForm
      id="registration-popup"
      title="Регистрация"
      btnText="Зарегистрироваться"
      ariaLabel="Закрыть форму регистрации."
      linkText="Войти"
      email={email}
      password={password}
      name={name}
      emailInputErrClass={emailInputError.errorClass}
      emailInputErrMessage={emailInputError.errorMessage}
      passInputErrClass={passwordInputError.errorClass}
      passInputErrMessage={passwordInputError.errorMessage}
      nameInputErrClass={nameInputError.errorClass}
      nameInputErrMessage={nameInputError.errorMessage}
      isOpen={props.isOpen}
      isFormValid={isFormValid}
      onClose={props.onClose}
      onClick={props.onClick}
      onEmailChange={handleEmailChange}
      onPassChange={handlePasswordChange}
      onNameChange={handleNameChange}
      onSubmit={handleSubmit}
      isSubmitErr={props.isSubmitErr}
      submitErrMessage={props.submitErrMessage}
    />
  );
}

export default RegistrationPopup;
