import React, { Component } from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Products from './containers/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductEdit from './components/ProductEdit/ProductEdit';

import logo from './logo.svg';
import classes from './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className={classes.App}>
          <header className={classes.AppHeader}>
            <a href="/"><img src={logo} className={classes.AppLogo} alt="logo" /></a>
            <h1 className={classes.AppTitle}>Welcome to my React training task</h1>
          </header>
          <Switch>
            <Route path="/products/:id/edit" component={ProductEdit}></Route>
            <Route path="/products/:id" render={ProductDetails}></Route>
            <Route path="/" render={Products}></Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
