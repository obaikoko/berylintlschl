import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoute from './routes/userRoute.js';
import studentRoute from './routes/studentRoute.js';
import staffRoute from './routes/staffRoute.js';
import resultRoute from './routes/resultRoute.js';
import dataRoute from './routes/dataRoute.js';
// import awardRoute from './routes/awardRoute.js';
import eventRoute from './routes/eventRoute.js';
import admissionRoute from './routes/admissionRoute.js';
import nextTermRoute from './routes/nextTermRoute.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

const app = express();
connectDB();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRoute);
app.use('/api/students', studentRoute);
app.use('/api/staff', staffRoute);
app.use('/api/results', resultRoute);
app.use('/api/data', dataRoute);
// app.use('/api/awards', awardRoute);
app.use('/api/events', eventRoute);
app.use('/api/admission', admissionRoute);
app.use('/api/nextTerm', nextTermRoute);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server started on port: ${port}`));
