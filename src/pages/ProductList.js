/* eslint-disable */

import React, { useEffect } from "react";
import Product from "../components/Product";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../redux/modules/product";
import { Grid } from "../elements/index";
import Banner from "../shared/img/45f975c1-e57c-403f-9f4f-1cb0c965897a.webp";
import { apis } from "../shared/axios";
import _ from "lodash";
import Infinity from "../shared/Infinity";

const ProductList = (props) => {
  const dispatch = useDispatch();
  const [banner, setBenner] = React.useState(null);

  //배너 가져오기
  React.useEffect(() => {
    dispatch(productActions.getProductAPI());
    const fetchData = async () => {
      try {
        const result = await apis.getBanner();
        const _banner = result.data.data.banners[9];
        setBenner(_banner);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // 그냥 productList 불러오는거랑 search 해서 불러오는거랑 구조가 다름. => 리덕스의 search flag를 이용해서 product_list
  //에 무엇을 넣을지 삼항연산자로 넣음
  const search = useSelector((state) => state.product.search);

  const product_list =
    search === true
      ? useSelector((state) => state.product.searchProducts)
      : useSelector((state) => state.product.products);

  console.log(search);
  console.log(product_list);

  const product_list_count = useSelector(
    (state) => state.product.products.numberOfElements
  );

  console.log(useSelector((state) => state.product.infinityProducts));
  // const infinityProducts = useSelector(
  //   (state) => state.product.infinityProducts
  // );
  const is_loading = useSelector((state) => state.product.is_loading);
  const paging = useSelector((state) => state.product.paging);

  return (
    <>
      {product_list && (
        <Infinity
          paging={paging}
          is_loading={is_loading}
          callNext={() => {
            search === true
              ? dispatch(productActions.getSearchProductAPI())
              : dispatch(productActions.getProductAPI());
          }}
          is_next={paging.next < 5 ? true : false}
        >
          <React.Fragment>
            <BannerImg src={banner}></BannerImg>
            <CategoryText>베스트</CategoryText>
            <Grid width="1050px" is_flex>
              <LittleP>총 {product_list_count}건</LittleP>
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
        </Infinity>
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
