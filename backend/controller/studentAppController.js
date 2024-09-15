import asyncHandler from 'express-async-handler';
import cloudinary from '../config/cloudinary.js';
import StudentApp from '../model/studentApp.js';

// ADD  STUDENT
// @route POST api/students/
// @privacy Private ADMIN
const studentApplication = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    otherName,
    dateOfBirth,
    level,
    gender,
    stateOfOrigin,
    localGvt,
    homeTown,
    sponsorName,
    sponsorRelationship,
    sponsorPhoneNumber,
    sponsorEmail,
    // image,
  } = req.body;

  // if (!image) {
  //   res.status(400);
  //   throw new Error('Please attach an image');
  // }
  if (!firstName || !lastName) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  const firstNameRegex = new RegExp(`^${firstName}$`, 'i');
  const lastNameRegex = new RegExp(`^${lastName}$`, 'i');
  const studentExist = await StudentApp.findOne({
    firstName: firstNameRegex,
    lastName: lastNameRegex,
  });
  if (studentExist) {
    res.status(400);
    throw new Error('StudentApp already exists');
  }

  // const uploadedResponse = await cloudinary.uploader.upload(image, {
  //   folder: 'Bendonalds',
  // });

  const student = await StudentApp.create({
    firstName,
    lastName,
    otherName,
    dateOfBirth,
    level,
    gender,
    stateOfOrigin,
    localGvt,
    homeTown,
    sponsorName,
    sponsorRelationship,
    sponsorPhoneNumber,
    sponsorEmail,
    // image: {
    //   url: uploadedResponse.url,
    //   publicId: uploadedResponse.public_id,
    // },
  });

  if (student) {
    res.status(200);
    res.json(student);
  }
});

export { studentApplication };
