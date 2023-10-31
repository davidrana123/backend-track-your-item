import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  cat: String,
  desc: String,
});

const postUser = mongoose.model("record", userSchema);

export default postUser;
