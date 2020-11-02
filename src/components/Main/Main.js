import React from 'react';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';

function Main(props) {
  return (
    <main>
      <Preloader />
      <About
        children={
          <>
            <img className="preloader__logo" src={preloaderLogo} alt="Лупа с грустным смайликом внутри." />
            <h3 className="preloader__title">Ничего не&nbsp;найдено</h3>
            <p className="preloader__subtitle">
              К&nbsp;сожалению по&nbsp;вашему запросу ничего не&nbsp;найдено.
            </p>
          </>
        }
      />
    </main>
  );
}

export default Main;
