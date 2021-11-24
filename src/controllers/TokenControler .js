import jwt from 'jsonwebtoken';
import User from '../models/Users';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        errors: ['credencias inválidas'],
      });
    }
    const user = await User.findOne({ where: { email } });
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
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXP,
    });
    return res.json({ token, user: { nome: user.nome, id, email } });
  }
}

export default new TokenController();
