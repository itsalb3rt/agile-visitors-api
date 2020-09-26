import express from 'express';
import userRoutes from '../routes/User';
import VisitRoutes from '../routes/Visit';

// Initialization
let router = express.Router();

// Routes
router.use('/users', userRoutes);
router.use('/visits', VisitRoutes);

export default router;