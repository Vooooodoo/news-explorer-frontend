import React from 'react';
import {
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';
import TooltipPopup from '../TooltipPopup/TooltipPopup';
import newsApi from '../../utils/NewsApi';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ArticlesContext } from '../../contexts/ArticlesContext';

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = React.useState(false);
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});

  const [articles, setArticles] = React.useState([]);
  const [articlesRenderCount, setArticlesRenderCount] = React.useState(6);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [isReqErr, setIsReqErr] = React.useState(false);

  const history = useHistory();

  function handleSignOut() {
    setLoggedIn(false);
    history.push('/');
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegistrationPopupOpen(false);
    setIsTooltipPopupOpen(false);
  }

  function openLoginPopup() {
    closeAllPopups();
    setIsLoginPopupOpen(true);
  }

  function openRegistrationPopup() {
    closeAllPopups();
    setIsRegistrationPopupOpen(true);
  }

  function openTooltipPopup() {
    closeAllPopups();
    setIsTooltipPopupOpen(true);
  }

  function handleSearchArticles(theme) {
    setIsLoading(true);
    setIsLoaded(false);
    setIsNotFound(false);
    setIsReqErr(false);

    newsApi.get(theme)
      .then((res) => {
        if (res.articles.length === 0) {
          setIsNotFound(true);
        } else {
          setIsLoaded(true);
        }

        setArticles(res.articles.slice(0, 3));

        //* вторым аргументом может быть только строка,
        //* поэтому массив с сервера нужно обязательно перевести в JSON-строку
        localStorage.setItem('articles', JSON.stringify(res.articles));
      })

      .catch((err) => {
        setIsReqErr(true);
        console.log('Ошибка. Запрос не выполнен:', err);
      })

      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleShowMore() {
    const articles = JSON.parse(localStorage.getItem('articles'));

    setArticlesRenderCount(articlesRenderCount + 3);
    setArticles(articles.slice(0, articlesRenderCount));
  }

  React.useEffect(() => {
    function handleEsc(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  },
  [isLoginPopupOpen, isRegistrationPopupOpen]);

  React.useEffect(() => {
    function handleOverlayClick(evt) {
      if (evt.target.classList.contains('popup')) {
        closeAllPopups();
      }
    }

    document.addEventListener('click', handleOverlayClick);

    return () => {
      document.removeEventListener('click', handleOverlayClick);
    };
  },
  [isLoginPopupOpen, isRegistrationPopupOpen]);

  //! контекст статей можно потом вернуть конкретно на компонент Main
  //! в остальных местах он вроде не нужен...
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <ArticlesContext.Provider value={articles}>
      <LoggedInContext.Provider value={loggedIn}>
        <Switch>
          <Route exact path="/">
            <Header
              loggedIn={loggedIn}
              onSignOut={handleSignOut}
              onSignIn={openLoginPopup}
              onSearchArticles={handleSearchArticles}
            />
            <Main
              isLoading={isLoading}
              isLoaded={isLoaded}
              isNotFound={isNotFound}
              isReqErr={isReqErr}
              onShowMore={handleShowMore}
            />
          </Route>

          <ProtectedRoute
            path="/saved-news"
            firstComponent={SavedNewsHeader}
            secondComponent={SavedNews}
            loggedIn={loggedIn}
            onSignOut={handleSignOut}
          />
        </Switch>
        <Footer />

        <LoginPopup
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          onClick={openRegistrationPopup}
          />
        <RegistrationPopup
          isOpen={isRegistrationPopupOpen}
          onClose={closeAllPopups}
          onClick={openLoginPopup}
          />
        <TooltipPopup
          isOpen={isTooltipPopupOpen}
          onClose={closeAllPopups}
          onClick={openLoginPopup}
        />
      </LoggedInContext.Provider>
      </ArticlesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
