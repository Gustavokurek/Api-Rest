"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _HomeControler = require('../controllers/HomeControler'); var _HomeControler2 = _interopRequireDefault(_HomeControler);

const router = new (0, _express.Router)();

router.get('/', _HomeControler2.default.index);

exports. default = router;
