import React from "react";
import Product from "../components/Product";
import styled from "styled-components";

const ProductList = () => {
  return (
    <React.Fragment>
      <ProductWrap>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </ProductWrap>
    </React.Fragment>
  );
};

const ProductWrap = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding: 0px 29px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 308px);
  grid-column-gap: 28px;
  align-items: center;
`;

export default ProductList;
