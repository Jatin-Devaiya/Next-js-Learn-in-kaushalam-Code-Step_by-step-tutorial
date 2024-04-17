"use client";

import React from "react";

const Lecture = ({ params }) => {
  console.log(params, "param");
  return (
    <div>
      <h1>Day of College {params.lecture[0]} </h1>
      <h1>Lecture No. {params.lecture[1]} </h1>
    </div>
  );
};

export default Lecture;
