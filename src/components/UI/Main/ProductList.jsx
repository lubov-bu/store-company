import React from 'react';
import {Product} from "./Product";
import '../../../styles/media.css';


const ProductList = ({children}) => {

    return (
        <div>
            <div className="products__top">
                <div>
                    <img className="products__pic" src="/images/heart-pic.png" alt="Heart"/>
                </div>
                <h1 className="products__title">{children}</h1>
            </div>
            <div>
                <Product/>
            </div>
        </div>
    );
};

export default ProductList;