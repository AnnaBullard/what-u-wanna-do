import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

import Topbar from "./components/Topbar";
import ListExperiences from './components/ListExperiences';
import ExperiencePage from './components/ExperiencePage';
import MemoriesPage from './components/MemoriesPage';

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
          <Route exact path="/experiences/:id">
            <ExperiencePage />
          </Route>
          <Route path={["/memories/:type", "/memories"]}>
            <MemoriesPage />
          </Route>
          <Route>
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
