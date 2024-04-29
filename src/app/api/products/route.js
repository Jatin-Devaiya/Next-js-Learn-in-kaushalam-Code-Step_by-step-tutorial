import { connectionSrt } from "@/util/db";
import { Product } from "@/util/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {

  await mongoose.connect(connectionSrt);
  const data = await Product.find()
  console.log(data,"===============================");
  
  return NextResponse.json({ result: data });
}
