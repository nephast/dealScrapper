import express from 'express';
import { run } from '../helpers';

const router = express.Router();

const sayHello = async (req, res, next) => {
  try {
    return res.status(200).json('hi there!');
  } catch (err) {
    return next(err);
  }
}

router.route('/')
  .get(run)

export { router as dealsRoute };
