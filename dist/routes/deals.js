"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.router();

exports.router = router;

const sayHello = async (req, res, next) => {
  try {
    return res.status(200).json('hi there!');
  } catch (e) {
    return next(err);
  }
};

router.route('/').get(sayHello);