import React from 'react';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';

function Main(props) {
  return (
    <main>
      <Preloader />
      <About />
    </main>
  );
}

export default Main;
