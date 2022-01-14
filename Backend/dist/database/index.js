"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

const models = [_Aluno2.default, _Users2.default, _Foto2.default];
const connections = new (0, _sequelize.Sequelize)(_database2.default);
models.forEach((model) => {
  model.init(connections);
});

models.forEach((model) => model.associate && model.associate(connections.models));
