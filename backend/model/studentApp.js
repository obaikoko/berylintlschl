import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const studentAppSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    otherName: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    level: {
      type: String,
    },
    gender: {
      type: String,
    },
    stateOfOrigin: {
      type: String,
    },
    localGvt: {
      type: String,
    },
    homeTown: {
      type: String,
    },
    sponsorName: {
      type: String,
    },
    sponsorRelationship: {
      type: String,
    },
    sponsorPhoneNumber: {
      type: String,
    },
    sponsorEmail: {
      type: String,
    },
    image: {
      url: {
        type: String,
      },
      publicId: {
        type: String,
      },
    },

  },
  {
    timestamps: true,
  }
);


const StudentApp = mongoose.model('StudentApp', studentAppSchema);
export default StudentApp;
