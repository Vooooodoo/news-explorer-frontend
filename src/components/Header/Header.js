import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/header__logo.svg';
import './Header.css';

function Header(props) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo-link tap-highlight">
          <img className="header__logo" src={headerLogo} alt="Логотип в виде текста NewsExplorer." />
        </Link>
        {props.loggedIn
          ? (<nav className="header__menu">
              <Link to="/" className="header__link header__text opacity tab tap-highlight">Главная</Link>
              <Link to="/saved-news" className="header__link header__text opacity tab tap-highlight">Сохранённые статьи</Link>
              <button className="header__nav-button header__nav-button_signout header__text opacity tab tap-highlight" type="button" onClick={props.onSignOut}>Грета</button>
            </nav>)

          : (<nav className="header__menu">
              <Link to="/" className="header__link header__text opacity tab tap-highlight">Главная</Link>
              <button className="header__nav-button header__nav-button_signin header__text opacity tab tap-highlight" type="button">Авторизоваться</button>
            </nav>)
        }
        <button className="header__mobile-button tap-highlight" type="button" aria-label="Открыть меню."></button>
      </div>
      <h1 className="header__title">Что творится в&nbsp;мире?</h1>
      <p className="header__subtitle">Находите самые свежие статьи на&nbsp;любую тему и&nbsp;сохраняйте в&nbsp;своём личном кабинете.</p>
      <form className="header__form">
        <input className="header__input" placeholder="Введите тему новости" />
        <button className="header__search-button header__text tap-highlight" type="submit">Искать</button>
      </form>
    </header>
  );
}

export default Header;
