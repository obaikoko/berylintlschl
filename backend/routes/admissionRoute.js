import express from 'express';
import { createAdmission } from '../controller/admissionController.js';
import { validateStudentAd } from '../middleware/validationMiddleware.js';
import { userRateLimit } from '../middleware/rateLimeter.js';

const router = express.Router();

router.route('/').post(validateStudentAd, userRateLimit, createAdmission);

export default router;
