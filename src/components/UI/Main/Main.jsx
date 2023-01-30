import React from "react";
import ProductsList from "./ProductsList";
import Product from "./Product";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {products: [], hasError: false, error: null};
    }

    componentDidMount() {
        fetch("http://localhost:3000/dataCloths.json")
            .then((response) => response.json())
            .then((data) => this.setState({products: data}))
            // .catch(e => {
            //     console.log(e);
            //     this.setState({isFetching: true, error: e });
            // })
            .finally(() => {
                console.log("fewfew");
            });
    }

    render() {
        console.log(this.state);
        const {products} = this.state.products;
        return (<ProductsList products={products} title="Top"/>)
    }
}

export {Main};