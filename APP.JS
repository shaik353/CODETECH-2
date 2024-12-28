import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';

const App = () => {
  return (
    <div>
      <h1>E-commerce Shopping Cart</h1>
      <ProductList />
      <Cart />
      <Checkout />
    </div>
  );
};

export default App;
