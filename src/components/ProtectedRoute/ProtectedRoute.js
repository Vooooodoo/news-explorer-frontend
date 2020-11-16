import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ firstComponent: FirstComponent, secondComponent: SecondComponent, ...props }) {
  return (
    <Route>
      {
        () => (props.loggedIn
          ? <>
              <FirstComponent {...props} />
              <SecondComponent {...props} />
            </>
          : <Redirect to="/" />)
      }
    </Route>
  );
}

export default ProtectedRoute;
