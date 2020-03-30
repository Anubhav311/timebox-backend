const router = require('express').Router();
const tasksDb = require('../model/tasksModel');


router.get('/', (req, res) => {
    const filter = JSON.parse(req.query.startandenddate)
    // console.log(test)
    tasksDb.getMany(filter)
    .then(tasks => {
        res.status(200).json(tasks)
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
    tasksDb.update({task_id_pk: req.body.id}, req.body.payload)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.send(err));
})

router.delete('/', (req, res) => {
    tasksDb.remove(req.query)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.send(err));
})

module.exports = router;