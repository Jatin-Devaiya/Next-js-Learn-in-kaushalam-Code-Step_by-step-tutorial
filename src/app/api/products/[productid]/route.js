import { connectionSrt } from "@/util/db";
import { Product } from "@/util/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  const productId = content.params.productid;
  const filter = { _id: productId };
  const payload = await request.json();
  console.log(payload, "payload");
  await mongoose.connect(connectionSrt)
  const result = await Product.findOneAndUpdate(filter, payload)
  return NextResponse.json({ result, success: true });
}
