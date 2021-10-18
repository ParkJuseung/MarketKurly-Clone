import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

const SIGN_UP = "SIGN_UP";
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

const signUp = createAction(SIGN_UP, user => ({ user }));
const logIn = createAction(LOG_IN, user => ({ user }));
const logOut = createAction(LOG_OUT, user => ({user}));

const initialState = {
  user: null,
  is_login: false,
};

export const singUpAPI = (email, username, password) => {
  return function (dispatch, getState, { history }) {
    const _user = {
      id: "4",
      email,
      username,
      password,
      token: "gizmogizmogizmo",
    };

    apis
      .signUp(_user)
      .then(res => {
        const user = res.data;
        localStorage.setItem("token", res.data.token);
        dispatch(signUp(user));
        history.push("/login");
      })
      .catch(err => console.log(err));
  };
};

export const logInAPI = (email, password) => {
  return function (dispatch, getState, { history }) {
    const _user = {
      email,
      password,
    };

    apis
      .logIn("1")
      .then(res => {
        console.log(res);
        const user = res.data;
        localStorage.setItem("token", user.token);
        dispatch(logIn(user));
        history.push("/");
      })
      .catch(err => console.log(err));
    return null;
  };
};

export const logOutAPI = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("token");
    dispatch(logOut());
    history.push("/login");
  };
};

export default handleActions(
  {
    [SIGN_UP]: (state, action) =>
      produce(state, draft => {
        draft.user = { ...action.payload.user };
        console.log(draft.user);
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, draft => {
        draft.user = null;
        draft.is_login = false;
      }),
    [LOG_IN]: (state, action) =>
      produce(state, draft => {
        draft.user = { ...action.payload.user };
        draft.is_login = true;
      }),
  },
  initialState
);

const userActions = {
  singUpAPI,
  logInAPI,
  logOutAPI,
};

export { userActions };
