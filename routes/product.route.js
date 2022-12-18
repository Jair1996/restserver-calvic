import { Router } from 'express';

import { productGet, producFeaturedGet } from '../controllers/product.controller.js';

const router = Router();

router.get('/', productGet);

router.get('/featureds', producFeaturedGet);

export default router;
