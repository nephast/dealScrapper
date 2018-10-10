"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notFoundError = exports.genericError = void 0;

const genericError = (err, req, res, next) => {
  return res.status(err.status || 500).json({
    error: {
      message: err.message || 'Something went wrong'
    }
  });
};

exports.genericError = genericError;

const notFoundError = (req, res, next) => {
  let err = new Error('Resource not found');
  err.status = 404;
  return next(err);
};

exports.notFoundError = notFoundError;