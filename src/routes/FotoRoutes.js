import { Router } from 'express';
import multer from 'multer';

import fotoControler from '../controllers/FotoControler';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);
const router = new Router();

router.post('/', upload.single('foto'), fotoControler.store);

export default router;
