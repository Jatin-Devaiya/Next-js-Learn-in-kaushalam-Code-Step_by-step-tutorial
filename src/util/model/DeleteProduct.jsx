"use client";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteProduct = (props) => {
  const router = useRouter();
  const deleterecord = async () => {
    let responce = await fetch(
      `http://localhost:3000/api/products/${props.id}`,
      { method: "DELETE" }
    );
    responce = await responce.json();
    if (responce.success) {
      alert("Product deleted successfully");
      router.push("/products");
    }
  };
  return (
    <>
      <button onClick={deleterecord}>DELETE</button>
    </>
  );
};

export default DeleteProduct;
