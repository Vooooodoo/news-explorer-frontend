import React from 'react';
import './Preloader.css';

function Preloader(props) {
  return (
    <section className="preloader">
      {props.children}
    </section>
  );
}

export default Preloader;
