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
} from '../controller/resultController.js';

const router = express.Router();

router.route('/positions').post(protect, admin, generatePositions);
router.route('/broadsheet').post(protect, generateBroadsheet);
router
  .route('/:id')
  .post(protect, createResult)
  .get(protect, getResult)
  .put(protect, updateResult).delete(protect, admin, deleteResult );
router.route('/').get(protect, getResults);

export default router;
