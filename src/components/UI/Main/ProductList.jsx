import React from 'react';
import {Main} from "./Main";

const ProductList = () => {
    return (
        <div>
            <div className="products__top">
                <h1 className="products__title">Top</h1>
                <div>
                    <img className="products__pic" src="http://195.133.75.184/images/heart-pic.png" alt="Heart"/>
                </div>
            </div>
            <div>
                <Main/>
            </div>
        </div>
    );
};

export default ProductList;