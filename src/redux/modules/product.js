import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

const GET_PRODUCT = "GET_PRODUCT";

const getProducts = createAction(GET_PRODUCT, (data) => ({ data }));

const initialState = {
  products: {
    name: "강원도 감자",
    price: 10000,
    description: "간단한 설명이 들어가는 곳",
    viewCount: 10,
    productCount: 20,
  },
};
//product 전체 호출
export const getProductAPI = () => {
  return function (dispatch, getState, { history }) {
    console.log("호출됨");
    apis
      .getProduct()
      .then((res) => {
        console.log("응답", res);
        dispatch(getProducts(res.data.data));
      })
      .catch((err) => console.log(err.response));
  };
};

export default handleActions(
  {
    [GET_PRODUCT]: (state, action) =>
      produce(state, (draft) => {
        console.log("액션", action);
        draft.list = action.payload.data;
        // console.log("draft", draft.list);
      }),
  },
  initialState
);

const productActions = {
  getProductAPI,
};

export { productActions };
