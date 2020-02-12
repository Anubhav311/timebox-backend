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
        .returning('id')
        .then(idArr => {
            const id = idArr[0]
            return db('subtasks')
                .where({id}).first();
        })
}

function getMany(filter = {}) {
    return db('subtasks')
        .where(filter)
}

function update(filter = {}, payload) {
    return db('subtasks')
        .where(filter)
        .update(payload)
        .returning('id')
        .then(idArr => {
            const id = idArr[0]
            return db('subtasks')
                .where({id})
                .first();
        })
}

function remove(filter = null) {
    if (!filter) return new Error('No selector provided for deletion');
    return db('subtasks')
        .where(filter)
        .delete()
        .returning('id');
}