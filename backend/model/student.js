import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const studentSchema = mongoose.Schema(
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
    subLevel: {
      type: String,
    },
    gender: {
      type: String,
    },
    yearAdmitted: {
      type: Date,
    },
    studentId: {
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
    password: {
      type: String,
      require: [true, 'please add a password'],
    },
    isStudent: {
      type: Boolean,
      default: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

studentSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

studentSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Student = mongoose.model('Student', studentSchema);
export default Student;
