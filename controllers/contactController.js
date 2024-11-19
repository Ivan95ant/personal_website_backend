// controllers/contactController.js
import { check, validationResult } from 'express-validator';
import Contact from '../models/Contact.js'; // Import your Mongoose model

// Validation middleware for contact form
export const validateContactForm = [
    check('name').trim().notEmpty().withMessage('Name is required').escape(),
    check('email').isEmail().withMessage('Invalid email address').normalizeEmail(),
    check('phone').isLength({ min: 10 }).withMessage('Phone number must be at least 10 digits').trim().escape(),
    check('message').trim().notEmpty().withMessage('Message is required').escape()
];

// Controller function to handle contact form submission
export const handleContactForm = async (req, res, next) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Extract data from the request body
        const { name, email, phone, message } = req.body;

        // Create a new contact document
        const newContact = new Contact({ name, email, phone, message });

        // Save to MongoDB
        await newContact.save();

        // Send a success response
        res.status(201).json({ message: 'Contact saved successfully!' });
    } catch (error) {
        // Pass any errors to the error handling middleware
        next(error);
    }
};