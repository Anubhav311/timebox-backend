const db = require('../data/dbConfig');

module.exports = {
    insert,
    getMany,
    update,
    remove,
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
    return db('tasks')
        .join('subtasks', 'tasks.task_id_pk', '=', 'subtasks.task_id_fk')
        .where(filter)
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