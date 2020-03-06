const router = require('express').Router();
const subtasksDb = require('../model/subtasksModel');


router.get('/', (req, res) => {
    if (req.query.tasksIds) {
        const filter = JSON.parse(req.query.tasksIds) //converting string into an array
        subtasksDb.getMany(filter)
        .then(subtasks => {
            res.status(200).json(subtasks)
        })
        .catch(err => res.send(err));
    } else {
        filter = req.query
        subtasksDb.getMany(filter)
        .then(subtasks => {
            res.status(200).json(subtasks)
        })
        .catch(err => res.send(err));
    }
});

router.post('/', (req, res) => {
    payload = req.body
    subtasksDb.insert(payload)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.send(err.message));
})

router.put('/', (req, res) => {
    subtasksDb.update({subtask_id_pk: req.body.id}, req.body.payload)
        .then(response => {
            res.status(200).json(response);
            console.log(response)
        })
        .catch(err => res.send(err));
})

router.delete('/', (req, res) => {
    subtasksDb.remove(req.query)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.send(err));
})

module.exports = router;