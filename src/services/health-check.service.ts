import { Request, Response } from 'express';
import { LoggerService } from './logger.service';
import moment from 'moment';

const logger = LoggerService.getLogger();

export class HealthCheckService {

  public checkHealth = (req: Request, res: Response): Response => {
    logger.debug('HealthCheckService :: checkHealth :: Status of application retrivied');

    const secondsToMilliseconds = seconds => seconds * 1000;
    const momentFormat = seconds => moment.utc(secondsToMilliseconds(seconds)).format('HH:mm');
    const uptimeHumanDate = momentFormat(process.uptime());

    return res.send({
      apiName: 'ts-node-boilerplaite',
      uptime: uptimeHumanDate
    });
  };
}
