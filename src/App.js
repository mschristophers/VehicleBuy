import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect -> runs based on a given condition
  // powerful when rewriting from class-based to functional
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // User is logged out 
        
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // Any cleanup goes here
      unsubscribe();
    }
  }, []); // Run once (when app component loads )

  console.log("User is ", user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/favorites">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /* localhost.com*/
}

{
  /* localhost.com/login*/
}

{
  /* localhost.com/signup*/
}

export default App;
