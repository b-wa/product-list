import React, { Component, Fragment } from "react";
import styled from "styled-components";
import * as actions from '../actions';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {fetchProducts} from '../actions/index';
import _ from "lodash";
import Product from "../components/Product";

class ProductList extends Component {
    componentDidMount = () => {
        const {fetchProducts} = this.props;
        fetchProducts();
    }

    render() {
        const {products} = this.props;
        console.log(products);
        return (
            <div className="row">
                {products && products.map(({_id, category, name, price, image}) => (
                    <div className="Product-Container" key={_id}>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <p>Category: {category}</p>
                        <p>{name}</p>
                        <p>{price}</p>
                    </div>
                    <div className="col-lg-auto"></div>
                        <img src={image} alt=""/>
                </div>
            </div>  
                ))}
            </div>    
        )
    }
}

const mapStateToProps = (state) => ({
  products: state.products.products
})

const mapDispatchToProps = dispatch => 
bindActionCreators({ fetchProducts }, dispatch)

  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProductList);


