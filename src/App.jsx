import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { usePagination } from "@material-ui/lab/Pagination";
import React from 'react';

import './App.scss';
import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/test' exact>
          <Test />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
