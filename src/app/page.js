"use client";

import Link from "next/link";
import { useState } from "react";
import custom from "./custom.module.css";
import other from "./other.module.css";
import style from "./style.module.css";

export default function Home() {
  const [name, setname] = useState("Raj");
  const [color, setcolor] = useState("red");

  const apple = () => {
    setname("kavi");
  };

  return (
    <div className="">
      <div className={custom.main}>Home Page</div>
      <div className={other.main}>Hello How are you!</div>
      <div className={color=="red"?style.red:style.green}>I am Fine</div>
      <button onClick={()=>setcolor("gray")}>change color</button>
      <br />

      <Link href={"/login"}>Go to Login Page</Link>{" "}
      <Link href={"/about"}>Go to About Page</Link>
      <div>My name is {name}</div>
      <Name name="jatin" surname="Devaiya" />
      <Name name="Hevin" />
      <button onClick={() => apple()} className="hover:underline">
        Click Me
      </button>
    </div>
  );
}

const Name = (pros) => {
  return (
    <h1>
      My Name is {pros.name} {pros.surname}
    </h1>
  );
};
