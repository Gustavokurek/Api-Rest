import { Router } from 'express';
import userControler from '../controllers/UserControler';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// apagar depois não devem existir
router.get('/', userControler.index);
router.get('/:id', userControler.show);

//
router.post('/', loginRequired, userControler.store);
router.put('/', loginRequired, userControler.update);
router.delete('/', loginRequired, userControler.delete);

export default router;

/*
index => lista todos os usuários -> get
store/create => cria no usuário -> post
delete -> apaga um usuário -> delete
show -> mostra um usuário -> get
update -> atualiza um usuário -> path ou put
*/
