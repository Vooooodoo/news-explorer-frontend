import React from 'react';
import Preloader from '../Preloader/Preloader';
import './Spinner.css';

function Spinner() {
  return (
    <Preloader
      children={
        <div className="preloader__spinner"></div>
      }
      subTitle="Идет поиск новостей..."
    />
  );
}

export default Spinner;
