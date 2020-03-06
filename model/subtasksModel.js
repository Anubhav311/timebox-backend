const db = require('../data/dbConfig');

module.exports = {
    insert,
    getMany,
    update,
    remove,
}

function insert(user) {
    return db('subtasks')
        .insert(user)
        .returning('subtask_id_pk')
        .then(idArr => {
            const subtask_id_pk = idArr[0]
            return db('subtasks')
                .where({subtask_id_pk}).first();
        })
}

function getMany(filter = {}) {
    if (filter instanceof Array) {
        return db('subtasks')
            .whereIn('task_id_fk', filter)
    }
    return db('subtasks')
        .where(filter)
}

function update(filter = {}, payload) {
    return db('subtasks')
        .where(filter)
        .update(payload)
        .returning('subtask_id_pk')
        .then(idArr => {
            const subtask_id_pk = idArr[0]
            return db('subtasks')
                .where({subtask_id_pk})
                .first();
        })
}

function remove(filter = null) {
    if (!filter) return new Error('No selector provided for deletion');
    return db('subtasks')
        .where(filter)
        .delete()
        .returning('subtask_id_pk');
}