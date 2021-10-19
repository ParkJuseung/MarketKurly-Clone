import React, { useEffect } from "react";
import Product from "../components/Product";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../redux/modules/product";
import Banner from "../shared/img/45f975c1-e57c-403f-9f4f-1cb0c965897a.webp";

const ProductList = (props) => {
  const dispatch = useDispatch();

  const product_list = useSelector((state) => state.product.list);
  console.log(product_list);

  useEffect(() => {
    dispatch(productActions.getProductAPI());
  }, []);

  return (
    <>
      {product_list && (
        <React.Fragment>
          <BannerImg src={Banner}></BannerImg>
          <CategoryText>신상품</CategoryText>
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

export default ProductList;
