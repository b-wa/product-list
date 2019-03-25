import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sortPrice } from "../actions/index"

class SortPrice extends Component {
    onSortPrice = price => {
        this.props.sortPrice(price)

    }

    render() {
      return (
          <Fragment>
              <label>Sort Option: </label>
              <select onChange={event => this.onSortPrice(event.target.value)}>      
                <option value=""></option> 
                <option value="lowest">Price: Lowest to Highest</option>   
                <option value="highest">Price: Highest to Lowest</option>  
              </select>           
          </Fragment>           
      );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
       sortPrice }, dispatch)
}

export default connect(null, mapDispatchToProps)(SortPrice);
