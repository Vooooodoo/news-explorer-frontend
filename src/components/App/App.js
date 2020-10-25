import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';

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
    </>
  );
}

export default App;
