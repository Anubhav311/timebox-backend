const db = require('../data/dbConfig');

module.exports = {
    insert,
    getMany,
    update,
    remove
}

function insert(user) {
    return db('tasks')
        .insert(user)
        .returning('id')
        .then(idArr => {
            const id = idArr[0]
            return db('tasks')
                .where({id}).first();
        })
}

function getMany(filter = {}) {
    let tasksAndSubtasks = []

    return db('tasks')
        .where(filter)
        .first()
        .then(tasks => {
            // tasksAndSubtasks = tasks
            // for (i = 0; i < tasksAndSubtasks.length; i++) {
            //     tasksAndSubtasks[i].subtasks = getManySubtasks()
            subtasks = db('subtasks').where({task_id: 1})
            // tasks['subtasks'] = subtasks
            console.log(typeof(subtasks))
            return subtasks
            // }
            // return tasksAndSubtasks;
        })
        // .innerJoin('subtasks', 'tasks.id', 'subtasks.id')
}

function getManySubtasks() {
    return db('subtasks').where({task_id: 1})
}

function update(filter = {}, payload) {
    return db('tasks')
        .where(filter)
        .update(payload)
        .returning('id')
        .then(idArr => {
            const id = idArr[0]
            return db('tasks')
                .where({id})
                .first();
        })
}

function remove(filter = null) {
    if (!filter) return new Error('No selector provided for deletion');
    return db('tasks')
        .where(filter)
        .delete()
        .returning('id');
}