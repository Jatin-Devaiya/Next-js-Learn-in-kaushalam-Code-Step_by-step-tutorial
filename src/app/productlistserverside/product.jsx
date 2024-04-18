"use client";

import React from "react";

const Product = ({price}) => {
  return (
    <>
      <div>product</div>
      <button onClick={() => alert(price)}>click me to show price</button>
    </>
  );
};

export default Product;
