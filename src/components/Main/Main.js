import React from 'react';
import About from '../About/About';
import SearchResult from '../SearchResult/SearchResult';
import Spinner from '../Spinner/Spinner';
import NotFound from '../NotFound/NotFound';

function Main(props) {
  return (
    <main>
      {props.isLoading
        && <Spinner />
      }
      {props.isLoaded
        && <SearchResult />
      }
      {props.isNotFound
        && <NotFound />
      }
      <About />
    </main>
  );
}

export default Main;
