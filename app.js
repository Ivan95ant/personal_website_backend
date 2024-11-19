import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import projectsRoutes from './routes/projects.js';
import skillsRoutes from './routes/skills.js';
import contactRoutes from './routes/contact.js';
import distanceRoutes from './routes/distance.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Define the rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    message: 'Too many requests from this IP, please try again after 15 minutes'
  });

app.use(cors({ origin: 'http://localhost:3000' })); // Allow requests from React's dev server

app.use(express.json()); // Middleware to parse JSON


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'your_mongodb_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));


// Use routes
app.use('/api/projects',limiter, projectsRoutes);
app.use('/api/skills',limiter, skillsRoutes);
app.use('/api/contact',limiter, contactRoutes);
app.use('/api/location',limiter, distanceRoutes); // Use the new distance route


// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});












