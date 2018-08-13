import React, { Component } from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Products from './containers/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import ProductEdit from './components/ProductEdit/ProductEdit';

import logo from './logo.svg';
import classes from './App.css';

class App extends Component {
  state = {
    products: [
        {
            id: '1',
            price: 100.53,
            name: 'Product 1 Name',
            desc: '',
            created: '08-08-2008'
        },
        {
            id: '2',
            price: 90.25,
            name: 'Product 2 Name',
            desc: '',
            created: '12-12-2012'
        },
        {
            id: '3',
            price: 70.05,
            name: 'Product 3 Name',
            desc: '',
            created: '13-08-2018'
        },
        {
            id: '4',
            price: 55.05,
            name: 'Product 4 Name',
            desc: '',
            created: '14-08-2018'
        }
    ]
  };

  myProducts = (props) => {
    return (
      <Products products={this.state.products}/>
    )
  };

  myProductDetails = (props) => {
    return (
      <ProductDetails products={this.state.products}/>
    )
  };

  render() {
    return (
      <Router>
        <div className={classes.App}>
          <header className={classes.AppHeader}>
            <img src={logo} className={classes.AppLogo} alt="logo" />
            <h1 className={classes.AppTitle}>Welcome to my React training task</h1>
          </header>
          <Switch>
            <Route path="/products/:id/edit" component={ProductEdit}></Route>
            <Route path="/products/:id" render={this.myProductDetails}></Route>
            <Route path="/products" render={this.myProducts}></Route>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
