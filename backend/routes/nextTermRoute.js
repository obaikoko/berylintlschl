import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  addNextTermInfo,
  getNextTermInfo,
} from '../controller/nextTermController.js';

const router = express.Router();

router.route('/').get(getNextTermInfo).put(protect, admin, addNextTermInfo);

export default router;
