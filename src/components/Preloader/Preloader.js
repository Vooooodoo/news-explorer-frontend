import React from 'react';
import './Preloader.css';

function Preloader(props) {
  return (
    <section className="preloader">
      {props.children}
      <p className="preloader__subtitle">{props.subTitle}</p>
    </section>
  );
}

export default Preloader;
