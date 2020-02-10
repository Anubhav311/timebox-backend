
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('subtasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('subtasks').insert([
        {task_id_fk: 1, subtask: 'test subtask 1'},
        {task_id_fk: 2, subtask: 'test subtask 1'},
        {task_id_fk: 3, subtask: 'test subtask 1'},
        {task_id_fk: 1, subtask: 'test subtask 2'},
        {task_id_fk: 2, subtask: 'test subtask 2'},
        {task_id_fk: 3, subtask: 'test subtask 2'},
        {task_id_fk: 1, subtask: 'test subtask 3'},
        {task_id_fk: 2, subtask: 'test subtask 3'},
        {task_id_fk: 3, subtask: 'test subtask 3'}
      ]);
    });
};
