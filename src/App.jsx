import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';

import './App.scss';
import Home from './pages/Home';
import Test from './pages/Test';

function App() {
  return (
    <Router>
      <div style={{ position: 'absolute' }}>
        <Link to='/test'>👉 Test page</Link>
      </div>
      <Switch>
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
