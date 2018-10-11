import express from 'express';
import { dealsControllers } from '../controllers';

const router = express.Router();

  router.get('/:id', 
    async (req, res, next) => {
      const data = await dealsControllers.getById({ id: req.params.id });
      return res.status(200).json(data);
    }
  );

export { router as dealsRoute };
