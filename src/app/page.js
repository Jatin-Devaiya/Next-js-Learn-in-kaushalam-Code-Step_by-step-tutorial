"use client";

import { Roboto } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import style from "./style.module.css";
import Image from "next/image";

const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [name, setname] = useState("Raj");
  const [color, setcolor] = useState("red");

  const apple = () => {
    setname("kavi");
  };

  return (
    <div className="">
      <div>Home Page</div>
      <div>Hello How are you!</div>
      <div className={color == "red" ? style.red : style.green}>I am Fine</div>
      <button onClick={() => setcolor("gray")}>change color</button>
      <br />
      <br />
      {/* Font optimazation */}
      {/* <h1 style={{fontFamily:"Roboto", fontWeight:100}}>Font Optimazatiom</h1><br/> */}
      <h1 className={roboto.className}>
        Font Optimazatiom with Next js feature
      </h1>
      <br />
      <Link href={"/login"}>Go to Login Page</Link>{" "}
      <Link href={"/about"}>Go to About Page</Link>
      <div>My name is {name}</div>
      <Name name="jatin" surname="Devaiya" />
      <Name name="Hevin" />
      <button onClick={() => apple()} className="hover:underline">
        Click Me
      </button>{" "}
      <br />
      {/* <img src="/giftcard.jpg"/>
      <Image src={"/giftcard.jpg"} height={100} width={100}/> */}
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
