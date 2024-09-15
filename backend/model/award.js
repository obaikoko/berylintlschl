import mongoose from 'mongoose';

const awardSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Student',
    },
    competition: {
      type: String,
    },
    position: {
      type: String,
    },
    date: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const Award = mongoose.model('Award', awardSchema);

export default Award;
