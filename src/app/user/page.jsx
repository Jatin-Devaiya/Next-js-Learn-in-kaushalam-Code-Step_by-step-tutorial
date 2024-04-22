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

// "use client";

// import Script from "next/script";
// import React from "react";

// const page = () => {
//   return (
//     <div>
//       <Script
//         src="/location.js"
//         onLoad={() => {
//           console.log("file Loaded");
//         }}
//       />
//     </div>
//   );
// };

// export default page;

import React from "react";
import UserComponent from "@/components/user";
import Link from "next/link";

export async function userList() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}

const User = async () => {
  const alluser = await userList();
  return (
    <div>
      <h1>User List</h1>
      <br />
      <UserComponent />
      <br />
      {alluser.map((user) => {
        return (
          <>
            <Link href={`/user/${user.id}`} user={user}>
              <h1 key={user.id}> User : {user?.firstName}</h1>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default User;