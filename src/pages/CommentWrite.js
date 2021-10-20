/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";

// import { actionCreators as commentActions} from "../redux/modules/comment";
// import { useSelector, useDispatch } from "react-redux";

const CommentWrite = props => {
  // const dispatch = useDispatch();
  // const [content, setContent] = React.useState('');
  // const {productId} = props;
  // const addComment = () => {
  //     dispatch(commentActions.addCommentAPI(content, productId));
  //   }

  // const changeContents = (e) => {
  //     setContent(e.target.value);
  // }

  return (
    <React.Fragment>
      <Top>리뷰 작성하기</Top>
      <Input placeholder="후기 내용" />
      <Button>후기작성</Button>
    </React.Fragment>
  );
};

const Top = styled.div`
  max-width: 1000px;
  width: 100%;
  background-color: purple;
  color: white;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
`;
const Input = styled.input`
  max-width: 1000px;
  align-items: center;
  margin: 30px 10px;
  width: 100%;
  height: 100px;
`;
const Button = styled.button``;

export default CommentWrite;
