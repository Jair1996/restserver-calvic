import { Router } from 'express';

import { pedidoPost, pedidoGet } from '../controllers/pedido.controller.js';

const router = Router();

router.post('/', pedidoPost);

router.get('/', pedidoGet);

export default router;
