import Dotenv from 'dotenv';
import { resolve } from 'path';

Dotenv.config();
import './database';
import cors from 'cors';
import helmet from 'helmet';

import express from 'express';
import homeRoutes from './routes/homeRoutes';
import userRoutes from './routes/userRoutes';
import TokenRoutes from './routes/TokenRoutes';
import alunosRoutes from './routes/alunosRoutes';
import fotoRoutes from './routes/FotoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/tokens', TokenRoutes);
    this.app.use('/alunos', alunosRoutes);
    this.app.use('/fotos', fotoRoutes);
  }
}

export default new App().app;
