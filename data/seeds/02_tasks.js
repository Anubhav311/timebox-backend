
exports.seed = function(knex) {
  let currentDate = new Date()
  let currentDay = currentDate.getDate();
  let date1 = new Date()
  date1.setDate(date1.getDate() - currentDay + 1)
  let date2 = new Date()
  date2.setDate(date2.getDate() - currentDay + 2)
  let date3 = new Date()
  date3.setDate(date3.getDate() - currentDay + 3)
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {user_id_fk: 1, task: 'test task heading 1', task_created_at: date1},
        {user_id_fk: 2, task: 'test task heading 1', task_created_at: date2},
        {user_id_fk: 3, task: 'test task heading 1', task_created_at: date3},
        // {user_id_fk: 1, task: 'test task heading 2', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 4)},
        // {user_id_fk: 2, task: 'test task heading 2', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 5)},
        // {user_id_fk: 3, task: 'test task heading 2', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 6)},
        // {user_id_fk: 1, task: 'test task heading 3', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 7)},
        // {user_id_fk: 2, task: 'test task heading 3', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 8)},
        // {user_id_fk: 3, task: 'test task heading 3', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 9)},
        // {user_id_fk: 1, task: 'test task heading 4', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 10)},
        // {user_id_fk: 2, task: 'test task heading 4', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 11)},
        // {user_id_fk: 3, task: 'test task heading 4', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 12)},
        // {user_id_fk: 1, task: 'test task heading 5', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 13)},
        // {user_id_fk: 2, task: 'test task heading 5', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 14)},
        // {user_id_fk: 3, task: 'test task heading 5', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 1)},
        // {user_id_fk: 1, task: 'test task heading 6', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 2)},
        // {user_id_fk: 2, task: 'test task heading 6', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 3)},
        // {user_id_fk: 3, task: 'test task heading 6', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 4)},
        // {user_id_fk: 1, task: 'test task heading 7', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 5)},
        // {user_id_fk: 2, task: 'test task heading 7', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 6)},
        // {user_id_fk: 3, task: 'test task heading 7', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 7)},
        // {user_id_fk: 1, task: 'test task heading 8', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 8)},
        // {user_id_fk: 2, task: 'test task heading 8', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 9)},
        // {user_id_fk: 3, task: 'test task heading 8', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 10)},
        // {user_id_fk: 1, task: 'test task heading 9', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 11)},
        // {user_id_fk: 2, task: 'test task heading 9', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 12)},
        // {user_id_fk: 3, task: 'test task heading 9', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 13)},
        // {user_id_fk: 1, task: 'test task heading 10', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 14)},
        // {user_id_fk: 2, task: 'test task heading 10', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 1)},
        // {user_id_fk: 3, task: 'test task heading 10', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 2)},
        // {user_id_fk: 1, task: 'test task heading 11', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 3)},
        // {user_id_fk: 2, task: 'test task heading 11', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 4)},
        // {user_id_fk: 3, task: 'test task heading 11', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 5)},
        // {user_id_fk: 1, task: 'test task heading 12', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 6)},
        // {user_id_fk: 2, task: 'test task heading 12', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 7)},
        // {user_id_fk: 3, task: 'test task heading 12', task_created_at: currentDate.setDate(currentDate.getDate() - currentDay + 8)},
      ]);
    });
};
