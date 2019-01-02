import React, { Component } from "react";
import { connect } from "react-redux";

class ProductList extends Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    
    renderProducts() {
         this.props.products.map(product => {
            //clean this up by using grid
            return (
               <div> 
                <div className="float-left"> Category: {product.category} </div>
                <h4 className="text-center"> {product.name} </h4>
                <div className="float-left">${product.price} </div>
                <img className="float-left" src={product.image} alt={product.name}/>
               </div>

            )
        })
    }

    render() {
            return (
                <div className="container">
                 <div className="row">
                    {this.renderProducts()}
                 </div>
                </div>
            )
    }
}
    
function mapStateToProps(state) {
    return {products: state.products.products, page: state.products.page}
}

export default connect(mapStateToProps)(ProductList);