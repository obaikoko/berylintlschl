import asyncHandler from 'express-async-handler';
import Admission from '../model/admission.js';
import { sendSingleMail } from '../utils/emailService.js';
import { validationResult } from 'express-validator';

const createAdmission = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    childName,
    dateOfBirth,
    gender,
    level,
  } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400);
    throw new Error(errors.array()[0].msg);
  }

  const admission = await Admission.create({
    firstName,
    lastName,
    email,
    phone,
    childName,
    dateOfBirth,
    gender,
    level,
  });

  if (admission) {
    sendSingleMail({
      email: 'jesseobinna7@gmail.com',
      subject: 'Admission Request',
      text: `${firstName} ${lastName} has requested ${childName}, ${dateOfBirth} years old to be enrolled into ${level} `,
    });
    sendSingleMail({
      email,
      subject: 'Admission Request',
      text: `Dear ${firstName}, your request to enroll ${childName} into BERYL INTETNATIONAL SCHOOL has been recieved and currently being processed`,
    });

    res.status(200);
    res.json('Form submitted successfully');
  }
});

const getAllRequest = asyncHandler(async (req, res) => {
  const admission = await Admission.find({});
  if (admission) {
    res.status(200);
    res.json(admission);
  } else {
    res.status(404);
    throw new Error('Not Found!');
  }
});
const getSingleRequest = asyncHandler(async (req, res) => {
  const admission = await Admission.findById(req.params.id);
  if (admission) {
    res.status(200);
    res.json(admission);
  } else {
    res.status(404);
    throw new Error('Not Found!');
  }
});

const sendMail = asyncHandler(async (req, res) => {
  const { subject, text } = req.body;
  const admission = await Admission.findById(req.params.id);
  if (!admission) {
    res.status(404);
    throw new Error('Not found!');
  }
  try {
    sendSingleMail({ email: admission.email, subject, text });
    res.status(200);
    res.json('Email sent successfully');
  } catch (error) {
    console.log(error);
  }
});

// @desc Delete admission
// @route DELETE api/admissions/:id
// @privacy Private ADMIN
const deleteAdmission = asyncHandler(async (req, res) => {
  const admission = await Admission.findById(req.params.id);
  if (admission) {
    await admission.deleteOne({ _id: admission._id });
    res.status(200);
    res.json('admission request deleted successfully');
  } else {
    res.status(404);
    throw new Error('admission not found!');
  }
});

export {
  createAdmission,
  getAllRequest,
  getSingleRequest,
  deleteAdmission,
  sendMail,
};
