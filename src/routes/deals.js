import express from 'express';
import { run } from '../helpers';

const router = express.Router();

router.route('/')
  .get(run)

export { router as dealsRoute };
