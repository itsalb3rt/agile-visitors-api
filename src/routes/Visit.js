import {Router} from 'express';
import VisitController from '../controllers/Visit.controller';

const router = Router();

router.get('/', VisitController.getAll );
router.get('/:id', VisitController.getById );
router.put('/:id', VisitController.update );
router.post('/', VisitController.create );

export default router;