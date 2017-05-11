import React, { Component } from 'react';
import ShoppingCartContainer from './ShoppingCartContainer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingCartContainer />
        <h2>Cart Total <span>$</span></h2>
      </div>
    );
  }
}

export default App;
