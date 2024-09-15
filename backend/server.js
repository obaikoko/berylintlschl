import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoute from './routes/userRoute.js';
import studentRoute from './routes/studentRoute.js';
import studentAppRoute from './routes/studentAppRoute.js';
import staffRoute from './routes/staffRoute.js';
import resultRoute from './routes/resultRoute.js';
import awardRoute from './routes/awardRoute.js';
import eventRoute from './routes/eventRoute.js';
import admissionRoute from './routes/admissionRoute.js';
import nextTermRoute from './routes/nextTermRoute.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import { fileURLToPath } from 'url'; // Import the fileURLToPath function

dotenv.config();

const app = express();
connectDB();

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const corsOptions = {
  origin: 'http://localhost:3000',
  // origin: 'https://school-project-frontend.vercel.app',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, '.next')));
app.use('/api/users', userRoute);
app.use('/api/students', studentRoute);
app.use('/api/application', studentAppRoute);
app.use('/api/staff', staffRoute);
app.use('/api/results', resultRoute);
app.use('/api/awards', awardRoute);
app.use('/api/events', eventRoute);
app.use('/api/admission', admissionRoute);
app.use('/api/nextTerm', nextTermRoute);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server started on port: ${port}`));
