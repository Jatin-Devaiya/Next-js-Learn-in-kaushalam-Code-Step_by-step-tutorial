import { NextResponse } from "next/server";

export function GET(req) {
  return NextResponse.json({ name: "jatin", age: 28, city: "s.nagar" });
}
