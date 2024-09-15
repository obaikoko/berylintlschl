import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  sendMails,
} from '../controller/userController.js';

const router = express.Router();

router
  .route('/')
  .post(protect, admin, registerUser)
  .get(protect, admin, getUsers);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.post('/auth', authUser);
router.post('/mails', protect, admin, sendMails);
router.post('/logout', logoutUser);
router
  .route('/:id')
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser);

export default router;
