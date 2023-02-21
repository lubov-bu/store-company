import React from "react";
import Counter from "./Counter";
import '../../../styles/media.css';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {

        fetch("http://localhost:3000/dataCloths.json")

            .then((response) => response.json())
            .then((data) => {
                data.sort((a, b) => a.name.localeCompare(b.name));
                this.setState({data});
            });
    }

    render() {
        return (
            <div>
                <div className="products">
                    <div className="products__list">
                        {this.state.data.map((product) =>
                            <a>
                                <div className="product__image">
                                    <img src={product.image} alt="Product"></img>
                                </div>
                                <div className="product__foot">
                                    <div>
                                        <p className={"product__name"}>{product.name}</p>
                                        <p className={"product__price"}>{product.price} $</p>
                                    </div>
                                    <div>
                                        <Counter/>
                                        <img className="product__cart" src="http://195.133.75.184/images/cart.png" alt="Cart"/>
                                    </div>
                                </div>
                            </a>
                        )}
                    </div>
                    <a href="#" className="product__more">show more</a>
                </div>
            </div>
        )
    }
}

export {Product};