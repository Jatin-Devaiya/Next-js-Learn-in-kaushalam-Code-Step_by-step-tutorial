"use client";

import React, { useEffect, useState } from "react";

const UpdateUserPage = ({ params }) => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");

  const id = params.userId;

  const getUserDetails = async () => {
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    setname(data.name);
    setage(data.age);
    setemail(data.email);
  };

  const updateUser = async () => {
    let result = await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    console.log(result, "updated result");
    if (result.success) {
      alert("user updated successfully");
    } else {
      alert("user not updated please enter validate info");
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
      <div>Update User Page</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="Enter Name"
        className="block w-full text-sm text-slate-500"
      />
      <input
        type="text"
        value={age}
        onChange={(e) => setage(e.target.value)}
        placeholder="Enter Age"
        className="block w-full text-sm text-slate-500"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder="Enter Email"
        className="block w-full text-sm text-slate-500"
      />
      <h1>
        <button
          type="submit"
          onClick={updateUser}
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        >
          Add User
        </button>
      </h1>
    </>
  );
};

export default UpdateUserPage;
