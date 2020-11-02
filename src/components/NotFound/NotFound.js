import React from 'react';
import notFoundLogo from '../../images/not-found__logo.svg';
import './NotFound.css';

function NotFound() {
  return (
    <>
      <img className="not-found__logo" src={notFoundLogo} alt="Лупа с грустным смайликом внутри." />
      <h3 className="not-found__title">Ничего не&nbsp;найдено</h3>
      <p className="not-found__subtitle">
        К&nbsp;сожалению по&nbsp;вашему запросу ничего не&nbsp;найдено.
      </p>
    </>
  );
}

export default NotFound;
