import React from 'react';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';

function Main(props) {
  return (
    <main>
      <Preloader
        component={NotFound}
      />
      <About />
    </main>
  );
}

export default Main;
