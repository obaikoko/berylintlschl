import mongoose from 'mongoose';

const staffSchema = mongoose.Schema(
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
    qualification: {
      type: String,
    },
    category: {
      type: String,
      enum: ['Tutorial', 'Non Tutorial'],
    },
    role: {
      type: String,
    },
    gender: {
      type: String,
    },
    maritalStatus: {
      type: String,
    },

    yearAdmitted: {
      type: Date,
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
    residence: {
      type: String,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    image: {
      url: {
        type: String,
      },
      publicId: {
        type: {
          String,
        },
      },
    },
  },
  {
    timestamps: true,
  }
);

const Staff = mongoose.model('Staff', staffSchema);

export default Staff;
