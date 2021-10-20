/* eslint-disable */
import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const Comment = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <P>
          PRODUCT REVIEW
          <br />
          ▪ 상품에 대한 리뷰가 쓰여지는 공간입니다.
          <br />
        </P>
        <Table>
          <thead>
            <tr>
              <th scope="cols" style={{ width: "50px" }}>
                번호
              </th>
              <th scope="cols" style={{ width: "1000px" }}>
                내용
              </th>
              <th scope="cols" style={{ width: "100px" }}>
                작성자
              </th>
              <th scope="cols" style={{ width: "100px" }}>
                작성일
              </th>
              <th scope="cols" style={{ width: "50px" }}>
                추천
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="title">비싼데 맛있어요</td>
              <td>김*지</td>
              <td>2020-10-11</td>
              <td>3</td>
            </tr>
            <tr>
              <td>2</td>
              <td className="title">개맛없네요 사지마세요</td>
              <td>박*승</td>
              <td>2020-09-09</td>
              <td>0</td>
            </tr>
            <tr>
              <td>3</td>
              <td className="title">무야호</td>
              <td>최*식</td>
              <td>1999-01-01</td>
              <td>1</td>
            </tr>
            <tr>
              <td>4</td>
              <td className="title">
                길이체크길이체크길이체크길이체크길이체크길이체크길이체크v길이체크길이체크길이체크길이체크길이체크길이체크길이체크길이체크길이체크
              </td>
              <td>세글자</td>
              <td>1000-01-01</td>
              <td>100</td>
            </tr>
            <tr>
              <td>5</td>
              <td className="title">마지막리뷰</td>
              <td>세글자</td>
              <td>2000-11-11</td>
              <td>0</td>
            </tr>
          </tbody>
        </Table>
        <Button
          onClick={() =>
            window.open(
              "/comment",
              "box_new",
              "width=600,height=700,scrollbars=no,resizable=yes"
            )
          }
        >
          후기쓰기
        </Button>
      </Grid>
    </React.Fragment>
  );
};

const Grid = styled.div`
  display: block;
  max-width: 1050px;
  margin: 0 auto;
  text-align: center;
`;
const P = styled.p`
  text-align: left;
  color: #4c4c4c;
`;
const Table = styled.p`
  width: 100%;
  color: #4c4c4c;
  border-top: 2px solid purple;
  border-bottom: 1px solid purple;
  font-size: 12px;
  & tr {
  }

  & td {
    padding: 20px;
    border-bottom: 0.5px solid #dcdcdc;
  }

  & th {
    padding: 20px;
    border-bottom: 0.5px solid #dcdcdc;
  }

  & td.title {
    text-align: left;
    padding-left: 15px;
  }

  & tr:hover {
    background-color: #d3d3d3;
  }
`;

const Button = styled.button`
  display: inline-block;
  text-align: center;
  width: 130px;
  height: 30px;
  margin: 20px 0px 0px 920px;
  background-color: #795b8f;
  border: 1px solid #5f0080;
  color: #fff;
  font-size: 13px;
  &:hover {
    background-color: #fff;
    color: #5f0080;
  }
`;

export default Comment;
