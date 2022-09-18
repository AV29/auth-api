import * as dotenv from 'dotenv';
import express from 'express';
import cors from './middlewares/cors';
import loggerMiddleware from './middlewares/logger';
import { allErrors } from './middlewares/errors';
import Logger from './lib/logger';
import { authRoutes, resumeRoutes } from './routes';

dotenv.config();

const app = express();

app.use(cors);

app.use(loggerMiddleware);

app.use(express.json());

app.use('/auth', authRoutes);

app.use('/resume', resumeRoutes);

app.use(allErrors);

app.listen(process.env.API_PORT, () => {
  Logger.info(`Server running on port ${process.env.API_PORT}`);
});
