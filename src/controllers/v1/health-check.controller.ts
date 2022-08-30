import { HealthCheckService } from '../../services';
import { Router } from 'express';

const router = Router();
const healthCheckService = new HealthCheckService();

router.get('/', healthCheckService.checkHealth);

export const HealthCheckController: Router = router;
