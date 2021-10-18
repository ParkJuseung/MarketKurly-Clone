import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";

const Signup = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e, setIntput) => {
    setIntput(e.target.value);
  };

  const logIn = () => {
    dispatch(userActions.singUpAPI(email, username, password));
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholer="Email"
          required
          onChange={e => onChange(e, setEmail)}
          value={email}
        />
        <input
          type="username"
          placeholer="실명을 입력해주세요"
          onChange={e => onChange(e, setUsername)}
          required
          value={username}
        />
        <input
          type="password"
          placeholer="Password"
          onChange={e => onChange(e, setPassword)}
          required
          value={password}
        />
      </div>
      <div>
        <button onClick={logIn}>SignUp</button>
      </div>
    </>
  );
};

export default Signup;
