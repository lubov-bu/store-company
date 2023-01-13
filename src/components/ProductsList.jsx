import React, {useState} from 'react';
import Product from "./Product";
import PriceFilter from "./UI/select/PriceFilter";


const ProductsList = ({title}) => {
    const [products, setProducts] = useState([
        {id: 1, title: 'Skirt', price: '2,43$'},
        {id: 2, title: 'Shirt', price: '2,13$'},
        {id: 3, title: 'Dress', price: '2,9$'},
        {id: 4, title: 'Pants', price: '9,3$'},
        {id: 5, title: 'Skirt', price: '2,03$'},
        {id: 6, title: 'Shirt', price: '2,15$'},
        {id: 7, title: 'Dress', price: '2,1$'},
        {id: 8, title: 'Pants', price: '1,4$'}
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