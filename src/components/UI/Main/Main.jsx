import React from "react";
import ProductsList from "./ProductsList";
import Product from "./Product";


class Main extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {products: Object, hasError: false, error: null};
    // }
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch("http://localhost:3000/dataCloths.json")
            .then(response => response.json())
            .then(data => this.setState({ data }));
            // .then((response) => response.json())
            // .then((data) => this.setState({products: data}))
            // // .catch(e => {
            // //     console.log(e);
            // //     this.setState({isFetching: true, error: e });
            // // })
            // .finally(() => {
            //     console.log(products);
            // });
    }

    render() {
        const { data } = this.state;
        console.log(data[0])
        // data.forEach(element => console.log(element.price));

        return 3244324234324;
        // const {products} = this.state.products;
        // return (<ProductsList products={products} title="Top"/>)
    }
}

export {Main};