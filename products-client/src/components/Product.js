import React from "react";
import { Link } from "react-router-dom";
//import styled from "styled-components";

const Product = (props) => {
  return (
    <Link to={`/${props.id}`}></Link>
  )
};

export default Product;
