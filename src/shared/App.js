import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import ProductList from "../pages/ProductList";
import Product from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
<<<<<<< HEAD
import Comment from "../pages/CommentWrite";
import ProductDetail from "../pages/ProductDetail";
=======
import ProductDetail from "../pages/ProductDetail";
import CommentWrite from "../pages/CommentWrite";

>>>>>>> 0853f4d36141b0b42c32817d58fe2effb98a957f

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        {/* <Header/> */}
        <Switch>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact component={Login}></Route>
<<<<<<< HEAD
          <Route path="/product/:id" exact component={ProductDetail}></Route>
=======
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/product" exact component={ProductDetail}></Route>
          <Route path="/comment" exact component={CommentWrite}></Route>
>>>>>>> 0853f4d36141b0b42c32817d58fe2effb98a957f
        </Switch>
        <Footer/>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
