import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import Header from "../components/Header";
import Product from "../pages/Product";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
      <Header/>
        <Switch>
          <Route path="/" exact component={Product}></Route>
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
