import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  addAward,
  deleteAward,
  getAwards,
} from '../controller/awardController.js';

const router = express.Router();

router
  .route('/:id')
  .post(protect, admin, addAward)
  .delete(protect, admin, deleteAward);
router.route('/').get(getAwards);

export default router;
