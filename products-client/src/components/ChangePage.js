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
    <div id="row-pages">
      <div className="pagination">
        <div className="page-number"><button className="page-link" onClick={event => this.handlePage}>1</button></div>
        <div className="page-number"><button className="page-link" onClick={event => this.handlePage}>2</button></div>
        <div className="page-number"><button className="page-link" onClick={event => this.handlePage}>3</button></div>
        <div className="page-number"><button className="page-link" onClick={event => this.handlePage}>4</button></div>
        <div className="page-number"><button className="page-link" onClick={event => this.handlePage}>5</button></div>
        <div className="page-number"><button className="page-link" onClick={event => this.handlePage}>6</button></div>
        <div className="page-number"><button className="page-link" onClick={event => this.handlePage}>7</button></div>
        <div className="page-number"><button className="page-link" onClick={event => this.handlePage}>8</button></div>
        <div className="page-number"><button className="page-link" onClick={event => this.handlePage}>9</button></div>
        <div className="page-number"><button className="page-link" onClick={event => this.handlePage}>10</button></div>
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

