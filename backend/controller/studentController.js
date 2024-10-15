import Student from '../model/student.js';
import Result from '../model/result.js';
import asyncHandler from 'express-async-handler';
import cloudinary from '../config/cloudinary.js';
import generateToken from '../utils/generateToken.js';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { sendSingleMail } from '../utils/emailService.js';

// Authenticate Student
// @route POST api/student/auth
// privacy Public
const authStudent = asyncHandler(async (req, res) => {
  const { studentId, password } = req.body;

  if (!studentId || !password) {
    res.status(400);
    throw new Error('Invalid registration number or password');
  }

  const student = await Student.findOne({ studentId });
  if (!student) {
    res.status(400);
    throw new Error('Student does not exist');
  }
  if (student && (await student.matchPassword(password))) {
    res.status(200);
    generateToken(res, student._id);
    res.json({
      _id: student._id,
      firstName: student.firstName,
      lastName: student.lastName,
      studentId: student.studentId,
      isStudent: student.isStudent,
    });
  } else {
    res.status(400);
    throw new Error('Invalid StudentID or Password');
  }
});

// ADD  STUDENT
// @route POST api/students/
// @privacy Private ADMIN
const RegisterStudent = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    otherName,
    dateOfBirth,
    level,
    subLevel,
    gender,
    yearAdmitted,
    stateOfOrigin,
    localGvt,
    homeTown,
    sponsorName,
    sponsorRelationship,
    sponsorPhoneNumber,
    sponsorEmail,
    image,
  } = req.body;

  if (!image) {
    res.status(400);
    throw new Error('Please attach an image');
  }
  if (!firstName || !lastName || !level || !gender) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  const firstNameRegex = new RegExp(`^${firstName}$`, 'i');
  const lastNameRegex = new RegExp(`^${lastName}$`, 'i');
  const studentExist = await Student.findOne({
    firstName: firstNameRegex,
    lastName: lastNameRegex,
  });
  if (studentExist) {
    res.status(400);
    throw new Error('Student already exists');
  }

  // Class level to code mapping
  const classCodeMapping = {
    Creche: 'CR',
    'Day Care': 'DC',
    Reception: 'RP',
    'Pre School': 'PS',
    'Pre KG': 'PKG',
    KG: 'KG',
    'Grade 1': 'G1',
    'Grade 2': 'G2',
    'Grade 3': 'G3',
    'Grade 4': 'G4',
    'Grade 5': 'G5',
    'Grade 6': 'G6',
    'JSS 1': 'J1',
    'JSS 2': 'J2',
    'JSS 3': 'J3',
    'SSS 1': 'S1',
    'SSS 2': 'S2',
    'SSS 3': 'S3',
  };

  // Use the current year
  const currentYear = new Date().getFullYear();

  // Get the class code
  const classCode = classCodeMapping[level];

  // Count the number of students already in the same class
  const studentCountInClass = await Student.countDocuments({
    level,
  });

  // Construct the registration number
  const registrationNumber = `BIS/${currentYear}/${classCode}/${(
    studentCountInClass + 1
  )
    .toString()
    .padStart(3, '0')}`;

  const uploadedResponse = await cloudinary.uploader.upload(image, {
    folder: 'beryl',
  });

  const student = await Student.create({
    user: req.user._id,
    firstName,
    lastName,
    otherName,
    dateOfBirth,
    level,
    subLevel,
    gender,
    yearAdmitted,
    studentId: registrationNumber,
    password: process.env.DEFAULTPASSWORD,
    stateOfOrigin,
    localGvt,
    homeTown,
    sponsorName,
    sponsorRelationship,
    sponsorPhoneNumber,
    sponsorEmail,
    image: {
      url: uploadedResponse.url,
      publicId: uploadedResponse.public_id,
    },
  });

  if (student) {
    res.status(200);
    res.json(student);
  }
});

