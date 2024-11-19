// models/Skill.js
import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
    category: { type: String, required: true }, // e.g., 'Frontend', 'Backend', 'Database'
});

// Export the model as a default export
export default mongoose.model('Skill', skillSchema);
