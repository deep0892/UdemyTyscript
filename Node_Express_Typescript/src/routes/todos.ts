import { Router } from 'express';

import { createTodo } from '../controllers/todos';

const router = Router();

router.get('/');

router.post('/', createTodo);

router.patch('/');

router.delete('/');

export default router;




