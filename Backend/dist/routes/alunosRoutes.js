"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoControler = require('../controllers/AlunoControler'); var _AlunoControler2 = _interopRequireDefault(_AlunoControler);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.get('/', _AlunoControler2.default.index);
router.post('/', _loginRequired2.default, _AlunoControler2.default.store);
router.delete('/:id', _loginRequired2.default, _AlunoControler2.default.delete);
router.get('/:id', _AlunoControler2.default.show);
router.put('/:id', _loginRequired2.default, _AlunoControler2.default.update);

exports. default = router;
