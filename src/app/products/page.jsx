import Link from "next/link";
import React from "react";

const getProducts = async () => {
  let data = await fetch(`http://localhost:3000/api/products`);
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false };
  }
};

const page = async () => {
  const product = await getProducts();
  console.log(product, "============");
  return (
    <div>
      <h1>Product List</h1>
      <Link href={`/`}>Home</Link>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Color</td>
            <td>Category</td>
          </tr>
        </thead>
        <tbody>
          {product.map(
            (item) => (
              //   {
              // return (
              //   <>
              <tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.color}</td>
                <td>{item.category}</td>
                <td>
                  <Link
                    href={`products/${item._id}`}
                    className="text-blue-600 visited:text-purple-600"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            )
            //   </>
            // );
            //   }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default page;
