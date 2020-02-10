
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {user_id_fk: 1, task: 'test task heading 1'},
        {user_id_fk: 2, task: 'test task heading 2'},
        {user_id_fk: 3, task: 'test task heading 3'}
      ]);
    });
};
