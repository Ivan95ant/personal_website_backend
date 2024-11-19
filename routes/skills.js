import express from 'express';
const router = express.Router();
import { getSkills } from '../controllers/skillsController.js';

// Endpoint to fetch all skills
router.get('/', getSkills);

export default router;
