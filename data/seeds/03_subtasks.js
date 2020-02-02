
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {task_id: 1, subtask: 'test subtask 1'},
        {task_id: 2, subtask: 'test subtask 1'},
        {task_id: 3, subtask: 'test subtask 1'},
        {task_id: 1, subtask: 'test subtask 2'},
        {task_id: 2, subtask: 'test subtask 2'},
        {task_id: 3, subtask: 'test subtask 2'},
        {task_id: 1, subtask: 'test subtask 3'},
        {task_id: 2, subtask: 'test subtask 3'},
        {task_id: 3, subtask: 'test subtask 3'}
      ]);
    });
};
