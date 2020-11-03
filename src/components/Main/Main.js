import React from 'react';
import About from '../About/About';
import NewsCards from '../NewsCards/NewsCards';
import Spinner from '../Spinner/Spinner';
import NotFound from '../NotFound/NotFound';

function Main(props) {
  return (
    <main>
      <NewsCards />
      {/* <Spinner />
      <NotFound /> */}
      <About />
    </main>
  );
}

export default Main;
