const genericError = (err, req, res, next) => {
  return res.status(err.status || 500).json({
    error: {
      message: err.message || 'Something went wrong'
    }
  });
};

const notFoundError = (req, res, next) => {
  let err = new Error('Resource not found');
  err.status = 404;
  return next(err);
};

export {
  genericError,
  notFoundError
};
