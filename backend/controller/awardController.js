import asyncHandler from 'express-async-handler';
import Award from '../model/award.js';
const getAwards = asyncHandler(async (req, res) => {
  const awards = await Award.find().populate(
    'student',
    'firstName lastName image level'
  );
  if (awards) {
    res.status(200);
    res.json(awards);
  } else if (awards.legnth <= 0) {
    res.status(404);
    throw new Error('No Awards found!');
  }
});

const addAward = asyncHandler(async (req, res) => {
  const { competition, position, date } = req.body;
  const { id } = req.params;
  if (!competition || !position) {
    res.status(400);
    throw new Error('Please add all field');
  }
  const award = await Award.create({
    student: id,
    competition,
    position,
    date,
  });

  if (award) {
    res.status(200);
    res.json(award);
  } else {
    res.status(400);
    throw new Error('Unable to add Awardee');
  }
});

const deleteAward = asyncHandler(async (req, res) => {
  const award = await Award.findById(req.params.id);
  if (award) {
    await Award.deleteOne({ _id: award._id });
    res.status(200);
    res.json('Award deleted successfully');
  } else {
    res.status(404);
    throw new Error('Award not found!');
  }
});

export { getAwards, addAward, deleteAward };
