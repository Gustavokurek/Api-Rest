"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        errors: ['credencias inválidas'],
      });
    }
    const user = await _Users2.default.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        errors: ['credencias inválidas'],
      });
    }

    if (!(await user.pass(password))) {
      return res.status(401).json({
        errors: ['senha inválida'],
      });
    }
    const { id } = user;
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXP,
    });
    return res.json({ token });
  }
}

exports. default = new TokenController();
