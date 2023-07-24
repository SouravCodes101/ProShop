import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

//@desc Authentication and get token
//@route POST /api/users/login
//@access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//@desc Register User
//@Route POST /api/users
//@access public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

//@desc Logut User & clear cookie
//@Route POST /api/users/logout
//@access private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

//@desc Get user profile
//@Route GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Get user profile");
});

//@desc Update user profile
//@Route PUT /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update user profile");
});

//@desc Get all users
//@Route GET /api/users/
//@access Private/admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("Get all users");
});

//@desc Get user by id
//@Route GET /api/users/:id
//@access Private/admin
const getUserByID = asyncHandler(async (req, res) => {
  res.send("Get user by id");
});

//@desc Delete  users
//@Route DELETE /api/users/:id
//@access Private/admin
const deleteUsers = asyncHandler(async (req, res) => {
  res.send("Delete user");
});

//@desc Update  users
//@Route PUT /api/users/:id
//@access Private/admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("Update user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUsers,
  updateUser,
};
