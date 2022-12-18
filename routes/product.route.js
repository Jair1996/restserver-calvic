import { Router } from 'express';

import { productGet, producFeaturedGet, productGetById } from '../controllers/product.controller.js';

const router = Router();

router.get('/', productGet);

router.get('/product/:id', productGetById);

router.get('/featureds', producFeaturedGet);

export default router;
