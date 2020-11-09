import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);

  const [loggedIn, setLoggedIn] = React.useState(true);

  const history = useHistory();

  function handleSignOut() {
    setLoggedIn(false);
    history.push('/');
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
  }

  function handleSignIn() {
    setIsLoginPopupOpen(true);
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
  [isLoginPopupOpen]);

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
  [isLoginPopupOpen]);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header
            loggedIn={loggedIn}
            onSignOut={handleSignOut}
            onSignIn={handleSignIn}
          />
          <Main />
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
      />
    </>
  );
}

export default App;
