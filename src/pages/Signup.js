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

  const onChange = (e, setIntput) => {
    setIntput(e.target.value);
  };

  const signUp = () => {
    dispatch(userActions.singUpAPI(email, username, password));
  };

  return (
    <>
      <Wrap>
        <Text size="20px" bold>
          회원가입
        </Text>
        <InputWrapper>
          <Input
            type="text"
            placeholer="Email"
            required
            onChange={e => onChange(e, setEmail)}
            value={email}
          />
          <Input
            type="username"
            placeholer="실명을 입력해주세요"
            onChange={e => onChange(e, setUsername)}
            required
            value={username}
          />
          <Input
            type="password"
            placeholer="Password"
            onChange={e => onChange(e, setPassword)}
            required
            value={password}
          />
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
  box-sizing: border-box;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 100%;
  margin-top: 90px;
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
  placeholder: ${props => props.placeholder};
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  background-color: #5f0080;
  color: white;
  font-weight: 900;
  font-size: 14px;
  width: 300px;
  height: 54px;
  border-radius: 5px;
`;
