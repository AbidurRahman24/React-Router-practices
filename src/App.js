import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import NoMatch from './component/NoMatch/NoMatch';
import FriendDetails from './component/FriendDetails/FriendDetails';

function App() {
 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/product/:id">
            <FriendDetails></FriendDetails>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      
     
    </div>
  );
}

export default App;
