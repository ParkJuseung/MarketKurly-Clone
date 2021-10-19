/* eslint-disable */

import React from "react";
import styled from "styled-components";

import ClearIcon from "@mui/icons-material/Clear";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RoomIcon from "@mui/icons-material/Room";

const Cart = props => {
  return (
    <>
      <Wrapper>
        <Title>장바구니</Title>
        <InfoWrapper>
          <ProductWrapper>
            <ProductSummary>
              <CheckCircleIcon style={{ marginRight: "20px" }} />
              <SelectText style={{ marginRight: "20px" }}>
                전체선택 2/2
              </SelectText>
              <SelectText>선택삭제</SelectText>
            </ProductSummary>
            <hr style={{ width: "720px", size: "5" }} />
            <ProductUnitWrapper>
              <CheckCircleIcon style={{ marginRight: "10px" }} />
              <ProductImage src="http://img2.tmon.kr/cdn3/deals/2021/01/18/2776520766/2776520766_front_662d07f3a2.jpg" />
              <ProductTextWrapper>
                <ProductDeadline>10월 21일까지 구매가능</ProductDeadline>
                <ProductName>
                  [신규회원 이벤트] 에너지바 4입 + 단백질바 3입
                </ProductName>
              </ProductTextWrapper>

              <ProductQtyWrapper>
                <ProductQtyButton>-</ProductQtyButton>
                <ProductQty>1</ProductQty>
                <ProductQtyButton>+</ProductQtyButton>
              </ProductQtyWrapper>
              <ProductPriceWrapper>
                <ProductActualPrice>100원</ProductActualPrice>
                <ProductPrice>7,500원</ProductPrice>
              </ProductPriceWrapper>
              <ClearIcon style={{ color: "#e1e1e1" }} />
            </ProductUnitWrapper>
          </ProductWrapper>
          <PriceWrapper>
            <DeliveryArea>
              <p style={{ fontWeight: 600 }}>🏠 &nbsp; 배송지</p>
              <p
                style={{
                  lineHeight: "24px",
                  margin: "0 0 5px 0",
                  fontWeight: 600,
                }}
              >
                서울시 중구 다산로36길 110(신당푸르지오) 103동 1302호
              </p>
              <p
                style={{
                  color: "#5f0080",
                  fontSize: "14px",
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                샛별배송
              </p>
              <button
                style={{
                  color: "#5f0080",
                  backgroundColor: "white",
                  border: "1px solid #5f0080",
                  height: "36px",
                  marginTop: "17px",
                  fontWeight: 600,
                  fontSize: "12px",
                  width: "243px",
                }}
              >
                배송지 변경
              </button>
            </DeliveryArea>
            <PriceArea>
              <PriceDetail>
                <p>상품금액</p>
                <p>16,740원</p>
              </PriceDetail>
              <PriceDetail>
                <p>상품할인금액</p>
                <p>16,540원</p>
              </PriceDetail>
              <PriceDetail>
                <p>배송비</p>
                <p>0원</p>
              </PriceDetail>
              <hr style={{ width: "300px" }} />
              <PriceDetail>
                <p>결제예정금액</p>
                <p>200원</p>
              </PriceDetail>
            </PriceArea>
            <button>주문하기</button>

            <ul
              style={{
                fontSize: 10,
                padding: "20 0 0 11",
                fontWeight: 400,
                lineHeight: 1.5,
              }}
            >
              <li>쿠폰/적립금은 주문서에서 사용 가능합니다</li>
              <li>
                '입금확인'상태일 때는 주문 내역 상세에서 직접 주문취소가
                가능합니다.
              </li>
              <li>'입금확인'이후 상태에는 고객센터로 문의해주세요.</li>
            </ul>
          </PriceWrapper>
        </InfoWrapper>
      </Wrapper>
    </>
  );
};

export default Cart;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1050px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 100px;
`;

const Title = styled.p`
  color: black;
  font-size: 24px;
  margin: 0 auto;
  font-weight: 900;
  margin-bottom: 50px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
`;

const SelectText = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 742px;
  box-sizing: border-box;
  padding: 10px;
  margin-right: 20px;
  border: 1px solid black;
`;

const ProductSummary = styled.div`
  display: flex;
  align-items: center;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 284px;
  box-sizing: border-box;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid black;
`;

const ProductUnitWrapper = styled.div`
  display: flex;
  width: 730px;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 20px 20px 0px;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 78px;
  margin-right: 10px;
`;

const ProductTextWrapper = styled.div`
  width: 327px;
`;

const ProductDeadline = styled.p`
  font-size: 13px;
  font-weight: 700;
  margin: 15px 0 0 0;
  color: #5f0080;
`;

const ProductName = styled.div`
  font-size: 15px;
  margin: 0 0 15px 0;
  font-weight: 500;
`;

const ProductQtyWrapper = styled.div`
  width: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0 20px;
  border: 1px solid #e1e1e1;
  height: 30px;
`;

const ProductQtyButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  font-size: 20px;
  width: 40px;
`;

const ProductQty = styled.p`
  font-size: 14px;
`;

const ProductPriceWrapper = styled.div`
  width: 50px;
  margin-right: 70px;
`;

const ProductActualPrice = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin: 15px 0 0 0;
  text-align: right;
`;

const ProductPrice = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin: 0 0 15px 0;
  color: #999;
  text-decoration: line-through;
`;

const DeliveryArea = styled.div`
  background-color: white;
  border: 1px solid #f2f2f2;
  padding: 10px;
  width: 284px;
`;

const PriceArea = styled.div`
  background-color: #fafafa;
  border: 1px solid #f2f2f2;
`;

const PriceDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;
