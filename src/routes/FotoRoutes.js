import { Router } from 'express';
import fotoControler from '../controllers/FotoControler';

const router = new Router();

router.post('/', fotoControler.store);

export default router;
