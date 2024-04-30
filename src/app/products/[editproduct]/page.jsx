"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = (props) => {
  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [color, setcolor] = useState("");
  const [category, setcategory] = useState("");

  const getProductDetails = async () => {
    let productDeta = await fetch(
      `http://localhost:3000/api/products/${props.params.editproduct}`
    );
    productDeta = await productDeta.json();
    if (productDeta.success) {
      let result = productDeta.result;
      setName(result.name);
      setprice(result.price);
      setcolor(result.color);
      setcategory(result.category);
    }
  };
  useEffect(() => {
    getProductDetails();
  });

  return (
    <>
      <div>Update Product</div>
      <input
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => setprice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product color"
        value={color}
        onChange={(e) => setcolor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product category"
        value={category}
        onChange={(e) => setcategory(e.target.value)}
      />

      <br />

      <button
        className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        onClick={""}
      >
        Update Product
      </button><br /><br />
      <Link href={"/products"}>go to Product List Page</Link>
    </>
  );
};

export default page;
