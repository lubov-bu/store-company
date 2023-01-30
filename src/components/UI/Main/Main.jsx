import React from "react";
import ProductsList from "./ProductsList";

export default class Main extends React.Component {

    state = {
        products: [],
    };

    componentDidMount() {
        fetch("http://localhost:3000/dataCloths.json")
            .then((response) => response.json())
            .then((data) => this.setState({products: Object.values(data) }));
    }

    render() {
        const { products } = this.state;
        return (
            <ProductsList products={products} title="Top"/>
        )
    }
}
