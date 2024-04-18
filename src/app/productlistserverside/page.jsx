import React from "react";

const productlistserverside = async () => {
  const productList = async () => {
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products;
  };
  let product = await productList();
  console.log(product, "=======");
  return (
    <div>
      {product.map((item) => (
        <>
          <h1>
            Name : {item.title} || Rating : {item.rating}{" "}
          </h1>
        </>
      ))}
    </div>
  );
};

export default productlistserverside;
