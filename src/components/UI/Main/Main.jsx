import React from "react";
// import ProductsList from "./ProductsList";
// import Product from "./Product";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        fetch("http://localhost:3000/dataCloths.json")
            // .then(response => response.json())
            // .then(data => this.setState({ data }));
            .then((response) => response.json())
        .then(data => this.setState({ data }));
            // // .catch(e => {
            // //     console.log(e);
            // //     this.setState({isFetching: true, error: e });
            // // })
            // .finally(() => {
            //     console.log(products);
            // });
    }

    render() {
        // console.log(this.state.data);
        // const {products} = this.state.products;
        // return (<ProductsList products={products} title="Top"/>)
        return (
            <div>{this.state.data.map((product) => <div>id: {product.id}, price: {product.price}</div>)}</div>
        );
    }
}

export {Main};