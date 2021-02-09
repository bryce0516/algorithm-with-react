
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import About from './About';
import Users from './Users';
import Home from './Home';
import Three from './Compare/three';
import Four from './Compare/four';
import Gaus from './Compare/gaus';


function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/three">세정수의 값을 구하는 프로그램</Link>
              </li>
              <li>
                <Link to="/four">네정수의 값을 구하는 프로그램</Link>
              </li>
              <li>
                <Link to="/gaus">가우스 덧셈</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <div>
            <Switch>
            <Route exact path="/">
                <Home />
              </Route>  
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
               <Route path="/three">
                <Three />
              </Route>
              <Route path="/four">
                <Four />
              </Route>
              <Route path="/gaus">
                <Gaus />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
