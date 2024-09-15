import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import { studentApplication } from '../controller/studentAppController.js';

const router = express.Router();
router.route('/').post(studentApplication);

export default router;
