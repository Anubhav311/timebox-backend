
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
        // tbl.datetime('task_created_at').defaultTo(knex.fn.now());
        tbl.integer('task_created_year').notNullable()
        tbl.integer('task_created_month').notNullable()
        tbl.integer('task_created_date').notNullable()
        tbl.integer('task_created_hour').notNullable()
        tbl.integer('task_created_minute').notNullable()
        tbl.integer('task_created_second').notNullable()
        // tbl.datetime('task_due_at').defaultTo(knex.fn.now());
        tbl.integer('task_due_year').notNullable()
        tbl.integer('task_due_month').notNullable()
        tbl.integer('task_due_date').notNullable()
        tbl.integer('task_due_hour').notNullable()
        tbl.integer('task_due_minute').notNullable()
        tbl.integer('task_due_seconds').notNullable()
        tbl.string('task').notNullable();
        tbl.boolean('task_completion_status').defaultTo(false).notNullable();
    })
    .createTable('subtasks', tbl => {
        tbl.increments('subtask_id_pk');
        tbl.integer('task_id_fk').notNullable().references('task_id_pk').inTable('tasks').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.string('subtask').notNullable();
        tbl.datetime('subtask_created_at').defaultTo(knex.fn.now());
        tbl.datetime('subtask_due_at').defaultTo(knex.fn.now()).notNullable();
        tbl.boolean('subtask_completion_status').defaultTo(false).notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('subtasks')
        .dropTableIfExists('tasks')
        .dropTableIfExists('users')
};
