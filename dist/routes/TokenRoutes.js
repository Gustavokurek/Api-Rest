"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TokenControler = require('../controllers/TokenControler '); var _TokenControler2 = _interopRequireDefault(_TokenControler);

const router = new (0, _express.Router)();

router.post('/', _TokenControler2.default.store);

exports. default = router;