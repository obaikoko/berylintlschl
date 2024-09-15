import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  addEvent,
  deleteEvent,
  getEvents,
} from '../controller/eventController.js';

const router = express.Router();

router.route('/').get(getEvents).post(protect, admin, addEvent);
router.route('/:id').delete(protect, admin, deleteEvent);

export default router;
