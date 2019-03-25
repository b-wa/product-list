import React, { Component } from "react";
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
            <div className="container">
                    {products && products.map(({_id, name,category, price}) => (
                        <div className="card col-md-4" key={_id}>
                            <img className="card-img-top col-md-4" src={"https://picsum.photos/200/300"} alt=""/>
                        <div className="card-body col-md-4">
                        <div className="row">
                            <h4 className="card-title col-md-4">{name}</h4>
                            <p className="card-text col-md-4">Category: {category}</p>
                            <p className="card-text col-md-4">$ {price}</p>
                        </div>
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


