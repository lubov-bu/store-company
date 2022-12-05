import React from 'react';
import Counter from "./Counter";

const Product = (props) => {
    return (
        <a href="#" id="product">
            <div className="product_image">
                <img src="http://45.83.123.5/lusa/img/connecting.png" alt="Product"></img>
            </div>
            <div className="product_foot">
                <div>
                    <p className="product_name">{props.product.title}</p>
                    <p className="product_price">{props.product.price}</p>
                </div>
                <div>
                    <Counter/>
                    <img src="http://45.83.123.5/lusa/img/bubble.png" alt="Cart"/>
                </div>
            </div>
        </a>
    );
};

export default Product;