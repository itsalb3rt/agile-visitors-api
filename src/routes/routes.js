import express from 'express';
import projectRoutes from '../routes/projects';
import userRoutes from '../routes/User';
// Initialization
let router = express.Router();

// Routes
router.use('/projects', projectRoutes);
router.use('/users', userRoutes);

export default router;