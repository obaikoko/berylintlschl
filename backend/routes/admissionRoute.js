import express from 'express';
import {
  createAdmission,
  deleteAdmission,
  getAllRequest,
  getSingleRequest,
  sendMail,
} from '../controller/admissionController.js';
import { validateStudentAd } from '../middleware/validationMiddleware.js';
import { userRateLimit } from '../middleware/rateLimeter.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .post(validateStudentAd, userRateLimit, createAdmission)
  .get(protect, admin, getAllRequest);
router
  .route('/:id')
  .get(protect, admin, getSingleRequest)
  .post(protect, admin, sendMail)
  .delete(protect, admin, deleteAdmission);

export default router;
