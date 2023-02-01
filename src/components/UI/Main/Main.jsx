import React, {useState} from "react";
import PriceFilter from "../select/PriceFilter";
import Counter from "./Counter";
//
// const [selectedSort, setSelectedSort] = useState('')
//
// const sortPrice = (sort) => {
//     setSelectedSort(sort);
//
//     if (sort === "min-price") {
//         setProducts([...products].sort((a, b) => b['price'].localeCompare(a['price'])))
//     } else {
//         setProducts([...products].sort((a, b) => a['price'].localeCompare(b['price'])))
//     }
// }


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {

        fetch("http://localhost:3000/dataCloths.json")

            .then((response) => response.json())
            .then(data => this.setState({ data }));

    }

    render() {

        // const product_id = this.state.data.map((product) => product.id);
        // const product_name = this.state.data.map((product) => product.name);
        // const product_price = this.state.data.map((product) => product.price);
        // const product_image = this.state.data.map((product) => product.image);

        return (
            <div>
                <div>{this.state.data.map((product) => <div>id: {product.id}, price: {product.price}</div>)}</div>
                <div className="products__top">
                    <div>
                        <img className="products__pic" src="http://195.133.75.184/images/heart-pic.png" alt="Heart"/>
                    </div>
                </div>
                <div className="goods">
                    <a href="#" id="product">
                        <div className="product__image">
                            <img src="#" alt="Product"></img>
                        </div>
                        <div className="product__foot">
                            <div>
                                <p className="product__name">{}</p>
                                <p className="product__price">{}</p>
                            </div>
                            <div>
                                <Counter/>
                                <img className="product__cart" src="http://195.133.75.184/images/cart.png" alt="Cart"/>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export {Main};
//
//
// <div>
//     <h1 className="products__title">{}</h1>
//     <PriceFilter
//         value={selectedSort}
//         onChange={sortPrice}
//         defaultValue="Sort by price"
//         options={[
//             {value: 'min-price', name: 'High to less price'},
//             {value: 'max-price', name: 'Less to high price'},
//         ]}
//     />
// </div>