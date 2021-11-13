import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'Nome precisa ter mais que 2 caracteres',
          },
        },
      },

      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [2, 255],
            msg: 'sobrenome precisa ter mais que 2 caracteres',
          },
        },
      },

      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'email já existe',
        },
        validate: {
          isEmail: {
            msg: 'Email inválido',
          },
        },
      },

      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero inteiro',
          },
        },
      },

      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso Inválido',
          },
        },
      },

      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura inválida',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
