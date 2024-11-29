import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  getAllStudents,
  getStudent,
  RegisterStudent,
  updateStudent,
  deleteStudent,
  authStudent,
  getStudentProfile,
  getStudentResults,
  graduateStudent,
  forgetPassword,
  resetPassword,
  resetStudentFees,
} from '../controller/studentController.js';
import { userRateLimit } from '../middleware/rateLimeter.js';

const router = express.Router();

router.route('/').get(protect, getAllStudents).post(protect, RegisterStudent);
router.route('/fees').post(protect, admin, resetStudentFees);
router.route('/auth').post(userRateLimit, authStudent);
router.route('/profile').get(protect, getStudentProfile);
router.route('/results').get(protect, getStudentResults);
router.route('/graduate').put(protect, admin, graduateStudent);
router.route('/forget-password').post(userRateLimit, forgetPassword);
router.route('/reset-password').put(userRateLimit, resetPassword);

router
  .route('/:id')
  .get(protect, getStudent)
  .put(protect, updateStudent)
  .delete(protect, admin, deleteStudent);

export default router;
