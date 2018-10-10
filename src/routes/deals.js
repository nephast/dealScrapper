import express from 'express';

const router = express.Router();

const sayHello = async (req, res, next) => {
  try {
    return res.status(200).json('hi there!');
  } catch (err) {
    return next(err);
  }
}

router.route('/')
  .get(sayHello)

export { router as dealsRoute };
