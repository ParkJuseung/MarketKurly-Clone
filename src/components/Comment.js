import React from "react";
import styled from "styled-components";

const Comment = props => {
  console.log(props);
  return (
    <CommentTr>
      <CommentTd>{props.id + 1}</CommentTd>
      <CommentTd className="title">{props.content}</CommentTd>
      <CommentTd>{props.username}</CommentTd>
      <CommentTd>{props.createdAt}</CommentTd>
      <CommentTd>{props.like}</CommentTd>
    </CommentTr>
  );
};

Comment.defaultProps = {
  index: "0",
  content: "테스트",
  username: "아무개",
  createdAt: "2000-01-01",
  like: "3",
};

const CommentTr = styled.tr`
  &:hover {
    background-color: #d3d3d3;
  }
`;

const CommentTd = styled.td`
  padding: 20px;
  border-bottom: 0.5px solid #dcdcdc;
  &.title {
    text-align: left;
    padding-left: 15px;
  }
`;

export default Comment;
