import asyncHandler from 'express-async-handler';
import User from '../model/user.js';
import generateToken from '../utils/generateToken.js';
import Student from '../model/student.js';
import { sendBulkMail, sendSingleMail } from '../utils/emailService.js';
import crypto from 'crypto';

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
      level: user.level + user.subLevel,
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
  const { firstName, lastName, level, subLevel, email, password } = req.body;
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
  const user = await User.create({
    firstName,
    lastName,
    level,
    subLevel,
    email,
    password,
  });
  if (user) {
    res.status(200);
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      level: user.level,
      subLevel: user.subLevel,
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
  const { firstName, lastName, level, subLevel, email, password } = req.body;
  const user = await User.findById(req.params.id);

  if (user) {
    try {
      user.firstName = firstName || user.firstName;
      user.lastName = lastName || user.lastName;
      user.level = level || user.level;
      user.subLevel = subLevel || user.subLevel;
      user.email = email || user.email;
      user.password = password || user.password;
      user.isAdmin = req.body.isAdmin;
      await user.save();
      res.json(`${user.firstName} has been updated successfully`);
    } catch (error) {
      res.status(500);
      throw new Error(error);
    }
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const sendMails = asyncHandler(async (req, res) => {
  const { subject, text } = req.body;
  sendSingleMail;
  if (!req.user.isAdmin) {
    res.status(401);
    throw new Error('Unauthorized Contact the adminitration');
  }
  const students = await Student.find({});
  const sponsorEmail = students.map((student) => student.sponsorEmail);
  sendBulkMail({ emails: sponsorEmail, subject, text });
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

// @desc Send reset password link
// @route POST api/users/forget-password
// @privacy Public
const forgetPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  // Generate reset token
  const resetToken = crypto.randomBytes(32).toString('hex');

  // Hash the reset token before saving to the database
  const hashedToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // Set reset token and expiration
  user.resetPasswordToken = hashedToken;
  user.resetPasswordExpires = Date.now() + 60 * 60 * 1000; // 1 hour from now

  await user.save();

  // Create reset URL to send in email
  const resetUrl = `${process.env.PUBLIC_DOMAIN}/reset-password?token=${resetToken}`;

  // Send the email
  await sendSingleMail({
    email,
    subject: 'Password Reset',
    text: `You requested a password reset. Please go to this link to reset your password: ${resetUrl}`,
  });

  res.status(200);
  res.json('Password reset link has been sent to your email');
});
// @desc Reset password
// @route PUT api/users/reset-password
// @privacy Public
const resetPassword = asyncHandler(async (req, res) => {
  const { token } = req.query;
  const { newPassword } = req.body;

  // Password validation regex
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

  // Ensure token is a string
  if (typeof token !== 'string') {
    res.status(400);
    throw new Error('Invalid token format');
  }

  // Hash the token provided by the user
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

  // Find the user with the matching reset token and ensure it's not expired
  const user = await User.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    res.status(400);
    throw new Error('Invalid or expired reset token');
  }

  // Check if the new password meets the strength criteria
  if (!passwordRegex.test(newPassword)) {
    res.status(400);
    throw new Error(
      'Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.'
    );
  }

  // Update the user's password and clear the reset token fields
  user.password = newPassword;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;

  await user.save();

  res.status(200);
  res.json('Password has been reset successfully');
  sendSingleMail({
    email: user.email,
    subject: `Password reset successful`,
    text: `You have successfully reset your password. </br> NOTE if you did not initiate this process quickly change your password or contact the admin.`,
  });
});

export {
  authUser,
  registerUser,
  logoutUser,
  forgetPassword,
  resetPassword,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  sendMails,
};
