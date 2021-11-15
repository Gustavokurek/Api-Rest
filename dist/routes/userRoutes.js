"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserControler = require('../controllers/UserControler'); var _UserControler2 = _interopRequireDefault(_UserControler);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// apagar depois não devem existir
router.get('/', _UserControler2.default.index);
router.get('/:id', _UserControler2.default.show);

//
router.post('/', _loginRequired2.default, _UserControler2.default.store);
router.put('/', _loginRequired2.default, _UserControler2.default.update);
router.delete('/', _loginRequired2.default, _UserControler2.default.delete);

exports. default = router;

/*
index => lista todos os usuários -> get
store/create => cria no usuário -> post
delete -> apaga um usuário -> delete
show -> mostra um usuário -> get
update -> atualiza um usuário -> path ou put
*/
