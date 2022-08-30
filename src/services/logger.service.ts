import { getLogger, Logger } from 'log4js';
import * as dotenv from 'dotenv';
dotenv.config();

export class LoggerService {
  public static getLogger = (): Logger => {
    const logger = getLogger(process.env.LOG_CATEGORY || 'default');
    logger.level = process.env.LOG_LEVEL || 'info';

    return logger;
  };
}
