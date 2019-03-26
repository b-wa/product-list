import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sortCategory } from "../actions/index"

class SortCategory extends Component {
    onSortCategory = category => {
        this.props.sortCategory(category)

    }

    render() {
      return (
          <Fragment>
              <label>Sort Option: </label>
              <select onChange={event => this.onSortCategory(event.target.value)}>      
                <option value=""></option> 
                <option value="Automative">Automative</option>   
                <option value="Beauty">Beauty</option> 
                <option value ="Books">Books</option> 
                <option value="Clothing">Clothing</option>
                <option value="Computers">Computers</option>
                <option value="Electronics">Electronics</option>   
                <option value="Games">Games</option>        
                <option value="Garden">Garden</option> 
                <option value="Grocery">Grocery</option>
                <option value="Health">Health</option>     
                <option value ="Home">Home</option>       
                <option value="Industrial">Industrial</option>
                <option value="Jewelery">Jewelery</option> 
                <option value="Kids">Kids</option>
                <option value="Movies">Movies</option> 
                <option value="Music">Music</option> 
                <option value="Outdoors">Outdoors</option> 
                <option value="Shoes">Shoes</option> 
                <option value="Sports">Sports</option>
                <option value="Tools">Tools</option>
                <option value="Toys">Toys</option>
              </select>           
          </Fragment>           
      );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
       sortCategory }, dispatch)
}

export default connect(null, mapDispatchToProps)(SortCategory);
