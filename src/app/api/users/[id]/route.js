import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(req, res, next) {
  // console.log(res.params.id, "res");
  const userData = user.filter((item) => {
    return item.id == res.params.id;
  });
  return NextResponse.json(
    userData.length == 0 ? "No data Found" : userData[0],
    {
      status: 200,
    }
  );
}

export async function PUT(req, res, next) {
  let payload = await req.json();
  payload.id = res.params.id;
  console.log(payload);
  if (!payload.id || !payload.name || !payload.email || !payload.age) {
    return NextResponse.json(
      { result: "request data is not valid", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}
