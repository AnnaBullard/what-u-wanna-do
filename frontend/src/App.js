import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

import Topbar from "./components/Topbar";
import ListExperiences from './components/ListExperiences';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Topbar isLoaded={isLoaded}/>
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <ListExperiences />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
