import React, { Component } from 'react';
import Product from '../features/Product';
import Title from '../components/Title';
import {ProductConsumer} from '../Context';

export default class Productlist extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />

                        <div className="row">
                            <ProductConsumer>
                                {value=>{
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        )
    }
}