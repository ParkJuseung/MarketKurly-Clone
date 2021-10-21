import { createAction, handleActions } from "redux-actions";
// 불변성 관리(immer)
import { produce } from "immer";
import { apis } from "../../shared/axios";

// actions
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";


// action creator functions
const setComment = createAction(SET_COMMENT, (data) => ({
  data
}));

const addComment = createAction(ADD_COMMENT, (product_id, comment) => ({
  product_id,
  comment,
}));

const initialState = {
  list: {},
};

const addCommentAPI = (product_id, content) => {
  return function (dispatch, getState, { history }) {
    let comment_data = {
      productId: product_id,
      content: content,
      title: "가짜타이틀임",
    };

    apis
      .addReviews(comment_data)
      .then(res => {
        console.log(res);
        // window.alert("코멘트 더하기", product_id, comment_data);
        // dispatch(addComment(product_id, comment_data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

// enables to bring specific comment info about a certain post from the DB
const getCommentAPI = (product_id) => {
  return function (dispatch, getState, { history }) {

    if (!product_id) {
      return;
    }

    apis
      .getReviews(product_id)
      .then(res => {
        // let list = [];

        // res.data.forEach((d) => {
        //   list.push({ ...d });
        // });
        console.log(res);
        dispatch(setComment(res.data.data.reviews));
      })
      .catch(err => console.log("Get Error!", err.response));
  };
};

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, draft => {

        draft.list = action.payload.data;

        draft.loaded = true;
        console.log(action)
      }),

    [ADD_COMMENT]: (state, action) =>
      produce(state, draft => {
        // when starts with an empty array
        if (!draft.list[action.payload.product_id]) {
          draft.list[action.payload.product_id] = [action.payload.comment];
          return;
        }
        draft.list[action.payload.product_id].unshift(action.payload.comment);
        console.log(action.payload.product_id, action.payload.comment);
      }),
  },
  initialState
);

const commentActions = {
  setComment,
  addComment,
  getCommentAPI,
  addCommentAPI,
};

export { commentActions };
