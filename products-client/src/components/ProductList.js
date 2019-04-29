import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import _ from "lodash";

class ProductList extends Component {
    renderProducts() {
        if (!this.props.products) {
            return "LOADING..."
        } 
        return this.props.products.map(product => {
            return (
                <div className="card col-md-4" key={product._id}>
                  <img className="card-img-top" src={"https://picsum.photos/200/300"} alt=""/>
                    <div className="card-body">
                      <h4 className="card-title">{product.name}</h4>
                      <div className="card-text">Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                      <div className="card-text">Price: ${product.price}</div>
                    </div>
                </div>
                )
            })
        }
        
        render() {
            return (
            <Fragment>
                <div className="container">
                 <div className="row">
                    {this.renderProducts()}
                 </div>
                </div>
            </Fragment>
            )
        }
    }

function mapStateToProps(state) {
  return {products: state.products.products}
}

export default connect(mapStateToProps)(ProductList);

