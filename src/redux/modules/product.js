import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

const GET_PRODUCT = "GET_PRODUCT";

const getProducts = createAction(GET_PRODUCT, (data) => ({ data }));

const initialState = {
  products: [],
  numberOfElement: "",
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
        draft.products = action.payload.data;
        console.log("draft", draft.products);
      }),
  },
  initialState
);

const productActions = {
  getProductAPI,
};

export { productActions };
