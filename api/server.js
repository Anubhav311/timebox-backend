const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const server = express();

const usersRouter = require('../router/usersRouter');
const tasksRouter = require('../router/tasksRouter');
const subtasksRouter = require('../router/subtasksRouter');

server.use(helmet());
server.use(cors());
server.use(express.json())

server.use('/api/users', usersRouter);
server.use('/api/tasks', tasksRouter);
server.use('/api/subtasks', subtasksRouter);

server.get('/', (req, res) => {
    res.status(200).json("it's working")
})

module.exports = server;