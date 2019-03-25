import React, { Fragment } from 'react';
import ProductList from "../components/ProductList";
//import ChangePage from './ChangePage';
import SortPrice from './SortPrice';

const App = () => {
  return(
    <Fragment>
      <h1>Products</h1>
      <SortPrice />
      <ProductList />
      
    </Fragment>
  )
}

export default App;