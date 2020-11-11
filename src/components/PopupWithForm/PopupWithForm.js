import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {
  const errorsDefaultState = {
    errorClass: '',
    errorMessage: '',
  };
  const shownErrorClass = 'popup__input-error_shown';

  const [emailInputError, setEmailInputError] = React.useState(errorsDefaultState);
  const [passwordInputError, setPasswordInputError] = React.useState(errorsDefaultState);
  const [nameInputError, setNameInputError] = React.useState(errorsDefaultState);

  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);
  const [isNameValid, setIsNameValid] = React.useState(false);
  const [isFormValid, setIsFormValid] = React.useState(false);

  function handleEmailChange(evt) {
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
    const forms = document.querySelectorAll('.popup__form-container');

    forms.forEach(item => {
      item.reset();
    });
  }

  function resetValidationState() {
    setIsEmailValid(false);
    setIsPasswordValid(false);
    setIsNameValid(false);
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
    <div id={props.id} className={`popup ${props.isOpen ? 'popup_opened' : 'popup_closed'}`}>
      <form name={props.id.slice(0, props.id.indexOf('-'))} className="popup__form-container" onSubmit={props.onSubmit} noValidate>
        <h3 className="popup__form-title">{props.title}</h3>
        <fieldset className="popup__fieldset">
          <label for="popup-email-input" className="popup__input-label">Email</label>
          <input id="popup-email-input" name="email" className="popup__input" onChange={handleEmailChange} type="email" placeholder="Введите почту" minLength="2" maxLength="40" required />
          <span className={`popup__input-error popup__input-error_type_validation popup__input-error_hidden ${emailInputError.errorClass}`}>{emailInputError.errorMessage}</span>

          <label for="popup-password-input" className="popup__input-label">Пароль</label>
          <input id="popup-password-input" name="password" className="popup__input" onChange={handlePasswordChange} type="password" placeholder="Введите пароль" minLength="8" maxLength="40" required />
          <span className={`popup__input-error popup__input-error_type_validation popup__input-error_hidden ${passwordInputError.errorClass}`}>{passwordInputError.errorMessage}</span>

          {props.id === 'registration-popup'
            && (<>
                <label for="popup-name-input" className="popup__input-label">Имя</label>
                <input id="popup-name-input" name="name" className="popup__input" onChange={handleNameChange} type="text" placeholder="Введите своё имя" minLength="2" maxLength="40" pattern="^[А-Яа-яЁёa-zA-Z\s\-]+$" required />
                <span className={`popup__input-error popup__input-error_type_validation popup__input-error_hidden ${nameInputError.errorClass}`}>{nameInputError.errorMessage}</span>
              </>)
          }
          <span className="popup__input-error popup__input-error_type_registration popup__input-error_hidden">Такой пользователь уже есть</span>
        </fieldset>
        <button className={`popup__submit tap-highlight ${isFormValid ? 'popup__submit_valid' : 'popup__submit_invalid'}`} type="submit">{props.btnText}</button>
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
