import React from 'react';
import {Product} from "./Product";
import '../../../styles/media.css';


const ProductList = () => {

    return (
        <div>
            <div className="products__top">
                <div>
                    <img className="products__pic" src="/images/heart-pic.png" alt="Heart"/>
                </div>
            </div>
            <div>
                <Product/>
            </div>
        </div>
    );
};

export default ProductList;