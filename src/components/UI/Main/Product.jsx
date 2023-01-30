import React from 'react';
import Counter from "./Counter";


const Product = (props) => {

    const {
        product_id: id,
        product_name: name,
        product_price: price,
        product_img: image
    } = props;

    return (
        <a href="src/components#" id="product">
            <div className="product__image">
                <img src={image} alt="Product"></img>
            </div>
            <div className="product__foot">
                <div>
                    <p className="product__name">{name}</p>
                    <p className="product__price">{price}</p>
                </div>
                <div>{id}</div>
                <div>
                    <Counter/>
                    <img className="product__cart" src="http://195.133.75.184/images/cart.png" alt="Cart"/>
                </div>
            </div>
        </a>
    );
};

export default Product;