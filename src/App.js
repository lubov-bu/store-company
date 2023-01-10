import React from 'react';
import './styles/app.css'
import ProductsList from "./components/ProductsList";
import NavPanel from "./components/UI/Navigation/NavPanel";
import Footer from "./components/UI/Footer/Footer";

function App() {

  return (
    <div className="App">
        <NavPanel/>
        <ProductsList title="Top"/>
        <ProductsList title="Shoes"/>
        <ProductsList title="Bottom"/>
        <Footer/>
    </div>
  );
}

export default App;
