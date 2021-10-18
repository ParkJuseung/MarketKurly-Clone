import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

const GET_PRODUCT = "GET_PRODUCT";

const getProduct = createAction(GET_PRODUCT, data => ({ data }));

const initialState = {
  products: {
    name: "강원도 감자",
    price: 10000,
    description: "간단한 설명이 들어가는 곳",
    viewCount: 10,
    productCount: 20,
  },
};

export const getProductAPI = () => {
  return function (dispatch, getState, { history }) {
    console.log("호출됨");
    apis
      .getProduct()
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err.response));
  };
};

export default handleActions(
  {
    [GET_PRODUCT]: (state, action) =>
      produce(state, draft => {
        console.log(action);
      }),
  },
  initialState
);

const productActions = {
  getProductAPI,
};

export { productActions };
