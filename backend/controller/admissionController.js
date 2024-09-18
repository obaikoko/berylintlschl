import asyncHandler from 'express-async-handler';
import Admission from '../model/admission.js';
import { sendSingleMail } from '../utils/emailService.js';

const createAdmission = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phone, childName, childAge, level } =
    req.body;
  

  const admission = await Admission.create({
    firstName,
    lastName,
    email,
    phone,
    childName,
    childAge,
    level,
  });

  if (admission) {
    sendSingleMail({
      email: 'jesseobinna7@gmail.com',
      subject: 'Admission Request',
      text: `${firstName} ${lastName} has requested ${childName}, ${childAge} years old to be enrolled into ${level} `,
    });
    sendSingleMail({
      email,
      subject: 'Admission Request',
      text: `Dear ${firstName}, your request to enroll ${childName} into BERYL INTETNATIONAL SCHOOL has been recieved and currently being processed`,
    });

    res.status(200);
    res.json('Form submitted successfully');
  }
});

export { createAdmission };
