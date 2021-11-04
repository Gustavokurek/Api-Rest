import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'gustavo',
      sobrenome: 'Kurek',
      email: 'gustavokureksz@gmail.com',
      idade: 22,
      peso: 80,
      altura: 1.80,

    });
    res.json(novoAluno);
  }
}

export default new HomeController();
