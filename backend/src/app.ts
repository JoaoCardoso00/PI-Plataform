import routes from './routes';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import rateLimiter from './middlewares/rateLimiter';

require('dotenv/config');

const app = express();

mongoose.connect(
  `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}/${process.env.MONGO_DB}`,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    auth: {
      authdb: "admin"
    }
  }
);

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:4040/',
  'https://pi.omnicesupa.com',
  'https://pi.omnicesupa.com/',
];

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
app.use(rateLimiter);


app.use('/v1', routes);

module.exports = app;
