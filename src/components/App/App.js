import React from 'react';
import {
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import RegistrationPopup from '../RegistrationPopup/RegistrationPopup';
import TooltipPopup from '../TooltipPopup/TooltipPopup';
import newsApi from '../../utils/NewsApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ArticlesContext } from '../../contexts/ArticlesContext';

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = React.useState(false);
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(true);

  const [currentUser, setCurrentUser] = React.useState({});
  const [articles, setArticles] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);

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

    newsApi.get(theme)
      .then((res) => {
        if (res.articles.length === 0) {
          setIsNotFound(true);
        } else {
          setIsLoaded(true);
        }

        setArticles(res.articles.slice(0, 3))
      })

      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен:', err);
      })

      .finally(() => {
        setIsLoading(false);
      });
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Header
            loggedIn={loggedIn}
            onSignOut={handleSignOut}
            onSignIn={openLoginPopup}
            onSearchArticles={handleSearchArticles}
          />
          <ArticlesContext.Provider value={articles}>
            <Main
              isLoading={isLoading}
              isLoaded={isLoaded}
              isNotFound={isNotFound}
            />
          </ArticlesContext.Provider>
        </Route>

        <Route path="/saved-news">
          <SavedNewsHeader
            loggedIn={loggedIn}
            onSignOut={handleSignOut}
          />
          <SavedNews />
        </Route>
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
    </CurrentUserContext.Provider>
  );
}

export default App;
