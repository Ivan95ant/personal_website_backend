// routes/distance.js
import express from 'express';
const router = express.Router();
import { getDistance, getAutocomplete } from '../controllers/distanceController.js';

// Define the route to calculate distance
router.get('/distance', getDistance);
router.get('/autocomplete', getAutocomplete);

export default router;
