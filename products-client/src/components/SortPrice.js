// import React, { Component, Fragment } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { sortPrice, fetchProducts} from "../actions/index"

// class SortPrice extends Component {
//     handlePrice = e => {
//         let price = document.querySelector("#price").value;
//         this.props.sortPrice(price);
//         this.props.fetchProducts();

//     }

//     render() {
//       return (
//               <div className="price col-md-4">
//                 <label>Sort Option: </label>
//                 <select id ="price" onChange={event => this.handlePrice(event.target.value)}>      
//                     <option value=""></option> 
//                     <option value="lowest">Price: Lowest to Highest</option>   
//                     <option value="highest">Price: Highest to Lowest</option>  
//                 </select> 
//                 </div>                 
//       );
//     }
// }

// function mapStateToProps(state) {
//     return {price: state.products.price}
//   }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//        sortPrice, fetchProducts }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SortPrice);
