import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

const GET_PRODUCT = "GET_PRODUCT";

const getProducts = createAction(GET_PRODUCT, data => ({ data }));

const initialState = {
  products: [],
};
//product 전체 호출
export const getProductAPI = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getProduct()
      .then(res => {
        dispatch(getProducts(res.data));
      })
      .catch(err => console.log(err.response));
  };
};

export default handleActions(
  {
    [GET_PRODUCT]: (state, action) =>
      produce(state, draft => {
        draft.products = action.payload.data;
        // console.log("draft", draft.list);
      }),
  },
  initialState
);

const productActions = {
  getProductAPI,
};

export { productActions };
