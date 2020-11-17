import React from 'react';
import About from '../About/About';
import SearchResult from '../SearchResult/SearchResult';
import Spinner from '../Spinner/Spinner';
import NotFound from '../NotFound/NotFound';
import ReqErr from '../ReqErr/ReqErr';

function Main(props) {
  return (
    <main>
      {props.isLoading && <Spinner />}
      {props.isLoaded && <SearchResult onShowMore={props.onShowMore} />}
      {props.isNotFound && <NotFound />}
      {props.isReqErr && <ReqErr />}
      <About />
    </main>
  );
}

export default Main;
