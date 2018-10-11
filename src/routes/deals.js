import express from 'express';
import { dealsControllers } from '../controllers';

const router = express.Router();

  router.get('/:id', 
    async (req, res, next) => {
      const { err, data } = await dealsControllers.getById({ id: req.params.id });
      if (err) {
        return next(err)
      }
      return res.status(200).json(data);
    }
  );

export { router as dealsRoute };
