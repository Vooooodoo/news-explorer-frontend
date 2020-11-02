import React from 'react';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import Spinner from '../Spinner/Spinner';

function Main(props) {
  return (
    <main>
      {/* <Preloader
        component={Spinner}
      /> */}
      {/* <Preloader
        component={NotFound}
      /> */}
      <About />
    </main>
  );
}

export default Main;
