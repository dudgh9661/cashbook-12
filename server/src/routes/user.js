import { Router } from 'express';
import { createUser } from '../services/user.js';

const router = Router();

router.get('/', () => {});

router.post('/', async (req, res) => {
  const { name } = req.body;
  await createUser(name);
  res.status(201).send();
});

router.put('/', () => {});
router.delete('/', () => {});

export default router;
