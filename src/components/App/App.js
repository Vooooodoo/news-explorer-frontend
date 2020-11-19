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
import mainApi from '../../utils/MainApi';
import * as newsExplorerAuth from '../../utils/NewsExplorerAuth';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { ArticlesContext } from '../../contexts/ArticlesContext';

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isRegistrationPopupOpen, setIsRegistrationPopupOpen] = React.useState(false);
  const [isTooltipPopupOpen, setIsTooltipPopupOpen] = React.useState(false);
  const [isSubmitErr, setIsSubmitErr] = React.useState(false);
  const [submitErrMessage, setSubmitErrMessage] = React.useState('');

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  const [articles, setArticles] = React.useState([]);
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [articlesRenderCount, setArticlesRenderCount] = React.useState(6);
  const [isArticleMarked, setIsArticleMarked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [isReqErr, setIsReqErr] = React.useState(false);
  const [isShowMoreBtn, setIsShowMoreBtn] = React.useState(true);

  const history = useHistory();
  //* массив из локального хранилища с последними найденными статьями
  const localArticles = JSON.parse(localStorage.getItem('articles'));

  function handleRegistration(email, password, name) {
    newsExplorerAuth.register(email, password, name)
      .then((res) => {
        if (res._id) {
          openTooltipPopup();
        } else {
          setIsSubmitErr(true);
          setSubmitErrMessage(res.message);
        }
      })

      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен:', err);
      });
  }

  function handleLogin(email, password) {
    newsExplorerAuth.authorize(email, password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          closeAllPopups();
        } else {
          console.log(data.message);
        }
      })

      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен:', err);
      });
  }

  function checkToken() {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      newsExplorerAuth.checkToken(jwt)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
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
    setIsSubmitErr(false);
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

  function handleSearchArticles(keyword) {
    setIsLoading(true);
    setIsLoaded(false);
    setIsNotFound(false);
    setIsReqErr(false);
    setIsShowMoreBtn(true);
    setArticlesRenderCount(6);

    newsApi.get(keyword)
      .then((res) => {
        //* добавим в объект статьи поле с ключевым словом из запроса пользователя
        const articlesWithKeyword = res.articles.map((item) => ({ ...item, keyword }));

        if (res.articles.length === 0) {
          setIsNotFound(true);
        } else {
          setIsLoaded(true);
        }

        if (res.articles.length > 0 && res.articles.length <= 3) {
          setIsShowMoreBtn(false);
        }

        setArticles(articlesWithKeyword.slice(0, 3));

        //* перед помещением в local storage, массив с сервера нужно обязательно перевести в JSON-строку
        localStorage.setItem('articles', JSON.stringify(articlesWithKeyword));
      })

      .catch((err) => {
        setIsReqErr(true);
        console.log('Ошибка. Запрос не выполнен:', err);
      })

      .finally(() => {
        setIsLoading(false);
      });
  }

  function saveCard(article) {
    if (loggedIn) {
      const keyword = articles[0].keyword;
      const reqBody = {
        keyword: keyword,
        title: article.title,
        text: article.description,
        date: article.publishedAt,
        source: article.source.name,
        link: article.url,
        image: article.urlToImage,
      }

      mainApi.post('/articles', reqBody)
        .then((data) => {
          setSavedArticles([...savedArticles, data]);
        })

        .catch((err) => {
          console.log('Ошибка. Запрос не выполнен:', err);
        });
    }
  }

  function deleteCard(article) {
    mainApi.delete(`/articles/${article._id}`)
      .then(() => {
        const newArticlesArray = savedArticles.filter((item) => (item._id !== article._id));
        setSavedArticles(newArticlesArray);
      })

      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен:', err);
      });
  }

  function changeIsMarked(evt) {
    const card = evt.target.parentElement;

    if (evt.target.classList.contains('news-card-btn_type_marked-save')) {

    }
  }

  function checkIsMarked() {
    articles.forEach((item) => {

    })
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

    mainApi.get('/articles')
      .then((articles) => {
        setSavedArticles(articles);
      })

      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен:', err);
      });
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

  React.useEffect(() => {
    checkToken();
  }, [loggedIn]);

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
              onCardBtnClick={saveCard}
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
            articles={savedArticles}
            onCardBtnClick={deleteCard}
          />
        </Switch>
        <Footer />

        <RegistrationPopup
          isOpen={isRegistrationPopupOpen}
          onClose={closeAllPopups}
          onClick={openLoginPopup}
          onSubmit={handleRegistration}
          isSubmitErr={isSubmitErr}
          submitErrMessage={submitErrMessage}
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
