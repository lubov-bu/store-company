import React, {useState} from 'react';
import Product from "./Product";
import PriceFilter from "./select/PriceFilter";
import {selectOptions} from "@testing-library/user-event/dist/select-options";


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

    const sortPriceToLess= (sort) => {
        setSelectedSort(sort);

        setProducts([...products].sort((a, b) => b[sort].localeCompare(a[sort])))
    }
    const sortPriceToHigh = (sort) => {
        setSelectedSort(sort);

        setProducts([...products].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div>
            <div className="products__top">
                <h1 className="products__title">{title}</h1>
                <PriceFilter
                    value={selectedSort}
                    onChange={sortPriceToLess}
                    defaultValue="Sort by price"
                    options={[
                        {id: 1, value: 'price', name: 'Less to high price'},
                        {id: 2, value: 'price', name: 'High to less price'},
                    ]}
                />
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