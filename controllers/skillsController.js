// controllers/skillsController.js
import Skill from '../models/Skill.js';

export const getSkills = async (req, res, next) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};
