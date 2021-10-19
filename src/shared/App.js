import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import ProductList from "../pages/ProductList";
import Product from "../components/Product";
import Header from "../components/Header";
import Cart from "../pages/Cart";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Comment from "../pages/CommentWrite";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/cart" exact component={Cart}></Route>
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
