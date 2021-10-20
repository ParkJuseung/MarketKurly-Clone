/* eslint-disable */

import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

const GET_PRODUCT = "GET_PRODUCT";
const GET_MY_PRODUCT = "GET_MY_PRODUCT";

const getProducts = createAction(GET_PRODUCT, data => ({ data }));
const getMyProducts = createAction(GET_MY_PRODUCT, data => ({ data }));

const initialState = {
  products: [],
  numberOfElement: "",
};
//product 전체 호출
export const getProductAPI = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getProduct()
      .then(res => {
        dispatch(getProducts(res.data.data));
      })
      .catch(err => console.log(err.response));
  };
};

export const getMyProductAPI = () => {
  return function (dispatch, getState, { history }) {
    apis.getCartProduct().then(res => {
      console.log(res);
    });
  };
};

export default handleActions(
  {
    [GET_PRODUCT]: (state, action) =>
      produce(state, draft => {
        draft.products = action.payload.data;
      }),
    [GET_MY_PRODUCT]: (state, action) =>
      produce(state, draft => {
        draft.products = action.payload.data;
      }),
  },
  initialState
);
const productActions = {
  getProductAPI,
  getMyProductAPI,
};
export { productActions };
