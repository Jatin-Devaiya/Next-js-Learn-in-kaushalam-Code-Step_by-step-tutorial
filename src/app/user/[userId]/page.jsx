import React from "react";
import { userList } from "../page";

const UserDetailsPage = async ({ params }) => {
  const allUser = await userList();
  const userData = allUser[params.userId - 1];
  return (
    <>
      <div>firstName : {userData.firstName}</div>
      <div> lastName : {userData.lastName}</div>
      <div>birthDate : {userData.birthDate}</div>
    </>
  );
};

export default UserDetailsPage;

export async function generateStaticParams() {
  const allUser = await userList();
  const users = await allUser;
  return users.map((user)=>({userId : user.id.toString()}))
}
 