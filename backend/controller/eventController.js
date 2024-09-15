import asyncHandler from 'express-async-handler';
import Event from '../model/events.js';
import cloudinary from '../config/cloudinary.js';
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find();
  if (!events || events.length === 0) {
    res.status(404);
    throw new Error('No Event found!');
  } else {
    res.status(200);
    res.json(events);
  }
});

const addEvent = asyncHandler(async (req, res) => {
  const { title, date, description, image } = req.body;

  if (!title || !date || !description) {
    res.status(400);
    throw new Error('Please add all field');
  }
  if (!image) {
    res.status(400);
    throw new Error('Please attach an image');
  }
  let uploadedResponse;
  try {
    uploadedResponse = await cloudinary.uploader.upload(image, {
      folder: 'Bendonalds',
    });
  } catch (error) {
    console.log(error);
    throw new Error('Unable to upload Image');
  }

  const event = await Event.create({
    title,
    date,
    description,
    image: {
      url: uploadedResponse.url,
      publicId: uploadedResponse.public_id,
    },
  });

  if (event) {
    res.status(200);
    res.json(event);
  } else {
    res.status(400);
    throw new Error('Unable to add Event');
  }
});

const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (event) {
    await cloudinary.uploader.destroy(event.image.publicId);
    await Event.deleteOne({ _id: event._id });
    res.status(200);
    res.json('Event deleted successfully');
  } else {
    res.status(404);
    throw new Error('Event not found!');
  }
});

export { getEvents, addEvent, deleteEvent };
