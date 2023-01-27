import React, {useState} from 'react';
import Product from "./Product";
import PriceFilter from "./UI/select/PriceFilter";

let productRequestURL = 'http://localhost:3000/dataCloths.json';

let request = new XMLHttpRequest();

request.open('GET', productRequestURL);
request.responseType = 'text';
request.send();

request.onload = function () {
    let productsList = request.response;
    let cardOfGoods = JSON.parse(productsList);
    ProductsList(cardOfGoods);

}

const ProductsList = ({title}) => {

    let [products, setProducts] = useState([

    ])

    const [selectedSort, setSelectedSort] = useState('')

    const sortPrice = (sort) => {
        setSelectedSort(sort);

        if (sort === "min-price") {
            setProducts([...products].sort((a, b) => b['price'].localeCompare(a['price'])))
        } else {
            setProducts([...products].sort((a, b) => a['price'].localeCompare(b['price'])))
        }
    }

    return (
        <div>
            <div className="products__top">
                <div>
                    <h1 className="products__title">{title}</h1>
                    <PriceFilter
                        value={selectedSort}
                        onChange={sortPrice}
                        defaultValue="Sort by price"
                        options={[
                            {value: 'min-price', name: 'High to less price'},
                            {value: 'max-price', name: 'Less to high price'},
                        ]}
                    />
                </div>
                <div>
                    <img className="products__pic" src="http://195.133.75.184/images/heart-pic.png" alt="Heart"/>
                </div>
            </div>
            <div className="goods">
                {products.map(product =>
                    <Product product={product} key={product.id}/>
                )}
            </div>
        </div>
    );
};

export default ProductsList;



