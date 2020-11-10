import React from 'react';
import './PopupWithForm.css';

function PopupWithForm(props) {
  const [emailInputError, setEmailInputError] = React.useState({
    errClass: '',
    errMessage: '',
  });
  const [passwordInputError, setPasswordInputError] = React.useState({
    errClass: '',
    errMessage: '',
  });

  // const [isNameValid, setIsNameValid] = React.useState(false);
  // const [isLinkValid, setIsLinkValid] = React.useState(false);
  // const [isFormValid, setIsFormValid] = React.useState(false);


  // React.useEffect(() => {
  //   if (isNameValid && isLinkValid) setIsFormValid(true);

  //   return () => {
  //     setIsFormValid(false);
  //   };
  // }, [isNameValid, isLinkValid]);


  React.useEffect(() => {
    setEmailInputError({
      errClass: '',
      errMessage: '',
    });
    setPasswordInputError({
      errClass: '',
      errMessage: '',
    });
  }, [props.isOpen]);


  function handleEmailChange(evt) {
    if (!evt.target.validity.valid) {
      setEmailInputError({
        errClass: 'popup__input-error_shown',
        errMessage: evt.target.validationMessage,
      });
    } else {
      setEmailInputError({
        errClass: '',
        errMessage: '',
      });
    }
  }

  function handlePasswordChange(evt) {
    if (!evt.target.validity.valid) {
      setPasswordInputError({
        errClass: 'popup__input-error_shown',
        errMessage: evt.target.validationMessage,
      });
    } else {
      setPasswordInputError({
        errClass: '',
        errMessage: '',
      });
    }
  }

  return (
    <div id={props.id} className={`popup ${props.isOpen ? 'popup_opened' : 'popup_closed'}`}>
      <form name={props.id.slice(0, props.id.indexOf('-'))} className="popup__form-container" onSubmit={props.onSubmit} noValidate>
        <h3 className="popup__form-title">{props.title}</h3>
        <fieldset className="popup__fieldset">
          <label for="popup-email-input" className="popup__input-label">Email</label>
          <input id="popup-email-input" name="email" className="popup__input" onChange={handleEmailChange} type="email" placeholder="Введите почту" minLength="2" maxLength="40" required />
          <span id="popup-email-input-error" className={`popup__input-error popup__input-error_hidden ${emailInputError.errClass}`}>{emailInputError.errMessage}</span>

          <label for="popup-password-input" className="popup__input-label">Пароль</label>
          <input id="popup-password-input" name="password" className="popup__input" onChange={handlePasswordChange} type="password" placeholder="Введите пароль" minLength="8" maxLength="40" required />
          <span id="popup-password-input-error" className={`popup__input-error popup__input-error_hidden ${passwordInputError.errClass}`}>{passwordInputError.errMessage}</span>

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
