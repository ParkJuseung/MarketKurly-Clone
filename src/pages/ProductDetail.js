import React from "react";
import Comment from "../components/Comment";
import Header from "../components/Header";

const Product = () => {

  return (
    <React.Fragment>
      <Header/>
      <p style={{textAlign:"center"}}>Product Detail</p>
      <Comment/>

    </React.Fragment>
  );
};

export default Product;
