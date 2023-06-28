const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { firstname, surname, email, password, pict } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    firstname,
    surname,
    email,
    password,
    pict,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      surname: user.surname,
      email: user.email,
      isAdmin: user.isAdmin,
      pict: user.pict,
      token: generateToken(user._id),
    });
    console.log("Added!");
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }

  res.json({ firstname, email });
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstname: user.firstname,
      surname: user.surname,
      email: user.email,
      isAdmin: user.isAdmin,
      pict: user.pict,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password!");
  }
});

module.exports = { registerUser, authUser };
