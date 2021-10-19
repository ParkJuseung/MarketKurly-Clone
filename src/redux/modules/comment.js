// import { createAction, handleActions } from "redux-actions";
// // 불변성 관리(immer)
// import { produce } from "immer";
// import {apis} from "../../shared/axios";

// // actions
// const SET_COMMENT = "SET_COMMENT";
// const ADD_COMMENT = "ADD_COMMENT";

// // action creator functions
// const setComment = createAction(SET_COMMENT, (product_id, comment_list) => ({
//   product_id,
//   comment_list,
// }));
// const addComment = createAction(ADD_COMMENT, (product_id, comment) => ({
//   product_id,
//   comment,
// }));


// const initialState = {
//   list: {},
// };

// const addCommentAPI = (product_id, contents) => {
//   return function (dispatch, getState, { history }) {

//     let comment_data = {
//       productId : product_id,
//       username : localStorage.getItem("nick").replace('"', "").replace('"', ""),
//       content: contents,
//     };
//     apis(comment_data)
//       .then((res) => {
//         window.alert("코멘트 더하기", product_id, comment_data);
//         dispatch(addComment(product_id, comment_data));
//       })
//       .catch((err) => {
//         window.alert("코멘트 기능 에러", err);
//       });
//   };
// };

// // enables to bring specific comment info about a certain post from the DB
// const getCommentAPI = (post_id) => {
//   return function (dispatch, getState, { history }) {

//     if (!post_id) {
//       return;
//     }

//     apis({
//       method: "GET",
//       url: `http://3.143.205.173:8080/api/products/${post_id}`,
//     })
//       .then((res) => {
//         let list = [];

//         let response_data = res.data;

//         response_data.forEach((rd) => {
//           list.push({ ...rd });
//         });

//         dispatch(setComment(post_id, list));
//       })
//       .catch((err) => console.log("Get Error!", err));
//     // 1. 서버에다가 해당 포스트 아이디에 대한 정보를 요청해야한다.
//     // 2. 포스트 아이디에 따른 데이터를 받는다
//     // 3. 같은 아이디를 가진 정보들 안에서 코멘트들만 추린다. (시간 내림차순)
//     // 4. 그 데이터를 forEach로 하나하나 돌려서 빈 list 안에 넣어주고 그 완성된 리스트를 setComment 해준다.
//     // 5. UseEffect 를 통해 해당 페이지가 로드되었을시 보여줄 수 있도록 처리해준다.
//   };
// };

// export default handleActions(
//   {
//     [SET_COMMENT]: (state, action) =>
//       produce(state, (draft) => {
//         // let data = {[post_id]: com_list, ...}
//         draft.list[action.payload.post_id] = action.payload.comment_list;
//       }),
//     [ADD_COMMENT]: (state, action) =>
//       produce(state, (draft) => {
//         // when starts with an empty array
//         if (!draft.list[action.payload.post_id]) {
//           draft.list[action.payload.post_id] = [action.payload.comment];
//           return;
//         }
//         draft.list[action.payload.post_id].unshift(action.payload.comment);
//         console.log(action.payload.post_id, action.payload.comment);
//       }),
//   },
//   initialState
// );

// const actionCreators = {
//   setComment,
//   addComment,
//   getCommentAPI,
//   addCommentAPI,
// };

// export { actionCreators };
