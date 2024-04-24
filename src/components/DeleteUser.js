"use client";
import React from "react";

const DeleteUser = ({ id }) => {
  const userDelete = async () => {
    let result = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result) {
      alert("User delete");
    }
  };
  return <button onClick={userDelete}>Delete</button>;
};

export default DeleteUser;
