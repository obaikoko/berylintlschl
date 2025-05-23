import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  createResult,
  generatePositions,
  getResult,
  getResults,
  updateResult,
  generateBroadsheet,
  deleteResult,
  manualSubjectRemoval,
  addSubjectToResults,
  updateResultPayment,
} from '../controller/resultController.js';

const router = express.Router();

router.route('/positions').post(protect, admin, generatePositions);
router.route('/broadsheet').post(protect, generateBroadsheet);
router.route('/payment').put(protect, admin, updateResultPayment);
router
  .route('/subjects')
  .put(protect, admin, manualSubjectRemoval)
  .post(protect, admin, addSubjectToResults);
router
  .route('/:id')
  .post(protect, createResult)
  .get(protect, getResult)
  .put(protect, updateResult)
  .delete(protect, admin, deleteResult);
router.route('/').get(protect, getResults);

export default router;
