import React from 'react';
import About from '../About/About';
import SearchResult from '../SearchResult/SearchResult';
import Spinner from '../Spinner/Spinner';
import NotFound from '../NotFound/NotFound';

function Main(props) {
  return (
    <main>
      <Spinner />
      <SearchResult
        articles={props.articles}
      />
      <NotFound />
      <About />
    </main>
  );
}

export default Main;
