const router = require('express').Router();
const tasksDb = require('../model/tasksModel');


router.get('/', (req, res) => {
    filter = req.query
    tasksDb.getMany(filter)
    .then(skills => {
        res.status(200).json(skills)
    })
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
    payload = req.body
    tasksDb.insert(payload)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.send(err.message));
})

router.put('/', (req, res) => {
    tasksDb.update({id: req.body.id}, req.body.payload)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.send(err));
})

router.delete('/', (req, res) => {
    tasksDb.remove(req.body)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.send(err));
})

module.exports = router;