import mongoose from "mongoose";

// USER SCHEMA
const userSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
  purchasedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

// ADMIN SCHEMA
const adminSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String },
});

// COURSES SCHEMA
const ItemSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  price: { type: Number },
  imageLink: { type: String },
  published: { type: Boolean },
});

// MODELS OF USER < ADMIN < COURSE
const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Item = mongoose.model("Course", ItemSchema);

// MODULE EXPORT
export { User, Admin, Item };