// GET  STUDENT PROFILE
// @route GET api/students/profile
// @privacy Private
const getStudentProfile = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.student._id);
  if (student) {
    res.status(200);
    res.json({
      _id: student._id,
      firstName: student.firstName,
      lastName: student.lastName,
      otherName: student.otherName,
      gender: student.gender,
      level: student.level,
      subLevel: student.subLevel,
      dateOfBirth: student.dateOfBirth,
      yearAdmitted: student.yearAdmitted,
      stateOfOrigin: student.stateOfOrigin,
      localGvt: student.localGvt,
      homeTown: student.homeTown,
      sponsorName: student.sponsorName,
      sponsorRelationship: student.sponsorRelationship,
      sponsorPhoneNumber: student.sponsorPhoneNumber,
      sponsorEmail: student.sponsorEmail,
      studentId: student.studentId,
      isStudent: student.isStudent,
      image: student.image,
      isPaid: student.isPaid,
    });
  }
});

const getStudentResults = asyncHandler(async (req, res) => {
  const results = await Result.find({ studentId: req.student._id }).sort({
    createdAt: -1,
  });
  if (!req.student.isPaid) {
    res.status(401);

    throw new Error(
      'Unable to access your result due to non payment of fees, Please proceed to the school administration and make your payment '
    );
  }

  if (results) {
    res.status(200);
    res.json(results);
  }
});

// GET ALL STUDENTS
// @route GET api/students
// @privacy Private ADMIN
const getAllStudents = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error('Unauthorized User');
  }
  const level = req.query.level;
  const keyword = req.query.keyword
    ? {
        $or: [
          { firstName: { $regex: req.query.keyword, $options: 'i' } },
          { lastName: { $regex: req.query.keyword, $options: 'i' } },
          { otherName: { $regex: req.query.keyword, $options: 'i' } },
        ],
      }
    : {};

  let query =
    level && level !== 'All'
      ? { ...keyword, level: { $regex: level, $options: 'i' } }
      : keyword;

  // Restrict query to the logged-in user's students unless they are an admin
  if (!req.user.isAdmin) {
    query = { ...query, level: req.user.level, subLevel: req.user.subLevel };
  }

  const pageSize = 20;
  const page = Number(req.query.pageNumber) || 1;
  const count = await Student.countDocuments(query);
  const students = await Student.find(query)
    .sort({ createdAt: -1 })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  if (!students) {
    res.status(404);
    res.json({ message: 'No student record found' });
  } else {
    res.status(200);
    res.json({
      students,
      page,
      totalPages: Math.ceil(count / pageSize),
    });
  }
});

// GET  STUDENT
// @route GET api/students/:id
// @privacy Private ADMIN
const getStudent = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error('Unauthorized User');
  }
  const student = await Student.findById(req.params.id);
  if (!student) {
    res.status(400);
    throw new Error('Student not found!');
  }
  res.status(200);
  res.json(student);
});

// @desc Update student
// @route PUT api/students/:id
// @privacy Private ADMIN
const updateStudent = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    otherName,
    dateOfBirth,
    level,
    subLevel,
    gender,
    yearAdmitted,
    stateOfOrigin,
    localGvt,
    homeTown,
    sponsorName,
    sponsorRelationship,
    sponsorPhoneNumber,
    sponsorEmail,
    image,

    fees,
  } = req.body;

  if (!req.user) {
    res.status(401);
    throw new Error('Unauthorized User');
  }

  const student = await Student.findById(req.params.id);

  if (student) {
    if (fees && fees === 'paid') {
      student.isPaid = true;
    } else if (fees && fees === 'notPaid') {
      student.isPaid = false;
    }
    if (image) {
      const existingImageId = student?.image?.publicId || '';

      if (existingImageId) {
        const newImageId = existingImageId.substring(
          existingImageId.indexOf('beryl') + 'beryl/'.length
        );

        const uploadedResponse = await cloudinary.uploader.upload(image, {
          folder: 'beryl',
          public_id: newImageId,
        });

        student.image = {
          url: uploadedResponse.url,
          publicId: uploadedResponse.public_id,
        };
      } else {
        const uploadedResponse = await cloudinary.uploader.upload(image, {
          folder: 'beryl',
        });

        student.image = {
          url: uploadedResponse.url,
          publicId: uploadedResponse.public_id,
        };
      }
    }

    // Update student fields
    student.firstName = firstName || student.firstName;
    student.lastName = lastName || student.lastName;
    student.otherName = otherName || student.otherName;
    student.dateOfBirth = dateOfBirth || student.dateOfBirth;
    student.level = level || student.level;
    student.subLevel = subLevel || student.subLevel;
    student.gender = gender || student.gender;
    student.yearAdmitted = yearAdmitted || student.yearAdmitted;
    student.stateOfOrigin = stateOfOrigin || student.stateOfOrigin;
    student.localGvt = localGvt || student.localGvt;
    student.homeTown = homeTown || student.homeTown;
    student.sponsorName = sponsorName || student.sponsorName;
    student.sponsorRelationship =
      sponsorRelationship || student.sponsorRelationship;
    student.sponsorPhoneNumber =
      sponsorPhoneNumber || student.sponsorPhoneNumber;
    student.sponsorEmail = sponsorEmail || student.sponsorEmail;

    const updatedStudent = await student.save();

    // Return the updated student details
    res.status(200).json(updatedStudent);
  } else {
    res.status(400);
    throw new Error('Student does not exist');
  }
});

