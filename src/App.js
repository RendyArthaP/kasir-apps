import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from "react-redux"
import Kasir from './pages/Kasir';
import Login from './pages/Login';

const App = () => {
  const userLogin = useSelector((state) => state.handleUsers)
  const isLoggedIn = userLogin.isLogin
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/kasir-app">
          {isLoggedIn ? <Kasir /> : <Redirect to="/"/>} 
        </Route>
      </Switch>
    </Router>
  )
}

export default App
