import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const user = mongoose.model("auth", authSchema);

export default user;
