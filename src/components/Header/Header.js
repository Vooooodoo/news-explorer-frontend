import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/header__logo.svg';
import './Header.css';

function Header(props) {
  return (
    <header className="header">
      <div className="header__container">
      <Link to="/" className="header__logo-link">
        <img className="header__logo" src={headerLogo} alt="Логотип в виде текста NewsExplorer." />
      </Link>
        {props.loggedIn
          ? (<nav>
              <Link to="/" className="header__link header__text opacity tab">Главная</Link>
              <Link to="/saved-news" className="header__link header__text opacity tab">Сохранённые статьи</Link>
              <button className="header__nav-button header__nav-button_signout header__text opacity tab" type="button" onClick={props.onSignOut}>Грета</button>
            </nav>)

          : (<nav>
              <Link to="/" className="header__link header__text opacity tab">Главная</Link>
              <button className="header__nav-button header__nav-button_signin header__text opacity tab" type="button">Авторизоваться</button>
            </nav>)
        }
      </div>
      <h1 className="header__title">Что творится в&nbsp;мире?</h1>
      <p className="header__subtitle">Находите самые свежие статьи на&nbsp;любую тему и&nbsp;сохраняйте в&nbsp;своём личном кабинете.</p>
      <form className="header__form">
        <input className="header__input" placeholder="Введите тему новости" />
        <button className="header__search-button header__text" type="submit">Искать</button>
      </form>
    </header>
  );
}

export default Header;
