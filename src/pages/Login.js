import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/modules/user";

const Login = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e, setIntput) => {
    setIntput(e.target.value);
  };

  const logIn = () => {
    dispatch(userActions.logInAPI(email, password));
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
          type="password"
          placeholer="Password"
          onChange={e => onChange(e, setPassword)}
          required
          value={password}
        />
      </div>
      <div>
        <button onClick={logIn}>Log In</button>
      </div>
    </>
  );
};

export default Login;
