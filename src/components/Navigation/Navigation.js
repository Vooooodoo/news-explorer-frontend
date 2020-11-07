import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
  return (
    <div className="navigation">
      {props.loggedIn
        ? (<>
            <Link to="/" className="navigation__logo-link tap-highlight">
              <img className="navigation__logo" src={props.logo} alt="Логотип в виде текста NewsExplorer." />
            </Link>

            <nav className="navigation__menu">
              <Link to="/" className={props.linkClass}>Главная</Link>
              <Link to="/saved-news" className={props.linkClass}>Сохранённые статьи</Link>
              <button className={props.btnClass} type="button" onClick={props.onSignOut}>Грета</button>
            </nav>
          </>)

        : (<>
            <Link to="/" className="navigation__logo-link tap-highlight">
              <img className="navigation__logo" src={props.logo} alt="Логотип в виде текста NewsExplorer." />
            </Link>

            <nav className="navigation__menu">
              <Link to="/" className={props.linkClass}>Главная</Link>
              <button className={props.btnClass} type="button">Авторизоваться</button>
            </nav>
          </>)
      }
      <button className="navigation__mobile-button tap-highlight" type="button" aria-label="Открыть меню."></button>
    </div>
  );
}

export default Navigation;
