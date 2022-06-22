const { findOneAndDelete } = require('../models/Task');
const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async')

const getAllTasks = asyncWrapper (async (req, res) => {
    const tasks = await Task.find({});
        res.status(200).json({tasks});
});

const createTask = asyncWrapper( async (req, res, next) => {
        const newTask = await Task.create(req.body);
    res.json({newTask});
});

const getTask = asyncWrapper (async (req, res) => {
        const taskID = req.params.id
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            return res.status(404).json({msg:'No task with ID'});
        };
        res.status(200).json({task});
    });

const updateTask = asyncWrapper( async (req, res) => {
        const taskID = req.params.id;
        const task = await Task.findByIdAndUpdate({_id: taskID}, req.body, {new: true, runValidators: true});
        if (!task) {
            res.status(404).send(`There is no task with id ${taskID}`)
        }
        res.status(200).json({task})
    });

const deleteTask = asyncWrapper( async (req, res) => {
    const taskID = req.params.id;
    const task = await Task.findOneAndDelete({_id: taskID});
    if (!task) {
        return res.status(402).json({msg : 'No task with id'})
    };
    res.status(200).json({task});
});


module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
};