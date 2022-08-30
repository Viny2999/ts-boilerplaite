import { Router } from 'express';
import { HealthCheckController } from './health-check.controller';

const router = Router();

const defaultRoutes = [
  {
    path: '/health',
    route: HealthCheckController,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export const Routes: Router = router;
