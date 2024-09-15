import asyncHandler from 'express-async-handler';
import NextTerm from '../model/nextTermInfo.js';

const addNextTermInfo = asyncHandler(async (req, res) => {
  const { reOpeningDate, level, nextTermFee, busFee, otherCharges } = req.body;

  const nextTerm = await NextTerm.findOne({ level });
  if (nextTerm) {
    nextTerm.reOpeningDate = reOpeningDate || nextTerm.reOpeningDate;
    nextTerm.level = level || nextTerm.level;
    nextTerm.nextTermFee = nextTermFee || nextTerm.level;
    nextTerm.busFee = busFee || nextTerm.busFee;
    nextTerm.otherCharges = otherCharges || nextTerm.otherCharges;
    await nextTerm.save();
    res.status(200);
    res.json(nextTerm);
  } else {
    try {
        const createNextTerm = await NextTerm.create({
          reOpeningDate,
          level,
          nextTermFee,
          busFee,
          otherCharges,
        });
    } catch (error) {
      res.status(500)
      console.log(error)
    }
  
    
  }
});

const getNextTermInfo = asyncHandler(async (req, res) => {
  const { level } = req.query;

  const nextTermInfo = await NextTerm.findOne({ level });
  if (!nextTermInfo) {
    res.status(404);
    throw new Error('Not found!');
  }

  res.status(200);
  res.json(nextTermInfo);
});

export { addNextTermInfo, getNextTermInfo };
