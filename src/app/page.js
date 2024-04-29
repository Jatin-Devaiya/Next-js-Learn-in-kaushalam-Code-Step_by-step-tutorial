"use client";

import { useState } from "react";
import { Roboto } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import style from "./style.module.css";
import { API_BASE_URL } from "@/config/constants";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const [name, setname] = useState("Raj");
  const [color, setcolor] = useState("red");

  const apple = () => {
    setname("kavi");
  };

  // check for deelopment mode or production mode
  console.log(process.env.NODE_ENV, "==================");
  // LOCAL ENV variables
  console.log(process.env.SERVER_PASSWORD, "SERVER_PASSWORD");
  console.log(process.env.DB_PASSWORD, "DB_PASSWORD");

  return (
    <div className="">
      <div>Home Page</div>
      
      {process.env.NODE_ENV == "development" ? (
        <h1>You are development mode</h1>
      ) : (
        <h1>you are production mode</h1>
      )}
      {/* base url use */}
      {API_BASE_URL}

      <div className="red">Hello How are you!</div>
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
      <br/>
      <Link href={"/addproduct"}>Add Product</Link>
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
