import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import CoffeeList from './components/CoffeeBeanList';
import NewCoffeeForm from './components/NewCoffeeForm';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route path="/products" component={CoffeeList} />
      <Route path="/new-form" component={NewCoffeeForm} />
    </div>
  </BrowserRouter>
);

export default App;
