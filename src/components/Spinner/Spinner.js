import React from 'react';
import Preloader from '../Preloader/Preloader';
import './Spinner.css';

function Spinner() {
  return (
    <Preloader
      children={
        <>
          <div className="preloader__spinner"></div>
          <h3 className="preloader__subtitle">Идет поиск новостей...</h3>
        </>
      }
    />
  );
}

export default Spinner;
