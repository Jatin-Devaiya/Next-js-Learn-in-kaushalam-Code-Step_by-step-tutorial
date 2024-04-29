"use client";

import React, { useState } from "react";

const page = () => {
  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [color, setcolor] = useState("");
  const [category, setcategory] = useState("");

  const addProduct = async () => {
    let result = await fetch(`http://localhost:3000/api/products`, {
      method: "POST",
      body: JSON.stringify({name, price, color, category}),
    });
    result = await result.json();
    if (result.success) {
      alert("Product added successfully");
    }
  };

  return (
    <>
      <div>Add Product</div>
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
        onClick={addProduct}
      >
        Add Product
      </button><br />
      <button
        className="active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        onClick={()=>(
            setName(""), 
            setprice(""),
            setcolor(""),
            setcategory("")
        )
    }
      >
        Clear
      </button>
    </>
  );
};

export default page;
