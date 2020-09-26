import {Router} from 'express';
import UserController from '../controllers/User.controller';

const router = Router();

router.get('/', UserController.getAll );
router.get('/:id', UserController.getById );
router.put('/:id', UserController.update );
router.post('/', UserController.create );

export default router;