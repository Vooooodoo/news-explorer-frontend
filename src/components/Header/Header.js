import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/header__logo.svg';
import './Header.css';

function Header(props) {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={headerLogo} alt="Логотип в виде текста NewsExplorer." />
        {props.loggedIn
          ? (<nav>
              <Link to="/" className="header__link header__text">Главная</Link>
              <Link to="/saved-news" className="header__link header__text">Сохранённые статьи</Link>
              <button className="header__button header__button_logout header__text" type="button" onClick={props.onSignOut}>Грета</button>
            </nav>)

          : (<nav>
              <Link to="/" className="header__link header__text">Главная</Link>
              <button className="header__button header__button_login header__text" type="button">Авторизоваться</button>
            </nav>)
        }
      </div>
      <h1 className="header__title">Что творится в&nbsp;мире?</h1>
      <p className="header__subtitle">Находите самые свежие статьи на&nbsp;любую тему и&nbsp;сохраняйте в&nbsp;своём личном кабинете.</p>
      <form>
        <input />
        <button></button>
      </form>
    </header>
  );
}

export default Header;
