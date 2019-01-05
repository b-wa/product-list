import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions";
import { bindActionCreators } from "redux";

class ProductList extends Component {

    constructor(props) {
        super(props);

        this.fetchProducts = this.fetchProducts.bind(this)
    }
    componentDidMount() {
        this.fetchProducts();
    }

    fetchProducts() {
        const { prodcutReducer } = this.props;
        const { isFetching, hasFetched } = productReducer;
        
        if (!isFetching && !hasFetched) {
            this.props.fetchProducts();
        }
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
                {this.props.products && this.props.products.length > 0 && (
                    <div className="row">
                        {this.renderProducts()}
                    </div>    
                )}  
                 
                </div>
            )
    }
}
    
const mapStateToProps = state => ({
    products: state.productReducer.data
})

export default connect(mapStateToProps)(ProductList);