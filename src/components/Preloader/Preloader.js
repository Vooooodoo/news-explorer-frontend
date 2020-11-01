import React from 'react';
import preloaderLogo from '../../images/preloader__logo.svg';
import './Preloader.css';

function Preloader() {
  return (
    <section className="preloader">
      <img className="preloader__logo" src={preloaderLogo} alt="Лупа с грустным смайликом внутри." />
      <h3 className="preloader__title">Ничего не&nbsp;найдено</h3>
      <p className="preloader__subtitle">
        К&nbsp;сожалению по&nbsp;вашему запросу ничего не&nbsp;найдено.
      </p>
    </section>
  );
}

export default Preloader;
