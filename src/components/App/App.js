import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const history = useHistory();

  function handleSignOut() {
    setLoggedIn(false);
    history.push('/');
  }

  return (
    <>
      <Header
        loggedIn={loggedIn}
        onSignOut={handleSignOut}
      />
      <Main />
    </>
  );
}

export default App;
