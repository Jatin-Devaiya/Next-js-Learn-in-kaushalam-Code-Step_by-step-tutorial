import React from "react";

const Getusers = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
};

export default Getusers;
