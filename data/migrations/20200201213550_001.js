
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();

        tbl.datetime('created_at')
            .defaultTo(knex.fn.now());

        tbl.string('name');

        tbl.string('email')
            .notNullable();

        tbl.string('password')
            .notNullable();

        tbl.integer('timebox')
            .defaultTo(0)
            .notNullable();
    })
    .createTable('tasks', tbl => {
        tbl.increments();

        tbl.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl.datetime('created_at')
            .defaultTo(knex.fn.now());

        tbl.datetime('due_at')
            .defaultTo(knex.fn.now());

        tbl.string('task')
            .notNullable();

        tbl.integer('completion_status')
            .defaultTo(0)
            .notNullable();
    })
    .createTable('subtasks', tbl => {
        tbl.increments();

        tbl.integer('task_id')
            .notNullable()
            .references('id')
            .inTable('tasks')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        tbl.string('subtask')
            .notNullable();

        tbl.integer('completion_status')
            .defaultTo(0)
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('subtasks')
        .dropTableIfExists('tasks')
        .dropTableIfExists('users')
};
