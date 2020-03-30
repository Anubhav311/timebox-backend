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
        .returning('task_id_pk')
        .then(idArr => {
            const task_id_pk = idArr[0]
            return db('tasks')
                .where({task_id_pk}).first();
        })
}

function getMany(filter = {}) {
    console.log(filter)
    return db('tasks')
        // .join('subtasks', 'tasks.task_id_pk', '=', 'subtasks.task_id_fk')
        .where('task_due_at', '>=', filter.startdate)
        .where('task_due_at', '<', filter.enddate)
}

function update(filter = {}, payload) {
    return db('tasks')
        .where(filter)
        .update(payload)
        .returning('task_id_pk')
        .then(idArr => {
            const task_id_pk = idArr[0]
            return db('tasks')
                .where({task_id_pk})
                .first();
        })
}

function remove(filter = null) {
    if (!filter) return new Error('No selector provided for deletion');
    return db('tasks')
        .where(filter)
        .delete()
        .returning('task_id_pk');
}