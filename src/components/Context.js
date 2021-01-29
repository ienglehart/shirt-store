import React, { Component } from 'react'
import { tempProducts } from '../tempData';


const ProductContext = React.createContext();

class ProductProvider extends Component {
    state ={
        products: tempProducts
    }
    handleDetail = () =>{
        console.log("details? handled");
    }
    addToCart = () =>{
        console.log("added to card");
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };