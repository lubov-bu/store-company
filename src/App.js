import React, {useState} from 'react';
import './styles/app.css'
import Product from "./components/Product";

function App() {
    const [products, setProducts] = useState([
            {id: 1, title: 'Skirt', price: '2,43$'},
            {id: 2, title: 'Shirt', price: '2,13$'},
            {id: 3, title: 'Dress', price: '2,0$'},
            {id: 4, title: 'Pants', price: '1,3$'}
        ])


  return (
    <div className="App">
      <h1>Clothes Store</h1>
      <div className="goods">
          {products.map(product =>
              <Product product={product} key={product.id}/>
              )}
      </div>
    </div>
  );
}

export default App;
