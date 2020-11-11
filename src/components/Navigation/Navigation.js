import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import WhiteHeaderLogo from '../../images/header__logo_color_white.svg';
import BlackHeaderLogo from '../../images/header__logo_color_black.svg';
import './Navigation.css';

function Navigation(props) {
  const { pathname } = useLocation();

  const logo = `${
    pathname === '/saved-news'
      ? BlackHeaderLogo
      : WhiteHeaderLogo
  }`;

  const navigationClass = `${
    pathname === '/saved-news'
      ? 'navigation_location_saved-news navigation_color_black'
      : 'navigation_location_main navigation_color_white'
  }`;

  const linkClass = `${
    pathname === '/saved-news'
      ? 'navigation__text_color_black'
      : 'navigation__text_color_white'
  }`;

  const activeWhiteLinkClass = `${
    pathname === '/saved-news'
      ? 'navigation__link_state_inactive'
      : 'navigation__link_state_active-white'
  }`;

  const activeBlackLinkClass = `${
    pathname === '/saved-news'
      ? 'navigation__link_state_ative-black'
      : 'navigation__link_state_inactive'
  }`;

  const desktopBtnClass = `${
    pathname === '/saved-news'
      ? 'navigation__text_color_black navigation__desktop-button_color_black'
      : 'navigation__text_color_white navigation__desktop-button_color_white'
  }`;

  const signoutBtnClass = `${
    pathname === '/saved-news'
      ? 'navigation__desktop-button_type_black-signout'
      : 'navigation__desktop-button_type_white-signout'
  }`;

  const mobileBtnClass = `${
    pathname === '/saved-news'
      ? 'navigation__mobile-button_color_black'
      : 'navigation__mobile-button_color_white'
  }`;

  return (
    <div className={`navigation ${navigationClass}`}>
      <Link to="/" className="navigation__logo-link tap-highlight">
        <img className="navigation__logo" src={logo} alt="Логотип в виде текста NewsExplorer." />
      </Link>

      <nav className="navigation__menu">
        <Link to="/" className={`navigation__link navigation__text opacity tap-highlight ${linkClass} ${activeWhiteLinkClass}`}>Главная</Link>
        {props.loggedIn
          ? (<>
              <Link to="/saved-news" className={`navigation__link navigation__text opacity tap-highlight ${linkClass} ${activeBlackLinkClass}`}>Сохранённые статьи</Link>
              <button className={`navigation__desktop-button navigation__desktop-button_type_signout navigation__text opacity tab tap-highlight ${desktopBtnClass} ${signoutBtnClass}`} type="button" onClick={props.onSignOut}>Грета</button>
            </>)

          : (<>
              <button className={`navigation__desktop-button navigation__desktop-button_type_signin navigation__text opacity tab tap-highlight ${desktopBtnClass}`} type="button" onClick={props.onSignIn}>Авторизоваться</button>
            </>)
        }
      </nav>
      <button className={`navigation__mobile-button tap-highlight ${mobileBtnClass}`} onClick={props.onMobileBtnClick} type="button" aria-label="Открыть меню."></button>
    </div>
  );
}

export default Navigation;
