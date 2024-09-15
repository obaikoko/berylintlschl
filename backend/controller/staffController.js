import asyncHandler from 'express-async-handler';
import Staff from '../model/staff.js';
import cloudinary from '../config/cloudinary.js';

// ADD  STAFF
// @route POST api/staff
// @privacy Private ADMIN

const RegisterStaff = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    otherName,
    dateOfBirth,
    qualification,
    category,
    role,
    gender,
    maritalStatus,
    yearAdmitted,
    stateOfOrigin,
    localGvt,
    homeTown,
    residence,
    phone,
    email,
    image,
  } = req.body;

  // if (!image) {
  //   res.status(400);
  //   throw new Error('Please attach an image');
  // }
  // if (!firstName || !lastName) {
  //   res.status(400);
  //   throw new Error('Please add all fields');
  // }
  const firstNameRegex = new RegExp(`^${firstName}$`, 'i');
  const lastNameRegex = new RegExp(`^${lastName}$`, 'i');
  const staffExist = await Staff.findOne({
    firstName: firstNameRegex,
    lastName: lastNameRegex,
  });
  if (staffExist) {
    res.status(400);
    throw new Error('Staff already exist');
  }

  // const uploadedResponse = await cloudinary.uploader.upload(image, {
  //   folder: 'Bendonalds',
  // });

  const staff = await Staff.create({
    firstName,
    lastName,
    otherName,
    dateOfBirth,
    qualification,
    category,
    role,
    gender,
    maritalStatus,
    yearAdmitted,
    stateOfOrigin,
    localGvt,
    homeTown,
    residence,
    phone,
    email,
    // image: {
    //   url: uploadedResponse.url,
    //   publicId: uploadedResponse.public_id,
    // },
  });

  if (staff) {
    res.status(200);
    res.json(staff);
  }
});

// GET ALL STAFF
// @route GET api/staff
// @privacy Private ADMIN
const getAllStaff = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        $or: [
          { firstName: { $regex: req.query.keyword, $options: 'i' } },
          { lastName: { $regex: req.query.keyword, $options: 'i' } },
          { otherName: { $regex: req.query.keyword, $options: 'i' } },
        ],
      }
    : {};

  const query = keyword;

  const pageSize = 20;
  const page = Number(req.query.pageNumber) || 1;
  const count = await Staff.countDocuments(query);
  const staff = await Staff.find(query)
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  if (!staff) {
    res.status(200);
    res.json({ message: 'No staff record found' });
  } else {
    res.status(200);
    res.json({
      staff,
      page,
      totalPages: Math.ceil(count / pageSize),
    });
  }
});

// GET   SINGLE STAFF
// @route GET api/staff/:id
// @privacy Private ADMIN
const getStaff = asyncHandler(async (req, res) => {
  const staff = await Staff.findById(req.params.id);
  if (!staff) {
    res.status(400);
    throw new Error('Staff not found!');
  }
  res.status(200);
  res.json(staff);
});

// @desc Update staff
// @route PUT api/staff/:id
// @privacy Private ADMIN

const updateStaff = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    otherName,
    dateOfBirth,
    qualification,
    category,
    role,
    gender,
    maritalStatus,
    yearAdmitted,
    stateOfOrigin,
    localGvt,
    homeTown,
    residence,
    phone,
    email,
    image,
  } = req.body;
  const staff = await Staff.findById(req.params.id);

  if (staff) {
    if (image) {
      const existingImageId = staff?.image?.publicId || '';
      const newImageId = existingImageId.substring(
        existingImageId.indexOf('Bendonalds') + 'Bendonalds/'.length
      );

      const uploadedResponse = await cloudinary.uploader.upload(image, {
        folder: 'Bendonalds',
        public_id: newImageId,
      });

      const updatedImage = {
        image: {
          url: uploadedResponse.url,
          publicId: uploadedResponse.public_id,
        },
      };
      staff.firstName = firstName || staff.firstName;
      staff.lastName = lastName || staff.lastName;
      staff.otherName = otherName || staff.otherName;
      staff.dateOfBirth = dateOfBirth || staff.dateOfBirth;
      staff.qualification = qualification || staff.qualification;
      staff.gender = gender || staff.gender;
      staff.yearAdmitted = yearAdmitted || staff.yearAdmitted;
      staff.stateOfOrigin = stateOfOrigin || staff.stateOfOrigin;
      staff.localGvt = localGvt || staff.localGvt;
      staff.homeTown = homeTown || staff.homeTown;
      staff.category = category || staff.category;
      staff.role = role || staff.role;
      staff.maritalStatus = maritalStatus || staff.maritalStatus;
      staff.residence = residence || staff.residence;
      staff.email = email || staff.email;
      staff.phone = phone || staff.phone;
      staff.image = updatedImage.image || staff.image;
    } else {
      staff.firstName = firstName || staff.firstName;
      staff.lastName = lastName || staff.lastName;
      staff.otherName = otherName || staff.otherName;
      staff.dateOfBirth = dateOfBirth || staff.dateOfBirth;
      staff.qualification = qualification || staff.qualification;
      staff.gender = gender || staff.gender;
      staff.yearAdmitted = yearAdmitted || staff.yearAdmitted;
      staff.stateOfOrigin = stateOfOrigin || staff.stateOfOrigin;
      staff.localGvt = localGvt || staff.localGvt;
      staff.homeTown = homeTown || staff.homeTown;
      staff.category = category || staff.category;
      staff.role = role || staff.role;
      staff.maritalStatus = maritalStatus || staff.maritalStatus;
      staff.residence = residence || staff.residence;
      staff.email = email || staff.email;
      staff.phone = phone || staff.phone;
    }

    const updatedStaff = await staff.save();

    if (updatedStaff) {
      res.status(200);
      res.json(updatedStaff);
    }
  } else {
    res.status(400);
    throw new Error('Staff does not exist');
  }
});

// @desc Delete staff
// @route DELETE api/staff/:id
// @privacy Private ADMIN
const deleteStaff = asyncHandler(async (req, res) => {
  const staff = await Staff.findById(req.params.id);
  if (staff) {
    // await cloudinary.uploader.destroy(staff.image.publicId);
    await Staff.deleteOne({ _id: staff._id });
    res.status(200);
    res.json('Staff deleted successfully');
  } else {
    res.status(404);
    throw new Error('Staff not found!');
  }
});

// @desc Get  staff data
// @route Get api/staff/data
// @privacy Private ADMIN
const staffData = asyncHandler(async (req, res) => {
  const allStaff = await Staff.find();
  const femaleStaff = await Staff.find({ gender: 'Female' });
  const maleStaff = await Staff.find({ gender: 'Male' });

  res.json({
    Females: femaleStaff.length,
    Males: maleStaff.length,
    totalStudents: allStaff.length,
  });
});

export {
  RegisterStaff,
  getAllStaff,
  getStaff,
  updateStaff,
  deleteStaff,
  staffData,
};
