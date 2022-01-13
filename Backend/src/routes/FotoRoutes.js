import { Router } from 'express';
import fotoControler from '../controllers/FotoControler';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, fotoControler.store);

export default router;
