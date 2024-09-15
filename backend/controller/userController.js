import asyncHandler from 'express-async-handler';
import User from '../model/user.js';
import generateToken from '../utils/generateToken.js';
import Student from '../model/student.js';
import { sendBulkMail, sendSingleMail } from '../utils/emailService.js';

// Authenticate Users
// @route POST api/user/auth
// privacy Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error('Add email or password');
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error('User does not exist');
  }
  if (user && (await user.matchPassword(password))) {
    res.status(200);
    generateToken(res, user._id);
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error('Invalid Email or Password');
  }
});

// @description Register users
// @Route POST /api/users/
// @privacy Pivate ADMIN
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error('Please add all field');
  }

  // check if user exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error('User already exist');
  }
  const user = await User.create({ firstName, lastName, email, password });
  if (user) {
    res.status(200);
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(500);
    throw new Error('Something went wrong');
  }
});

// @description This is to authenticate users
// @Route GET /api/users
// @privacy Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found!');
  }
});

// @description This is to authenticate users
// @Route PUT /api/users/
// @privacy Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password || user.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @description This is to delete a user
// @Route DELETE /api/users/:id
// @privacy Private ADMIN
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    if (user.isAdmin) {
      res.status(400);
      throw new Error('Can not delete admin user');
    }
    await User.deleteOne({ _id: user._id });
    res.json({ message: 'User removed' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @description This is to get all users
// @Route GET /api/users
// @privacy Private ADMIN
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select('-password');
  res.json(users);
});

// @description This is to get user by ID
// @Route POST /api/users/:id
// @privacy Private ADMIN
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @description This is to update user
// @Route POST /api/users/:id
// @privacy Private ADMIN
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.firstName;
    user.email = req.body.email || user.email;
    user.isAdmin = Boolean(req.body.isAdmin);

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const sendMails = asyncHandler(async (req, res) => {
  const { subject, text } = req.body;
  console.log(req.user);
sendSingleMail
  if (!req.user.isAdmin) {
    res.status(401);
    throw new Error('Unauthorized Contact the adminitration');
  }
  const students = await Student.find({});
  const sponsorEmail = students.map((student) => student.sponsorEmail);
  // sendBulkMail({ emails: sponsorEmail, subject, text });
  res.status(200);
  res.json('Email sent successfully');
});

// Updates Logout User
// @route POST api/users/profile/:id
// privacy Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expiresIn: new Date(0),
  });

  res.status(200);
  res.json({ message: 'Logged out user' });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  sendMails,
};
