/* eslint-disable */

import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { commentActions } from "../redux/modules/comment";

const Comment = (props) => {
  const { productId } = props;
  const dispatch = useDispatch();
  // checks logined
  // const is_login = useSelector((state) => state.user.is_login);
  const comment_list = useSelector((state) => state.comment.list);

  React.useEffect(() => {
    if (!comment_list[props.id]) {
      dispatch(commentActions.getCommentAPI(props.id));
    }
  }, []);

  // Rating
  //   const [value, setValue] = useState(0);

  // Modal functions
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [comment, setComment] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setComment(e.target.value);
  };

  const addComment = () => {
    if (comment === "") {
      window.alert("댓글이 공란입니다.");
      return;
    }

    dispatch(commentActions.addCommentAPI(productId, comment));

    // sets the modal comment input as default
    // setValue("");
    setComment("");
    closeModal();
  };

  // Open modal
  const openModal = (e) => {
    setModalIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

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
            <tr>
              <td>6</td>
              <td className="title">{props.content}</td>
              <td>{props.username}</td>
              <td>{props.createdDate}</td>
              <td>0</td>
            </tr>
          </tbody>
          {comment_list[props.id]?.map((c) => {
            return <div key={c.id} {...c} />;
          })}
        </Table>
        <Button onClick={openModal}>후기쓰기</Button>
      </Grid>
      <ModalFrame>
        <Modal isOpen={modalIsOpen} className="Modal">
          <ModalTitle>리뷰 작성하기</ModalTitle>
          <br />

          <ElTextarea
            placeholder="리뷰 작성"
            rows={5}
            onChange={onChange}
            value={comment}
          />
          <ModalBtn className="ModalBtn">
            <BtnInModal className="BtnInModal" onClick={addComment}>
              작성 완료
            </BtnInModal>
            <BtnInModal className="BtnInModal" onClick={closeModal}>
              닫기
            </BtnInModal>
          </ModalBtn>
        </Modal>
      </ModalFrame>
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

const ModalFrame = styled.div`
  max-width: 400px;
  max-height: 400px;
`;

const BtnInModal = styled.button`
  padding: 15px 15px 15px 15px;
  margin-top: 18px;
  border: none;
  border-radius: 10px;
  background: white;
  font-weight: bolder;
  :hover {
    transform: scale(1.1);
    transition: transform 200ms ease-in-out;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;

const ModalBtn = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ModalTitle = styled.h2`
  background: white;
  text-align: center;
  width: 100%;
  padding: 0px;
  border-radius: 10px;
  margin-bottom: 70px;
`;

const ElTextarea = styled.textarea`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #212121;
  border-radius: 4px;
  width: 100%;
  max-width: 800px;
  padding: 12px 4px;
  box-sizing: border-box;
`;
export default Comment;
