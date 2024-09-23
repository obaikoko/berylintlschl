import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },

    childName: {
      type: String,
      required: true,
    },
    childAge: {
      type: Number,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Admission = mongoose.model('Admission', admissionSchema);

export default Admission;
