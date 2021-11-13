import { Router } from 'express';
import alunoControler from '../controllers/AlunoControler';

const router = new Router();

router.get('/', alunoControler.index);

export default router;
