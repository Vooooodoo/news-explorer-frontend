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
      {props.isLoaded
        &&  <SearchResult
              onCardBtnClick={props.onCardBtnClick}
              onShowMore={props.onShowMore}
              isShowMoreBtn={props.isShowMoreBtn}
            />
      }
      {props.isNotFound && <NotFound />}
      {props.isReqErr && <ReqErr />}
      <About />
    </main>
  );
}

export default Main;
