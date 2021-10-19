/* eslint-disable */

import React, { useEffect } from "react";
import Product from "../components/Product";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../redux/modules/product";
import { Grid } from "../elements/index";
import Banner from "../shared/img/45f975c1-e57c-403f-9f4f-1cb0c965897a.webp";

const ProductList = props => {
  const dispatch = useDispatch();

  const product_list = useSelector(state => state.product.list);
  console.log(product_list);

  useEffect(() => {
    // dispatch(productActions.getProductAPI());
  }, []);

  return (
    <>
      {product_list && (
        <React.Fragment>
          <BannerImg src={Banner}></BannerImg>
          <CategoryText>신상품</CategoryText>
          <Grid width="1050px" is_flex>
            <LittleP>총 {}건</LittleP>
            <div style={{ display: "flex" }}>
              <LittleP2>추천순</LittleP2>
              <LittleLine> | </LittleLine>
              <LittleP2>신상품순</LittleP2>
              <LittleLine> | </LittleLine>
              <LittleP2>인기상품순</LittleP2>
              <LittleLine> | </LittleLine>
              <LittleP2>낮은 가격순</LittleP2>
              <LittleLine> | </LittleLine>
              <LittleP2>높은 가격순</LittleP2>
            </div>
          </Grid>
          <ProductWrap>
            {product_list.map((p, idx) => (
              <Product key={idx} {...p} />
            ))}
          </ProductWrap>
        </React.Fragment>
      )}
    </>
  );
};

const ProductWrap = styled.div`
  width: 1050px;
  margin: 0 auto;

  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 308px);
  grid-column-gap: 50px;
  align-items: center;
`;

const BannerImg = styled.img`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

const CategoryText = styled.p`
  padding-top: 23px;
  font-weight: 700;
  font-size: 28px;
  color: #333;
  line-height: 35px;
  letter-spacing: -1px;
  text-align: center;
`;

const LittleP = styled.p`
  font-size: 12px;
  color: #333;
  line-height: 18px;
`;

const LittleP2 = styled.p`
  font-size: 12px;
  color: #999;
  line-height: 18px;
  margin-left: 6px;
  cursor: pointer;
`;
const LittleLine = styled.p`
  font-size: 12px;
  color: #9999;
  line-height: 18px;
  margin-left: 6px;
`;

export default ProductList;
