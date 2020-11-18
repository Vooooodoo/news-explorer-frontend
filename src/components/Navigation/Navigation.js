import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import WhiteHeaderLogo from '../../images/header__logo_color_white.svg';
import BlackHeaderLogo from '../../images/header__logo_color_black.svg';
import './Navigation.css';

function Navigation(props) {
  const { pathname } = useLocation();
  const currentUser = React.useContext(CurrentUserContext);

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

  const burgerBtnClass = `${
    pathname === '/saved-news'
      ? 'navigation__burger-button_color_black'
      : 'navigation__burger-button_color_white'
  }`;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  function openMobileMenu() {
    setIsMobileMenuOpen(true);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

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
              <button className={`navigation__desktop-button navigation__desktop-button_type_signout navigation__text opacity tab tap-highlight ${desktopBtnClass} ${signoutBtnClass}`} type="button" onClick={props.onSignOut}>{currentUser.name}</button>
            </>)

          : (<>
              <button className={`navigation__desktop-button navigation__desktop-button_type_signin navigation__text opacity tab tap-highlight ${desktopBtnClass}`} type="button" onClick={props.onSignIn}>Авторизоваться</button>
            </>)
        }
      </nav>
      <button className={`navigation__burger-button tap-highlight ${burgerBtnClass}`} onClick={openMobileMenu} type="button" aria-label="Открыть меню."></button>
      {isMobileMenuOpen
        &&  (<nav className="navigation__mobile-menu">
              <Link to="/" className="navigation__mobile-link tap-highlight">Главная</Link>
              {props.loggedIn
                ? (<>
                    <Link to="/saved-news" className="navigation__mobile-link tap-highlight">Сохранённые статьи</Link>
                    <button className="navigation__mobile-button navigation__mobile-button_type_signout tab tap-highlight" type="button" onClick={props.onSignOut}>{currentUser.name}</button>
                  </>)

                : (<>
                    <button className="navigation__mobile-button tab tap-highlight" type="button" onClick={props.onSignIn}>Авторизоваться</button>
                  </>)
              }
              <Link to="/" className="navigation__mobile-logo tap-highlight">
                <img src={WhiteHeaderLogo} alt="Логотип в виде текста NewsExplorer." />
              </Link>
              <button className="navigation__mobile-close tap-highlight" onClick={closeMobileMenu} type="button" aria-label="Закрыть меню."></button>
            </nav>)
      }
    </div>
  );
}

export default Navigation;
