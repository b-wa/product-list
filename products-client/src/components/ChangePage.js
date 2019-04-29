import React, {Component} from 'react';
import {fetchProducts, nextPage} from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

class ChangePage extends Component {
  
  handlePage = e => {
    this.props.nextPage(e)
    this.props.fetchProducts(e, this.props.category, this.props.price)
  }
  render() {
  return (
    <div id="page-navigation">
    <div className='row'>
        <div className="btn btn-primary" onClick={event => this.handlePage(1)}>1</div>
        <div className="btn btn-primary" onClick={event => this.handlePage(2)}>2</div>
        <div className="btn btn-primary" onClick={event => this.handlePage(3)}>3</div>
        <div className="btn btn-primary" onClick={event => this.handlePage(4)}>4</div>
        <div className="btn btn-primary" onClick={event => this.handlePage(5)}>5</div>
        <div className="btn btn-primary" onClick={event => this.handlePage(6)}>6</div>
        <div className="btn btn-primary" onClick={event => this.handlePage(7)}>7</div>
        <div className="btn btn-primary" onClick={event => this.handlePage(8)}>8</div>
        <div className="btn btn-primary" onClick={event => this.handlePage(9)}>9</div>
        <div className="btn btn-primary" onClick={event => this.handlePage(10)}>10</div>
    </div>
  </div>
  )
  }
}

function mapStateToProps(state) {
  return {category: state.products.category, page: state.products.page, price: state.products.price, products: state.products.products}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchProducts, nextPage}, dispatch)
};


export default connect(mapStateToProps, mapDispatchToProps)(ChangePage);