
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments('user_id_pk');
        tbl.datetime('user_created_at').defaultTo(knex.fn.now());
        tbl.string('name');
        tbl.string('email').notNullable();
        tbl.string('password').notNullable();
        tbl.integer('timebox').defaultTo(10).notNullable();
    })
    .createTable('tasks', tbl => {
        tbl.increments('task_id_pk');
        tbl.integer('user_id_fk').notNullable().references('user_id_pk').inTable('users').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.datetime('task_created_at').defaultTo(knex.fn.now());
        tbl.datetime('task_due_at').defaultTo(knex.fn.now());
        tbl.string('task').notNullable();
        tbl.integer('task_completion_status').defaultTo(0).notNullable();
    })
    .createTable('subtasks', tbl => {
        tbl.increments('subtask_id_pk');
        tbl.integer('task_id_fk').notNullable().references('task_id_pk').inTable('tasks').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.string('subtask').notNullable();
        tbl.datetime('subtask_created_at').defaultTo(knex.fn.now());
        tbl.integer('subtask_completion_status').defaultTo(0).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('subtasks')
        .dropTableIfExists('tasks')
        .dropTableIfExists('users')
};
