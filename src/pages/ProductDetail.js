import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";

const ProductDetail = () => {
  return (
    <React.Fragment>
      <OutWrap>
        <ImgWrap>
          <img src="https://img-cf.kurly.com/shop/data/goods/1634522153802l0.jpg" />
        </ImgWrap>

        <InfoWrap>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TitleText>[그린밤]샌드위치</TitleText>
            <ShareIcon src="https://res.kurly.com/mobile/service/goodsview/1910/ico_view_sns.png"></ShareIcon>
          </div>

          <Description>꽉찬 단면이 흐뭇한 샌드위치</Description>
          <PriceText>4000원</PriceText>
          <FlexDiv>
            <FlexDiv_title>판매단위</FlexDiv_title>
            <FlexDiv_des>1개</FlexDiv_des>
          </FlexDiv>
          <FlexDiv>
            <FlexDiv_title>배송구분</FlexDiv_title>
            <FlexDiv_des>샛별배송/택배배송g</FlexDiv_des>
          </FlexDiv>
          <FlexDiv>
            <FlexDiv_title>포장타입</FlexDiv_title>
            <div style={{ display: "block" }}>
              <FlexDiv_des>종이포장</FlexDiv_des>
              <FlexDiv_des_des>
                택배배송은 에코포장이 스티로폼으로 대체됩니다.
              </FlexDiv_des_des>
            </div>
          </FlexDiv>
          <FlexDiv>
            <FlexDiv_title>판매단위</FlexDiv_title>
            <FlexDiv_des>1개</FlexDiv_des>
          </FlexDiv>
          <FlexDivBuy>
            <FlexDiv_title>구매수량</FlexDiv_title>
            <Buycount>
              <BuyCountMinus>&nbsp;</BuyCountMinus>
              <BuyCountText>1</BuyCountText>
              <BuyCountPlus>&nbsp; </BuyCountPlus>
            </Buycount>
          </FlexDivBuy>
          <Price></Price>
        </InfoWrap>
      </OutWrap>
    </React.Fragment>
  );
};

const OutWrap = styled.div`
  display: flex;
  width: 1050px;
  margin: auto;
`;

const ImgWrap = styled.div`
  overflow: hidden;
  position: relative;
  width: 430px;
  height: 552px;
  & img {
    object-fit: fill;
  }
`;

const InfoWrap = styled.div`
  display: block;
  margin-left: 60px;
  overflow: hidden;
  padding: 0px 0;
`;
const TitleText = styled.p`
  display: block;
  padding-right: 60px;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  word-break: break-all;
`;
const ShareIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
const Description = styled.p`
  display: block;
  font-size: 14px;
  color: #999;
  line-height: 20px;
  word-break: break-all;
  margin-top: -20px;
`;

const PriceText = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 30px;
  letter-spacing: 0;
  word-break: break-all;
  border-bottom: 1px solid #f4f4f4;
`;

const FlexDiv = styled.div`
  display: flex;
  width: 600px;
  border-bottom: 1px solid #f4f4f4;
`;

const FlexDiv_title = styled.p`
  font-size: 14px;
  color: #666;
  width: 150px;
`;
const FlexDiv_des = styled.p`
  font-size: 14px;
  color: #333;
`;
const FlexDiv_des_des = styled.p`
  font-size: 12px;
  color: #666;
`;

const FlexDivBuy = styled.div`
  display: flex;
  width: 600px;
  height: 50px;
  border-bottom: 1px solid #f4f4f4;
  align-items: center;
`;

const Buycount = styled.div`
  display: flex;
  border-radius: 3px;
  border: 0.5px solid #666;
  height: 28px;
  width: 80px;
`;

const Price = styled.div`
  display: flex;
  float: right;
`;

export default ProductDetail;

// url 들어가니까 밑에 색 표시가 이상함 => 밑으로 뺴놓음
const BuyCountMinus = styled.button`
  font-size: 20px;
  display: block;
  width: 30px;
  margin: 0px 2px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
  width: 20px;
  background: url(https://res.kurly.com/pc/ico/2010/ico_minus_on.svg);
`;

const BuyCountPlus = styled.button`
  font-size: 20px;
  margin-left: 5px;
  border: none;

  display: block;
  margin: 0px auto;
  cursor: pointer;
  width: 20px;
  background: #fff url(https://res.kurly.com/pc/ico/2010/ico_plus_on.svg);
`;

const BuyCountText = styled.p`
  font-size: 12px;

  display: block;
  align-items: center;
  margin: 5px 0px 0px 12px;
  font-weight: bold;
`;
