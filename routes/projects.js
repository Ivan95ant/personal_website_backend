import express from 'express';
const router = express.Router();
import { getProjects, addProject } from '../controllers/projectsController.js';

// Route to get all projects
router.get('/', getProjects);

// Route to add a new project
router.post('/', addProject);

export default router;


