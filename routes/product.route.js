import { Router } from 'express';

import { productGet } from '../controllers/product.controller.js';

const router = Router();

router.get('/', productGet);

export default router;
