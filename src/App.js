import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/features/Nav';
import ProductList from './components/pages/ProductList';
import Details from './components/pages/Details';
import Cart from './components/pages/cart/Cart';
import Footer from './components/features/Footer';
import Default from './components/pages/Default';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />

        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} /> 
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>

        <Footer />

      </React.Fragment>
    );
  }
}

export default App;
