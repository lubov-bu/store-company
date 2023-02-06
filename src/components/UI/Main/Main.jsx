import React from "react";
import Counter from "./Counter";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {

        fetch("http://localhost:3000/dataCloths.json")

            .then((response) => response.json())
            .then(data => this.setState({data}));

    }

    render() {
        return (
            <div>
                <div className="products__top">
                    <h1 className="products__title">Top</h1>
                    <div>
                        <img className="products__pic" src="http://195.133.75.184/images/heart-pic.png" alt="Heart"/>
                    </div>
                </div>
                <div className="goods">
                    {this.state.data.map((product) => <a className={""}>
                        <div className="product__image">
                            <img src={product.image} alt="Product"></img>
                        </div>
                        <div className="product__foot">
                            <div>
                                <p className={"product__name"}>{product.name}</p>
                                <p className={"product__price"}>{product.price}</p>
                            </div>
                            <div>
                                <Counter/>
                                <img className="product__cart" src="http://195.133.75.184/images/cart.png" alt="Cart"/>
                            </div>
                        </div>
                    </a>).sort()}
                </div>
            </div>
        )
    }
}

export {Main};