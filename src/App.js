import React, {useState} from 'react';
import './styles/app.css'
import ProductsList from "./components/ProductsList";

function App() {

  return (
    <div className="App">
        <h1 className="app__name">Clothes Store</h1>
        <ProductsList title="Top"/>
        <ProductsList title="Shoes"/>
    </div>
  );
}

export default App;
