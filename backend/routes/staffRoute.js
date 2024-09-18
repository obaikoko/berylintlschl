import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  deleteStaff,
  getAllStaff,
  getStaff,
  RegisterStaff,
  staffData,
  updateStaff,
} from '../controller/staffController.js';

const router = express.Router();

router
  .route('/')
  .get(protect, admin, getAllStaff)
  .post(protect, admin, RegisterStaff);
router.route('/data').get(protect, admin, staffData);

router
  .route('/:id')
  .get(protect, admin, getStaff)
  .put(protect, admin, updateStaff)
  .delete(protect, admin, deleteStaff);

export default router;
