/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";

const CommentWrite = props => {
  return (
    <React.Fragment>
      <input placeholder="후기 제목" />
      <input placeholder="후기 내용" />
      <button>후기작성</button>
    </React.Fragment>
  );
};

export default CommentWrite;
