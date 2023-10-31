import mongoose from "mongoose";
const ItemSchema = mongoose.Schema({
  cat: String,
  desc: String
});
const postItem = mongoose.model("item", ItemSchema);
export default postItem;