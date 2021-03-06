import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo"/>
          <Link to="/">Fib Calculator version 1</Link>
          <Link to="/other">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib}/>
          <Route path="/other" component={OtherPage}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
