import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/header__logo.svg';
import './Navigation.css';

function Navigation(props) {
  return (
    <div className="navigation">
      <Link to="/" className="navigation__logo-link tap-highlight">
        <img className="navigation__logo" src={headerLogo} alt="Логотип в виде текста NewsExplorer." />
      </Link>
      {props.loggedIn
        ? (<nav className="navigation__menu">
            <Link to="/" className="navigation__link navigation__text opacity tap-highlight">Главная</Link>
            <Link to="/saved-news" className="navigation__link navigation__text opacity tap-highlight">Сохранённые статьи</Link>
            <button className="navigation__desktop-button navigation__desktop-button_signout navigation__text opacity tab tap-highlight" type="button" onClick={props.onSignOut}>Грета</button>
          </nav>)

        : (<nav className="navigation__menu">
            <Link to="/" className="navigation__link navigation__text opacity tap-highlight">Главная</Link>
            <button className="navigation__desktop-button navigation__desktop-button_signin navigation__text opacity tab tap-highlight" type="button">Авторизоваться</button>
          </nav>)
      }
      <button className="navigation__mobile-button tap-highlight" type="button" aria-label="Открыть меню."></button>
    </div>
  );
}

export default Navigation;
