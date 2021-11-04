import { Router } from 'express';
import userControler from '../controllers/UserControler';

const router = new Router();

router.post('/', userControler.store);

export default router;

/*
index => lista todos os usuários -> get
store/create => cria no usuário -> post
delete -> apaga um usuário -> delete
show -> mostra um usuário -> get
update -> atualiza um usuário -> path ou put
*/
