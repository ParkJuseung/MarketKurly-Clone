import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import ProductList from "../pages/ProductList";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact component={Login}></Route>
          {/* <Route path="/" exact component={Login}></Route> */}
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
