import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll();
    res.json(alunos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          errors: ['Id faltando'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);

      return res.json({
        alunoCriado: true,
        novoAluno: aluno,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          errors: ['Id faltando'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      const alunoEdit = await aluno.update(req.body);

      return res.json({
        alunoEdit: true,
        AlunoEditado: alunoEdit,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({
          errors: ['Id faltando'],
        });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      await aluno.destroy();
      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
