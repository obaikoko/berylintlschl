// validationMiddleware.js
import { body } from 'express-validator';

const validateStudentAd = [
  body('firstName')
    .trim()
    .isLength({ min: 1 })
    .withMessage('First name is required')
    .matches(/^[a-zA-Z]+$/)
    .withMessage('First name should only contain letters'),

  body('lastName')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Last name is required')
    .matches(/^[a-zA-Z]+$/)
    .withMessage('Last name should only contain letters'),
  body('childName')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Child name is required')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Child name should only contain letters and spaces'),

  body('sponsorEmail').optional().isEmail().withMessage('Invalid email format'),

  body('sponsorPhoneNumber')
    .optional()
    .isMobilePhone()
    .withMessage('Invalid phone number'),
];

export { validateStudentAd };
