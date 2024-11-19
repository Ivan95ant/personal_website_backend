// routes/contactRoutes.js
import express from 'express';
import { handleContactForm, validateContactForm } from '../controllers/contactController.js';

const router = express.Router();

router.post('/', validateContactForm, handleContactForm);

export default router;
