import mongoose from 'mongoose';
const affectiveAssessmentSchema = new mongoose.Schema({
  aCategory: String,
  grade: {
    type: String,
    required: true,
    default: '-',
  },
});

const psychomotorSchema = new mongoose.Schema({
  pCategory: String,
  grade: {
    type: String,
    required: true,
    default: '-',
  },
});

const subjectResultSchema = new mongoose.Schema({
  subject: String,
  testScore: {
    type: Number,
    required: true,
    min: 0,
    max: 30,
    default: 0,
  },
  examScore: {
    type: Number,
    required: true,
    min: 0,
    max: 70,
    default: 0,
  },
  totalScore: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
    default: 0,
  },
  grade: {
    type: String,
    required: true,
    default: '-',
  },
});

const resultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Student',
  },
  firstName: String,
  lastName: String,
  otherName: String,
  image: String,
  level: String,
  subLevel: String,
  term: String,
  session: String,
  position: String,
  totalScore: Number,
  averageScore: Number,
  numberInClass: Number,
  subjectResults: [subjectResultSchema],
  affectiveAssessment: [affectiveAssessmentSchema],
  psychomotor: [psychomotorSchema],
  teacherRemark: String,
  principalRemark: String,
});

const Result = mongoose.model('Result', resultSchema);
export default Result;
