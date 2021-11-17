import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Main from './index/Main';
import Login from './login/Login';
import Panel from './panel/Panel';

function App() {
  return (
    <div>
    <Router>
      <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/panel">
           <Panel />
          </Route>
          <Route path="/">
            <Main />
          </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;