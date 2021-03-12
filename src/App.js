import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Kasir from './pages/Kasir';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/kasir-app">
          <Kasir />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
