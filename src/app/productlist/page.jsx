"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import imgpath from "../../../public/vercel.svg";

console.log(imgpath, "===");

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
      {/* <h1>
        <Image src={imgpath} />
      </h1>
      <h1>
        <img src={imgpath.src} alt="img" />
      </h1> */}
      <br />
      <br />
      {product.map((product) => {
        return (
          <>
            <h1>
              ID : {product.id} NAME : {product.title}
            </h1>
            <Image src={product.images[0]} height={100} width={70} />
          </>
        );
      })}
    </div>
  );
};

export default ProductList;
