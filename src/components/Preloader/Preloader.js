import React from 'react';
import './Preloader.css';

function Preloader({ component: Component }) {
  return (
    <section className="preloader">
      <Component />
    </section>
  );
}

export default Preloader;
