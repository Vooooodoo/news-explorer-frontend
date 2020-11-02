import React from 'react';
import './Spinner.css';

function Spinner() {
  return (
    <>
      <div className="preloader__spinner"></div>
      <h3 className="preloader__subtitle">Идет поиск новостей...</h3>
    </>
  );
}

export default Spinner;
