import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProducts } from "../../actions"
import ProductList from "../../containers/product-list";

class App extends Component {

    render() {
        return (
            <div className = "Container">
                <h1>Products</h1>
                <div className="row">
                    <ProductList />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    productsReducer: state.productsReducer
});

const mapDispatchToProps = dispatch => bindActionCreators({ fetchProducts }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);