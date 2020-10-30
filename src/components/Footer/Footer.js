import React from 'react';
import { Link } from 'react-router-dom';
import githubLogo from '../../images/footer__logo_type_github.svg';
import facebookLogo from '../../images/footer__logo_type_facebook.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy;&nbsp;2020 NewsExplorer, Powered by News API</p>
      <nav className="footer__navigation">
        <div>
          <Link to="/" className="footer__link opacity tap-highlight">Главная</Link>
          <a className="footer__link opacity tap-highlight" href="https://praktikum.yandex.ru" target="_blank">Яндекс.Практикум</a>
        </div>
        <div>
          <a className="footer__logo-link opacity tap-highlight" href="https://github.com/Vooooodoo" target="_blank">
            <img className="footer__logo footer__logo_type_github" src={githubLogo} alt="Логотип Гитхаб." />
          </a>
          <a className="footer__logo-link opacity tap-highlight" href="https://www.facebook.com/" target="_blank">
            <img className="footer__logo footer__logo_type_facebook" src={facebookLogo} alt="Логотип Фэйсбук." />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
