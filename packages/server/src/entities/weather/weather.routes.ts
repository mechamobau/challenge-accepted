import { Router } from 'express';

import controllers from './weather.controller';

const router = Router();

router.get('/:location_id', controllers.show);

export default router;
