/* eslint-disable */

import React from "react";
import styled from "styled-components";

const Cart = props => {
  return (
    <>
      <Wrap>
        <Wrap>
          <ProductWrap>
            <div>상품리스트</div>
          </ProductWrap>
        </Wrap>
        <Wrap>
          <div>가격정보</div>
        </Wrap>
      </Wrap>
    </>
  );
};

export default Cart;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1050px;
  height: 400px;
  margin: 10px auto;
  box-sizing: border-box;
`;

const ProductWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 730px;
  box-sizing: border-box;
  padding: 10px;
  color: green;
`;
