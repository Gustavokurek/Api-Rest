import { Router } from 'express';
import alunoControler from '../controllers/AlunoControler';
import loginRequerid from '../middlewares/loginRequired';

const router = new Router();

router.get('/', alunoControler.index);
router.post('/', loginRequerid, alunoControler.store);
router.delete('/:id', loginRequerid, alunoControler.delete);
router.get('/:id', alunoControler.show);
router.put('/:id', loginRequerid, alunoControler.update);

export default router;
