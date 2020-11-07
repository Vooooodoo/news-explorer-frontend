import React from 'react';
import { Link } from 'react-router-dom';
import WhiteHeaderLogo from '../../images/header__logo_color_white.svg';
import BlackHeaderLogo from '../../images/header__logo_color_black.svg';
import './Navigation.css';

function Navigation(props) { //! цветовые отличия выноси в пропсы и опрокидывай до App, а версии авторизации в условии оставляй
  return (
    <div className="navigation">
      {props.loggedIn
        ? (<>
            <Link to="/" className="navigation__logo-link tap-highlight">
              <img className="navigation__logo" src={BlackHeaderLogo} alt="Логотип в виде текста NewsExplorer." />
            </Link>

            <nav className="navigation__menu">
              <Link to="/" className="navigation__link navigation__link_color_black navigation__text navigation__text_color_black opacity tap-highlight">Главная</Link>
              <Link to="/saved-news" className="navigation__link navigation__link_color_black navigation__text navigation__text_color_black opacity tap-highlight">Сохранённые статьи</Link>
              <button className="navigation__desktop-button navigation__desktop-button_signout navigation__text navigation__text_color_black opacity tab tap-highlight" type="button" onClick={props.onSignOut}>Грета</button>
            </nav>
          </>)

        : (<>
            <Link to="/" className="navigation__logo-link tap-highlight">
              <img className="navigation__logo" src={WhiteHeaderLogo} alt="Логотип в виде текста NewsExplorer." />
            </Link>

            <nav className="navigation__menu">
              <Link to="/" className="navigation__link navigation__link_color_white navigation__text navigation__text_color_white opacity tap-highlight">Главная</Link>
              <button className="navigation__desktop-button navigation__desktop-button_signin navigation__text navigation__text_color_white opacity tab tap-highlight" type="button">Авторизоваться</button>
            </nav>
          </>)
      }
      <button className="navigation__mobile-button tap-highlight" type="button" aria-label="Открыть меню."></button>
    </div>
  );
}

export default Navigation;
