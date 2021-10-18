import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";

const Product = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(userActions.logOutAPI());
  };
  return (
    <>
      <button onClick={logOut}>로그아웃</button>
    </>
  );
};

export default Product;
