import { Router } from 'express';
import tokenControler from '../controllers/TokenControler ';

const router = new Router();

router.post('/', tokenControler.store);

export default router;
