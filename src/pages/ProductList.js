/* eslint-disable */

import React, { useEffect } from "react";
import Product from "../components/Product";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../redux/modules/product";

const ProductList = props => {
  const dispatch = useDispatch();

  const product_list = useSelector(state => state.product.list);
  console.log(product_list);

  useEffect(() => {
    dispatch(productActions.getProductAPI());
  }, []);

  return (
    <>
      {product_list && (
        <React.Fragment>
          {product_list.map((p, idx) => (
            <ProductWrap key={idx}>
              <Product key={idx} {...p} />
            </ProductWrap>
          ))}
        </React.Fragment>
      )}
    </>
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
