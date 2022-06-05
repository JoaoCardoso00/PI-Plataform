import routes from './routes';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config'
import fs from 'fs'
import morgan from 'morgan'
import path from 'path'
const app = express();

mongoose.connect(
  process.env.MONGO_URL!,
);

const allowedOrigins = [
  'https://pi.omnicesupa.com',
];

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not '
        + 'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }

    return callback(null, true);
  },
}));

app.use(express.json());

app.use('/v1', routes);

export const handler = app;
