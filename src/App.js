import React from 'react';
import './styles/app.css'
import ProductsList from "./components/ProductsList";
import NavPanel from "./components/UI/Navigation/NavPanel";

function App() {

  return (
    <div className="App">
        <NavPanel/>
        <ProductsList title="Top"/>
        <ProductsList title="Shoes"/>
    </div>
  );
}

export default App;
