"use client";

import React, { useState } from "react";

const AddUserPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const addUser = async () => {
    let responce = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    responce = await responce.json();
    if (responce.success) {
      alert("User added successfully");
    } else {
      alert("User not Add");
    }
    console.log(responce, "res");
  };
  return (
    <>
      <div className="text-center">AddUserPage</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
        className="block w-full text-sm text-slate-500"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter Age"
        className="block w-full text-sm text-slate-500"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        className="block w-full text-sm text-slate-500"
      />
      <h1>
        <button
          type="submit"
          onClick={addUser}
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        >
          Add User
        </button>
      </h1>
    </>
  );
};

export default AddUserPage;
