import { NextResponse } from "next/server";

export async function GET(req, res) {
  const studentDetails = res.params.student;
  return NextResponse.json({ result: studentDetails }, { status: 200 });
}
