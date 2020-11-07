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
import WhiteHeaderLogo from '../../images/header__logo_color_white.svg';
import BlackHeaderLogo from '../../images/header__logo_color_black.svg';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const history = useHistory();

  function handleSignOut() {
    setLoggedIn(false);
    history.push('/');
  }

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header
            loggedIn={loggedIn}
            onSignOut={handleSignOut}
            logo={WhiteHeaderLogo}
            linkClass="navigation__link navigation__link_color_white navigation__text navigation__text_color_white opacity tap-highlight"
            btnClass="navigation__desktop-button navigation__desktop-button_signout navigation__text navigation__text_color_white opacity tab tap-highlight"
          />
          <Main />
        </Route>

        <Route path="/saved-news">
          <SavedNewsHeader
            loggedIn={loggedIn}
            onSignOut={handleSignOut}
            logo={BlackHeaderLogo}
            linkClass="navigation__link navigation__link_color_black navigation__text navigation__text_color_black opacity tap-highlight"
            btnClass="navigation__desktop-button navigation__desktop-button_signout navigation__text navigation__text_color_black opacity tab tap-highlight"
          />
          <SavedNews />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
