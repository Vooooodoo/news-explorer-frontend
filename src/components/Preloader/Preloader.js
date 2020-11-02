import React from 'react';
import preloaderLogo from '../../images/preloader__logo.svg';
import './Preloader.css';

function Preloader(props) {
  return (
    <section className="preloader">
      {props.children}
    </section>
  );
}

export default Preloader;
