/* eslint-disable */

import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

const GET_PRODUCT = "GET_PRODUCT";
const GET_MY_PRODUCT = "GET_MY_PRODUCT";
const DELETE_MY_PRODUCT = "DELETE_MY_PRODUCT";

const getProducts = createAction(GET_PRODUCT, data => ({ data }));
const getMyProducts = createAction(GET_MY_PRODUCT, data => ({ data }));
const deleteMyProducts = createAction(DELETE_MY_PRODUCT, id => ({ id }));

const initialState = {
  products: [],
  myProducts: [],
  numberOfElement: "",
  is_loaded: false,
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
      const products = res.data.data.products;
      dispatch(getMyProducts(products));
    });
  };
};

export const deleteMyProductAPI = id => {
  return function (dispatch, getState, { history }) {
    console.log(id);
    apis.RemoveCartProduct(id).then(res => {
      console.log(res);
      dispatch(deleteMyProducts(id));
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
        draft.myProducts = action.payload.data;
        console.log(draft.myProducts);
        draft.is_loaded = true;
      }),
    [DELETE_MY_PRODUCT]: (state, action) =>
      produce(state, draft => {
        draft.products = draft.products.filter(
          p => p.productId !== action.payload.id
        );
      }),
  },
  initialState
);
const productActions = {
  getProductAPI,
  getMyProductAPI,
  deleteMyProductAPI,
};
export { productActions };
