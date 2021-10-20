/* eslint-disable */

import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

const GET_PRODUCT = "GET_PRODUCT";
const GET_MY_PRODUCT = "GET_MY_PRODUCT";
const ADD_CART = "ADD_CART";

const getProducts = createAction(GET_PRODUCT, (data) => ({ data }));
const getMyProducts = createAction(GET_MY_PRODUCT, (data) => ({ data }));
const addCart = createAction(ADD_CART, (data) => ({ data }));

const initialState = {
  products: [],
  numberOfElement: "",
};
//product 전체 호출
export const getProductAPI = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getProduct()
      .then((res) => {
        dispatch(getProducts(res.data.data));
      })
      .catch((err) => console.log(err));
  };
};

export const getMyProductAPI = () => {
  return function (dispatch, getState, { history }) {
    apis.getCartProduct().then((res) => {
      console.log(res);
    });
  };
};

export const addCartAPI = (productId, amount) => {
  return function (dispatch, getState, { history }) {
    const _cart = {
      productId: productId,
      amount: amount,
    };
    apis
      .AddProductToCart(_cart)
      .then((res) => {
        console.log(" 장바구니 성공", res);
        window.alert(res.data.message);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

export default handleActions(
  {
    [GET_PRODUCT]: (state, action) =>
      produce(state, (draft) => {
        draft.products = action.payload.data;
      }),
    [GET_MY_PRODUCT]: (state, action) =>
      produce(state, (draft) => {
        draft.products = action.payload.data;
      }),
  },
  initialState
);
const productActions = {
  getProductAPI,
  getMyProductAPI,
  addCartAPI,
};
export { productActions };
