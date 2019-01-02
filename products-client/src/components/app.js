import React, { Component } from "react";
import ProductList from "../containers/product-list";
import { connect } from "react-redux";
import { fetchProducts } from "../actions";
import { bindActionCreators } from "redux";

class App extends Component {
    componentDidMount () {
        this.props.fetchProducts();
    }

    render() {
        return (
            <div className = "Container">
                <h1>Products></h1>
                <div className="row">
                    <ProductList />
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchProducts }, dispatch)
};

export default connect(null, mapDispatchToProps)(App);