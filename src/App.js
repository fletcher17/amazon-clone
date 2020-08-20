import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/header/header';
import Home from './Components/home/home';
import CheckOut from './Components/checkout/checkout';
import Login from './Components/login/login';
import {useStateValue} from './Components/stateprovider/stateProvider';
import {auth} from './Components/firebase/firebase';
import './App.css';

function App() {
  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch({
          type:'SET_USER',
          user: authUser,
        })
      } else {
        //the user is logged out
        dispatch({
        type:'SET_USER',
        user: null,
        })
      }
    });
      return () => {
        unsubscribe();
    }
  }, []);
  return (
    <Router>
    <div className="app">

      <Switch>
        <Route path='/checkout'>
          <Header/>
          <CheckOut/>
        </Route>
        <Route path='/login'>
          <Login/>
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
