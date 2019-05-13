import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProducts, changeCategory, changePrice } from '../actions'
  
class Filter extends Component {

    sortCategory = e => {
      let category = document.querySelector('#category').value;
      this.props.changeCategory(category)
      this.props.fetchProducts(category, this.props.page, this.props.price)
    }

    sortPrice = e => {
      let price = document.querySelector('#price').value;
      this.props.changePrice(price)
      this.props.fetchProducts(this.props.category, this.props.page, price)
    }

    render() {
    return (
      <div className="container">
        <div className="row sort justify-content-center">
            <div className="search-bar input-group col">
              <div className="col-md-4">
                <input type="text" placeholder="Search" />
              </div>
                <div className="col-md-4">
                  <label> filter by category: </label>
                  <select id='category' onChange={event =>this.sortCategory()}>
                    <option value=""></option>
                    <option value="Automotive">Automotive</option>
                    <option value="Baby">Baby</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Books">Books</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Games">Games</option>
                    <option value="Garden">Garden</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Health">Health</option>
                    <option value="Home">Home</option>
                    <option value="Industrial">Industrial</option>
                    <option value="Jewelery">Jewelry</option>
                    <option value="Kids">Kids</option>
                    <option value="Movies">Movies</option>
                    <option value="Music">Music</option>
                    <option value="Outdoors">Outdoors</option>
                    <option value="Sports">Sports</option>
                    <option value="Toys">Toys</option>
                    <option value="Tools">Tools</option>
                    <option value="Shoes">Shoes</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label> sort by: </label>  
                  <select id="price" onChange={event =>this.sortPrice()}>
                    <option value=""></option>
                    <option value="lowest">Price: Low to High</option>
                    <option value="highest">Price: High to Low</option>
                  </select>
                </div>
              </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {category: state.products.category, page: state.products.page, price: state.products.price }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts, changeCategory, changePrice }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

