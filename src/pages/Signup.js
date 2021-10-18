import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";
import Text from "../elements/Text";

const Signup = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const onChange = (e, setIntput) => {
    setIntput(e.target.value);
  };

  const signUp = () => {
    dispatch(userActions.singUpAPI(email, username, password));
  };

  const checkDuplicateEmail = () => {
    console.log("클릭");
  };

  return (
    <>
      <Wrap>
        <Text size="20px" bold>
          회원가입
        </Text>
        <InputWrapper>
          <Text size="14px" padding="20px" margin="50px" bold>
            아이디
          </Text>
          <Input
            type="text"
            placeholer="Email"
            required
            onChange={e => onChange(e, setEmail)}
            value={email}
          />
          <Button>중복확인</Button>
        </InputWrapper>

        <InputWrapper>
          <Text size="14px" padding="20px" margin="50px" bold>
            실명
          </Text>
          <Input
            type="text"
            placeholer="Email"
            onChange={e => onChange(e, setUsername)}
            required
            value={username}
          />
          <Button>중복확인</Button>
        </InputWrapper>
        <InputWrapper>
          <Text size="14px" padding="20px" margin="50px" bold>
            비밀번호
          </Text>
          <Input
            type="text"
            placeholer="Email"
            onChange={e => onChange(e, setPassword)}
            required
            value={password}
          />
          <Button>중복확인</Button>
        </InputWrapper>

        <InputWrapper>
          <Text size="14px" padding="20px" margin="50px" bold>
            비밀번호
          </Text>
          <Input
            type="text"
            placeholer="Email"
            onChange={e => onChange(e, setPasswordCheck)}
            required
            value={passwordCheck}
          />
          <Button>중복확인</Button>
        </InputWrapper>

        <ButtonWrapper>
          <Button onClick={signUp}>가입하기</Button>
        </ButtonWrapper>
      </Wrap>
    </>
  );
};

export default Signup;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 640px;
  height: 200px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 300px;
  height: 54px;
  margin: 10px 0;
  padding: 15px 10px;
  border: 1px solid #939597;
  border-radius: 5px;
  font-size: 16px;
  border-radius: 5px;
  color: black;
  margin-right: 20px;
  placeholder: ${props => props.placeholder};
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: white;
  color: #5f0080;
  font-weight: 900;
  font-size: 14px;
  width: 100px;
  height: 54px;
  border-radius: 5px;
  border: 0.5px solid #5f0080;
`;
