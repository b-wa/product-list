import React, { Fragment, Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "../components/ProductList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProducts } from "../actions";
import Filter from './Filter';
import ChangePage from './ChangePage';



class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();   
}

render() {
  return (
    <Fragment>
      <div className="container">
        <h1 id="title">PRODUCTS</h1>
        <div className="row">
          <Filter />
          <ProductList />
          <ChangePage />
        </div>
      </div>
    </Fragment>
  
  )
}
} 

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchProducts}, dispatch)
};

export default connect(null, mapDispatchToProps)(App);
