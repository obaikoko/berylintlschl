import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import { staffData, studentsData } from '../controller/dataController.js';

const router = express.Router();

router.route('/students').get(protect, admin, studentsData);
router.route('/staff').get(protect, admin, staffData);

export default router;
