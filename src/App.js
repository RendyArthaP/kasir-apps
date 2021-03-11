import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Menubar from './components/Menubar';
import Kasir from './pages/Kasir';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Menubar />
      <Route exact path="/" component={Login}/>
      <Route exact path="/kasir-app" component={Kasir}/>
    </Router>
  )
}

export default App
