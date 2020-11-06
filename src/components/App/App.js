import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

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
          />
          <Main />
        </Route>

        <Route path="/saved-news">
          <Header
            loggedIn={loggedIn}
            onSignOut={handleSignOut}
          />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
