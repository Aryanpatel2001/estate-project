import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU3emrQ-xtp3Rs-tdBG7sX5aL7U8vG72xCm6xq-auroQ&s",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
