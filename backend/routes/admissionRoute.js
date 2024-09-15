import express from 'express';
import { createAdmission } from '../controller/admissionController.js';

const router = express.Router();

router.route('/').post(createAdmission);

export default router;
