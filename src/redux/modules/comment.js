import { createAction, handleActions } from "redux-actions";
// 불변성 관리(immer)
import { produce } from "immer";
import { apis } from "../../shared/axios";

// actions
const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

// action creator functions
const setComment = createAction(SET_COMMENT, (product_id, comment_list) => ({
  product_id,
  comment_list,
}));
const addComment = createAction(ADD_COMMENT, (product_id, comment) => ({
  product_id,
  comment,
}));

const initialState = {
  list: {},
};

const addCommentAPI = (product_id, comment) => {
  return function (dispatch, getState, { history }) {
    let comment_data = {
      productId: product_id,
      username: "",
      comment: comment,
    };

    console.log(comment_data);

    // apis
    //   .addReviews()
    //   .then((res) => {
    //     window.alert("코멘트 더하기", product_id, comment_data);
    //     dispatch(addComment(product_id, comment_data));
    //   })
    //   .catch((err) => {
    //     window.alert("코멘트 기능 에러", err);
    //   });
  };
};

// enables to bring specific comment info about a certain post from the DB
const getCommentAPI = (product_id, comment) => {
  return function (dispatch, getState, { history }) {
    let comment_data = {
      productId: product_id,
      username: "",
      comment: comment,
    };

    if (!product_id) {
      return;
    }

    apis
      .getReviews()
      .then(res => {
        let list = [];

        // let response_data = res.data;
        // response_data.forEach((rd) => {
        //   list.push({ ...rd });
        // });

        dispatch(setComment(comment_data, list));
      })
      .catch(err => console.log("Get Error!", err));
  };
};

export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, draft => {
        // let data = {[post_id]: com_list, ...}
        draft.list[action.payload.product_id] = action.payload.comment_list;
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

const actionCreators = {
  setComment,
  addComment,
  getCommentAPI,
  addCommentAPI,
};

export { actionCreators };
