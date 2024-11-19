import Project from'../models/Project.js'; // Assuming you defined a Project model in `models/Project.js`

// Controller to fetch all projects
export const getProjects = async (req, res, next) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Controller to add a new project
export const addProject = async (req, res, next) => {
    try {
        const { name, description, startDate, endDate } = req.body;
        const newProject = new Project({ name, description, startDate, endDate });
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Controller function to update a project
export const updateProject = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedProject = await Project.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json(updatedProject);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};

// Controller function to delete a project
export const deleteProject = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};
