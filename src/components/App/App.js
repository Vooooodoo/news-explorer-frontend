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
import * as mainApi from '../../utils/MainApi';
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
  const [isShowMoreBtn, setIsShowMoreBtn] = React.useState(true);

  const history = useHistory();
  //* массив из локального хранилища с последними найденными статьями
  const localArticles = JSON.parse(localStorage.getItem('articles'));

  function handleRegistration(email, password, name) {
    mainApi.register(email, password, name)
      .then((res) => {
        if (res.data) {
          openTooltipPopup();
        } else {
          console.log('Прикрутить ошибку если надо, хотя она в кэтч есть, проверить!')
        }
      })

      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен:', err);
      });
  }

  function handleLogin(email, password) {
    mainApi.authorize(email, password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
        } else {
          console.log('Прикрутить ошибку если надо, опять дублируется кэтч!')
        }
      })

      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен:', err);
      });
  }

  //* если у пользователя есть токен в localStorage, эта функция проверит валидность токена
  function checkToken() {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      mainApi.checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
          } else {
            localStorage.removeItem('jwt');
          }
        })

        .catch((err) => {
          console.log('Ошибка. Запрос не выполнен:', err);
        });
    }
  }

  function handleSignOut() {
    setLoggedIn(false);
    history.push('/');
    localStorage.removeItem('jwt');
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
    setIsShowMoreBtn(true);
    setArticlesRenderCount(6);

    newsApi.get(theme)
      .then((res) => {
        if (res.articles.length === 0) {
          setIsNotFound(true);
        } else {
          setIsLoaded(true);
        }

        if (res.articles.length > 0 && res.articles.length <= 3) {
          setIsShowMoreBtn(false);
        }

        setArticles(res.articles.slice(0, 3));

        //* перед помещением в local storage, массив с сервера нужно обязательно перевести в JSON-строку
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
    setArticlesRenderCount(articlesRenderCount + 3);
    setArticles(localArticles.slice(0, articlesRenderCount));

    if (localArticles.length <= articlesRenderCount) {
      setIsShowMoreBtn(false);
    }
  }

  React.useEffect(() => {
    if (localArticles) {
      setIsLoaded(true);
      setArticles(localArticles.slice(0, 3));
    }
  }, []);

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
              isShowMoreBtn={isShowMoreBtn}
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

        <RegistrationPopup
          isOpen={isRegistrationPopupOpen}
          onClose={closeAllPopups}
          onClick={openLoginPopup}
          onSubmit={handleRegistration}
          />
        <LoginPopup
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          onClick={openRegistrationPopup}
          onSubmit={handleLogin}
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
