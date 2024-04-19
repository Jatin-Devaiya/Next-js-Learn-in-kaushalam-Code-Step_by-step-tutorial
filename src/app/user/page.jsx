// import React from 'react'

// const UserPage = () => {

//   return (
//     <div>UserPage</div>
//   )
// }

// export default UserPage

// export function generateMetadata(){
//     return{
//         title:"user-page",
//         description : "User page description",
//     }
// }

"use client";

import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <div>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log("file Loaded");
        }}
      />
    </div>
  );
};

export default page;
