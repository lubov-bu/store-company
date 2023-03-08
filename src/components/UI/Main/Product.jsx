import React from "react";
import Counter from "./Counter";
import '../../../styles/media.css';
import {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: [], count: 8};
    }

    componentDidMount() {

        fetch("dataCloths.json")

            .then((response) => response.json())
            .then((data) => {
                data.sort((a, b) => a.name.localeCompare(b.name));
                this.setState({data});
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleShowMore = () => {
        this.setState({count: this.state.count + 8});
    };

    render() {
        return (
            <div>
                <div className="products">
                    <div className="products__list">
                        {this.state.data
                            .filter((product, index) => index < this.state.count)
                            .map((product) => (
                                <a key={product.id} href="#">
                                    <Swiper className="product__image"
                                            cssMode={true}
                                            navigation={true}
                                            mousewheel={true}
                                            loop={true}
                                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                                    >
                                        <SwiperSlide className="product__image__item">
                                            <img src={product.image} alt="Product"></img>
                                        </SwiperSlide>
                                        <SwiperSlide className="product__image__item">
                                            <img src={product.image2} alt="Product"></img>
                                        </SwiperSlide>
                                        <SwiperSlide className="product__image__item">
                                            <img src={product.image3} alt="Product"></img>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="product__foot">
                                        <div>
                                            <p className={"product__name"}>{product.name}</p>
                                            <p className={"product__price"}>{product.price} $</p>
                                        </div>
                                        <div>
                                            <Counter/>
                                            <img className="product__cart" src="/images/cart.png" alt="Cart"/>
                                        </div>
                                    </div>
                                </a>
                            ))}
                    </div>
                    {this.state.count < this.state.data.length && (
                        <a
                            href="#"
                            className="product__more"
                            onClick={this.handleShowMore}
                        >
                            show more
                        </a>
                    )}
                </div>
            </div>
        )
    }
}

export {Product};