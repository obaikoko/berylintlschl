import mongoose from 'mongoose';

const nextTermInfo = new mongoose.Schema(
  {
    reOpeningDate: {
      type: Date,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    nextTermFee: {
      type: Number,
      required: true,
    },
    busFee: {
      type: Number,
    },
    otherCharges: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const NextTerm = mongoose.model('NextTerm', nextTermInfo);

export default NextTerm;
