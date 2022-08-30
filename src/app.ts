import { Routes } from './controllers/v1';
import express, { Request, Response } from 'express';
import { LoggerService } from './services';
import * as dotenv from 'dotenv';
dotenv.config();

const logger = LoggerService.getLogger();

const app: express.Application = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || 'localhost';

app.use('/v1', Routes);

app.use((req: Request, res: Response) => res.status(404).send());

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () =>
    logger.info(`The Web Server is Listening at http://${host}:${port}`)
  );
}

export const App: express.Application = app;
