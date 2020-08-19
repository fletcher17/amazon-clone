import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/header/header';
import Home from './Components/home/home';
import CheckOut from './Components/checkout/checkout';
import './App.css';

function App() {
  return (
    <Router>
    <div className="app">

      <Switch>
        <Route path='/checkout'>
          <Header/>
          <CheckOut/>
        </Route>
        <Route path='/login'>
          <h1>Login page</h1>
        </Route>
        <Route path='/'>
          <Header/>
          <Home/>
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
