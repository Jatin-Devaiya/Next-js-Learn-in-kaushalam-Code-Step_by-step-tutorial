'use client'

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [name, setname] = useState("Raj")
  const apple = ()=>{
    setname("kavi")
  }
  return (
    <div className="">
      <div>Home Page</div>
      <Link href={"/login"}>Go to Login Page</Link> {" "}
      <Link href={"/about"}>Go to About Page</Link>
      <div>My name is {name}</div>
      <Name name="jatin" surname="Devaiya"/>
      <Name name="Hevin"/>

      <button onClick={()=>apple()} className="hover:underline">Click  Me</button>
    </div>
  );
}

const Name= (pros)=>{
  return(
    <h1>My Name is {pros.name}{" "}{pros.surname}</h1>
  )
}
