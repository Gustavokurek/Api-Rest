"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

class UserController {
  // store
  async store(req, res) {
    try {
      const novoUser = await _Users2.default.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await _Users2.default.findAll({ attributes: ['nome', 'email', 'id'] });
      return res.json(users);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // show
  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await _Users2.default.findByPk(id);
      if (!user) return res.status(400).json({ errors: ['usuário nao existe'] });
      const { nome, email } = user;
      return res.json({ nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // update
  async update(req, res) {
    try {
      const user = await _Users2.default.findByPk(req.userId);
      if (!user) {
        return res.status(400).json({
          errors: ['usuário não existe'],
        });
      }
      const novosDados = await user.update(req.body);
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const id = req.userId;

      const user = await _Users2.default.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ['usuário não existe'],
        });
      }
      await user.destroy();

      return res.json({
        Mensagem: ['conta excluida'],
      });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

/*
index => lista todos os usuários -> get
store/create => cria no usuário -> post
delete -> apaga um usuário -> delete
show -> mostra um usuário -> get
update -> atualiza um usuário -> path ou put
*/

exports. default = new UserController();
