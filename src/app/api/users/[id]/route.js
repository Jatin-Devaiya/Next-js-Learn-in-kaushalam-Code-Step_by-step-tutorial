import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(req, res, next) {
  console.log(res.params.id, "res");
  const userData = user.filter((item) => {
    return item.id == res.params.id;
  });

  return NextResponse.json(userData.length == 0 ? "No data Found" : userData[0], {
    status: 200,
  });
}
