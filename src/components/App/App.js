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

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);

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
    </>
  );
}

export default App;
