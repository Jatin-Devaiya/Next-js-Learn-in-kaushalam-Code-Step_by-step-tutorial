import mongoose from "mongoose";

const productModel = new mongoose.Schema({
  name: String,
  price: String,
  color: String,
  category: String,
});

export const Product =
  mongoose.models.items || mongoose.model("items", productModel);
