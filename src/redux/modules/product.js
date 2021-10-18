import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

const GET_PRODUCT = "SIGN_UP";

const getProduct = createAction(GET_PRODUCT, (data) => ({ data }));

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
    apis
      .getProduct()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.response));
  };
};

export default handleActions(
  {
    [GET_PRODUCT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action);
      }),
    //   [LOG_OUT]: (state, action) =>
    //     produce(state, draft => {
    //       draft.user = null;
    //       draft.is_login = false;
    //     }),
  },
  initialState
);

const productActions = {
  getProduct,
};

export { productActions };
