"use client";

import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [product, setproduct] = useState([]);
  const allProducts = async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    setproduct(data.products);
  };

  useEffect(() => {
    allProducts();
  }, []);

  return (
    <div>
      <h1>Produc List</h1>
      {product.map((product) => {
        return (
          <>
            <h1>
              ID : {product.id} NAME : {product.title}
            </h1>
            <img src={product.images[0]} height={100} width={70}></img>
          </>
        );
      })}
    </div>
  );
};

export default ProductList;
