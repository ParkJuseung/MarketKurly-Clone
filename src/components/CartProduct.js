import React from "react";
import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CartProduct = props => {
  return (
    <>
      <ProductWrapper>
        <CheckCircleIcon />
        <ProductImage src="http://img2.tmon.kr/cdn3/deals/2021/01/18/2776520766/2776520766_front_662d07f3a2.jpg" />
        <ProductTextWrapper>
          <p>10월 21일까지 구매가능</p>
          <p>[신규회원 이벤트] 에너지바 4입 + 단백질바 3입</p>
        </ProductTextWrapper>

        <ProductPriceWrapper>
          <p>100원</p>
          <p>7,500원</p>
        </ProductPriceWrapper>
        <ClearIcon />
      </ProductWrapper>
    </>
  );
};

const ProductWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 78px;
`;

const ProductTextWrapper = styled.div`
  width: 327px;
`;

const ProductPriceWrapper = styled.div`
  width: 116px;
`;

export default CartProduct;
