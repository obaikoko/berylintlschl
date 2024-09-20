import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  getAllStudents,
  getStudent,
  RegisterStudent,
  updateStudent,
  deleteStudent,
  studentsData,
  authStudent,
  getStudentProfile,
  getStudentResults,
  graduateStudent,
  forgetPassword,
  resetPassword,
} from '../controller/studentController.js';

const router = express.Router();

router
  .route('/')
  .get(protect, getAllStudents)
  .post(protect, admin, RegisterStudent);
router.route('/auth').post(authStudent);
router.route('/profile').get(protect, getStudentProfile);
router.route('/data').get(protect, admin, studentsData);
router.route('/results').get(protect, getStudentResults);
router.route('/graduate').post(protect, admin, graduateStudent);
router.route('/forget-password').post(forgetPassword);
router.route('/reset-password').put(resetPassword);

router
  .route('/:id')
  .get(protect, getStudent)
  .put(protect, admin, updateStudent)
  .delete(protect, admin, deleteStudent);

export default router;
