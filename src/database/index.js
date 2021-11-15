import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import Foto from '../models/Foto';
import User from '../models/Users';

const models = [Aluno, User, Foto];
const connections = new Sequelize(databaseConfig);
models.forEach((model) => {
  model.init(connections);
});

models.forEach((model) => model.associate && model.associate(connections.models));
