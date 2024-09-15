import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },

    childName: {
      type: String,
    },
    childAge: {
      type: Number,
    },
    level: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Admission = mongoose.model('Admission', admissionSchema);

export default Admission;
