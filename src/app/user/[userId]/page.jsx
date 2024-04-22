// import React from "react";
// import { userList } from "../page";

// const UserDetailsPage = async ({ params }) => {
//   const allUser = await userList();
//   const userData = allUser[params.userId - 1];
//   return (
//     <>
//       <div>firstName : {userData.firstName}</div>
//       <div> lastName : {userData.lastName}</div>
//       <div>birthDate : {userData.birthDate}</div>
//     </>
//   );
// };

// export default UserDetailsPage;

// export async function generateStaticParams() {
//   const allUser = await userList();
//   const users = await allUser;
//   return users.map((user)=>({userId : user.id.toString()}))
// }

import React from "react";

const page = async ({ params }) => {
  
  const singleuserAPI = async (id) => {
    let allUser = await fetch(`http://localhost:3000/api/users/${id}`);
    allUser = await allUser.json();
    return allUser;
  };

  const userData = await singleuserAPI(params.userId);

  return (
    <div>
      <h1>single user details</h1>
      <h1>Name : {userData.name}</h1>
      <h1>Age : {userData.age}</h1>
      <h1>Email : {userData.email}</h1>
    </div>
  );
};

export default page;