const resetStudentFees = asyncHandler(async (req, res) => {
  await Student.updateMany({}, { isPaid: false });

  res.status(200).json('All student payment status has been set to not paid');
});

// @desc Delete student
// @route DELETE api/students/:id
// @privacy Private ADMIN
const deleteStudent = asyncHandler(async (req, res) => {
  if (!req.user) {
    res.status(401);
    throw new Error('Unauthorized User');
  }
  const student = await Student.findById(req.params.id);
  if (student) {
    if (student.image.publicId) {
      await cloudinary.uploader.destroy(student.image.publicId);
    }
    await Student.deleteOne({ _id: student._id });
    res.status(200);
    res.json('Student deleted successfully');
  } else {
    res.status(404);
    throw new Error('Student not found!');
  }
});

// @desc Send reset password link student
// @route POST api/students/forget-password
// @privacy Public
const forgetPassword = asyncHandler(async (req, res) => {
  const { studentId } = req.body;
  

  // Find user by email
  const student = await Student.findOne({ studentId });
  if (!student) {
    res.status(404);
    throw new Error('Student not found');
  }

  // Generate reset token
  const resetToken = crypto.randomBytes(32).toString('hex');

  // Hash the reset token before saving to the database
  const hashedToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // Set reset token and expiration
  student.resetPasswordToken = hashedToken;
  student.resetPasswordExpires = Date.now() + 60 * 60 * 1000; // 1 hour from now

  await student.save();

  // Create reset URL to send in email
  const resetUrl = `${process.env.PUBLIC_DOMAIN}/students/reset-password?token=${resetToken}`;

  // Send the email
  await sendSingleMail({
    email: student.sponsorEmail,
    subject: 'Password Reset',
    text: `You requested a password reset. Please go to this link to reset your password: ${resetUrl}`,
  });

  res.status(200);
  res.json(
    `Password reset link has been sent to your registered sponsor/parent email`
  );
});
// @desc Reset password
// @route PUT api/students/reset-password
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
  const student = await Student.findOne({
    resetPasswordToken: hashedToken,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!student) {
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
  student.password = newPassword;
  student.resetPasswordToken = undefined;
  student.resetPasswordExpires = undefined;

  await student.save();
  res.status(200);
  res.json('Password has been reset successfully');
});

const graduateStudent = asyncHandler(async (req, res) => {
  // Step 1: Define the class progression map
  const classProgression = {
    'Grade 1': 'Grade 2',
    'Grade 2': 'Grade 3',
    'Grade 3': 'Grade 4',
    'Grade 4': 'Grade 5',
    'Grade 5': 'JSS 1',
    'JSS 1': 'JSS 2',
    'JSS 2': 'JSS 3',
    'JSS 3': 'SSS 1',
    'SSS 1': 'SSS 2',
    'SSS 2': 'SSS 3',
    'SSS 3': 'Graduated',
  };

  // Step 2: Fetch all students
  const students = await Student.find({});

  // Step 3: Iterate over each student and graduate them
  for (let student of students) {
    const currentClass = student.level; // Use the correct field that stores the student's class level
    const nextClass = classProgression[currentClass];

    if (nextClass) {
      student.level = nextClass; // Update student's class level with the correct field name
      await student.save(); // Save the updated student back to the database
    }
  }

  res.status(200).json('All students have been graduated to the next class');
});

export {
  authStudent,
  getAllStudents,
  getStudent,
  RegisterStudent,
  updateStudent,
  deleteStudent,
  forgetPassword,
  resetPassword,
  getStudentProfile,
  getStudentResults,
  graduateStudent,
  resetStudentFees,
};
