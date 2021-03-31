import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomeFeature from './features/Home';
import ProductFeature from './features/Products/pages/ListPage';
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={HomeFeature} exact />
        <Route path="/products" component={ProductFeature} exact />
      </Switch>
    </>
  );
}

export default App;
