/* eslint-disable */

import React from "react";
import styled from "styled-components";

import CartProduct from "../components/CartProduct";

const Cart = props => {
  return (
    <>
      <Wrap>
        <Wrap>
          <Wrap>
            <CartProduct />
          </Wrap>
          <Wrap>
            <PriceTitleWrap>
              <div>가격정보</div>
            </PriceTitleWrap>
          </Wrap>
        </Wrap>

        <Wrap>
          <Wrap>
            <ProductListWrap>
              <div>프로덕트리스트</div>
            </ProductListWrap>
            <PriceInfoWrap>
              <div>프로덕트리스트</div>
            </PriceInfoWrap>
          </Wrap>
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
  max-width: 800px;
  margin: 10px auto;
  box-sizing: border-box;
  margin-top: 200px;
  margin-right: 20px;
`;

const ProductTitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 730px;
  box-sizing: border-box;
  padding: 20px;
  background-color: green;
`;

const PriceTitleWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 284px;
  box-sizing: border-box;
  padding: 20px;
  background-color: green;
`;

const ProductListWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1050px;
  box-sizing: border-box;
  padding: 20px;
  background-color: green;
  margin-right: 20px;
`;

const PriceInfoWrap = styled.div`
  display: flex;
  flex-direction: start;
  justify-content: center;
  align-items: center;
  width: 284px;
  box-sizing: border-box;
  padding: 20px;
  background-color: green;
`;
