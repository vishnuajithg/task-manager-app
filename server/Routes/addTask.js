const express = require('express')
const router = express.Router();
const Task = require('../Model/schema');

router.post('/addTask', async (req, res) => {
    try {
        const {title, description, status,priority} = req.body;
        console.log(req.body);
        const task = new Task({
            title,
            description,
            status,
            priority
        });
        await task.save();
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/viewTask', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/view/DeleteTask', async (req, res) => {
    try {
        const {id} = req.body;
        console.log(req.body);
        const task = new Task({
            title,
            description,
            status,
            priority
        });
        await task.save();
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;