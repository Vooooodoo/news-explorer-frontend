import React from 'react';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';
import Spinner from '../Spinner/Spinner';

function Main(props) {
  return (
    <main>
      {/* <Spinner />
      <NotFound /> */}
      <About />
    </main>
  );
}

export default Main;
