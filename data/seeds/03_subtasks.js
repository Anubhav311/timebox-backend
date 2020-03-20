
exports.seed = function(knex) {
  let currentDate = new Date()
  currentDate.setHours(0,0,0,0)
  let currentDay = currentDate.getDay();
  let date1 = new Date(); date1.setDate(date1.getDate() - currentDay + 1); date1.setHours(1);
  let date2 = new Date(); date2.setDate(date2.getDate() - currentDay + 2); date1.setHours(3);
  let date3 = new Date(); date3.setDate(date3.getDate() - currentDay + 3); date1.setHours(5);
  let date4 = new Date(); date4.setDate(date4.getDate() - currentDay + 4); date1.setHours(7);
  let date5 = new Date(); date5.setDate(date5.getDate() - currentDay + 5); date1.setHours(9);
  let date6 = new Date(); date6.setDate(date6.getDate() - currentDay + 6); date1.setHours(11);
  let date7 = new Date(); date7.setDate(date7.getDate() - currentDay + 7); date1.setHours(13);
  let date8 = new Date(); date8.setDate(date8.getDate() - currentDay + 8); date1.setHours(15);
  let date9 = new Date(); date9.setDate(date9.getDate() - currentDay + 9); date1.setHours(17);
  let date10 = new Date(); date10.setDate(date10.getDate() - currentDay + 10); date1.setHours(19);
  let date11 = new Date(); date11.setDate(date11.getDate() - currentDay + 11); date1.setHours(21);
  let date12 = new Date(); date12.setDate(date12.getDate() - currentDay + 12); date1.setHours(22);
  let date13 = new Date(); date13.setDate(date13.getDate() - currentDay + 13); date1.setHours(23);
  let date14 = new Date(); date14.setDate(date14.getDate() - currentDay + 14); date1.setHours(24);

  // Deletes ALL existing entries
  return knex('subtasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('subtasks').insert([
        {task_id_fk: 1, subtask: 'test subtask 1', subtask_due_at: date1},
        {task_id_fk: 2, subtask: 'test subtask 2', subtask_due_at: date2},
        {task_id_fk: 3, subtask: 'test subtask 3', subtask_due_at: date3},
        {task_id_fk: 4, subtask: 'test subtask 4', subtask_due_at: date4},
        {task_id_fk: 5, subtask: 'test subtask 5', subtask_due_at: date5},
        {task_id_fk: 6, subtask: 'test subtask 6', subtask_due_at: date6},
        {task_id_fk: 7, subtask: 'test subtask 7', subtask_due_at: date7},
        {task_id_fk: 8, subtask: 'test subtask 8', subtask_due_at: date8},
        {task_id_fk: 9, subtask: 'test subtask 9', subtask_due_at: date9},
        {task_id_fk: 10, subtask: 'test subtask 10', subtask_due_at: date10},
        {task_id_fk: 11, subtask: 'test subtask 11', subtask_due_at: date11},
        {task_id_fk: 12, subtask: 'test subtask 12', subtask_due_at: date12},
        {task_id_fk: 13, subtask: 'test subtask 13', subtask_due_at: date13},
        {task_id_fk: 14, subtask: 'test subtask 14', subtask_due_at: date14},
        {task_id_fk: 15, subtask: 'test subtask 15', subtask_due_at: date1},
        {task_id_fk: 16, subtask: 'test subtask 16', subtask_due_at: date2},
        {task_id_fk: 17, subtask: 'test subtask 17', subtask_due_at: date3},
        {task_id_fk: 18, subtask: 'test subtask 18', subtask_due_at: date4},
        {task_id_fk: 19, subtask: 'test subtask 19', subtask_due_at: date5},
        {task_id_fk: 20, subtask: 'test subtask 20', subtask_due_at: date6},
        {task_id_fk: 21, subtask: 'test subtask 21', subtask_due_at: date7},
        {task_id_fk: 22, subtask: 'test subtask 22', subtask_due_at: date8},
        {task_id_fk: 23, subtask: 'test subtask 23', subtask_due_at: date9},
        {task_id_fk: 24, subtask: 'test subtask 24', subtask_due_at: date10},
        {task_id_fk: 25, subtask: 'test subtask 25', subtask_due_at: date11},
        {task_id_fk: 26, subtask: 'test subtask 26', subtask_due_at: date12},
        {task_id_fk: 27, subtask: 'test subtask 27', subtask_due_at: date13},
        {task_id_fk: 28, subtask: 'test subtask 28', subtask_due_at: date14},
        {task_id_fk: 29, subtask: 'test subtask 29', subtask_due_at: date1},
        {task_id_fk: 30, subtask: 'test subtask 30', subtask_due_at: date2},
        {task_id_fk: 31, subtask: 'test subtask 31', subtask_due_at: date3},
        {task_id_fk: 32, subtask: 'test subtask 32', subtask_due_at: date4},
        {task_id_fk: 33, subtask: 'test subtask 33', subtask_due_at: date5},
        {task_id_fk: 34, subtask: 'test subtask 34', subtask_due_at: date6},
        {task_id_fk: 35, subtask: 'test subtask 35', subtask_due_at: date7},
        {task_id_fk: 36, subtask: 'test subtask 36', subtask_due_at: date8},
        {task_id_fk: 1, subtask: 'test subtask 1', subtask_due_at: date9},
        {task_id_fk: 2, subtask: 'test subtask 2', subtask_due_at: date10},
        {task_id_fk: 3, subtask: 'test subtask 3', subtask_due_at: date11},
        {task_id_fk: 4, subtask: 'test subtask 4', subtask_due_at: date12},
        {task_id_fk: 5, subtask: 'test subtask 5', subtask_due_at: date13},
        {task_id_fk: 6, subtask: 'test subtask 6', subtask_due_at: date14},
        {task_id_fk: 7, subtask: 'test subtask 7', subtask_due_at: date1},
        {task_id_fk: 8, subtask: 'test subtask 8', subtask_due_at: date2},
        {task_id_fk: 9, subtask: 'test subtask 9', subtask_due_at: date3},
        {task_id_fk: 10, subtask: 'test subtask 10', subtask_due_at: date4},
        {task_id_fk: 11, subtask: 'test subtask 11', subtask_due_at: date5},
        {task_id_fk: 12, subtask: 'test subtask 12', subtask_due_at: date6},
        {task_id_fk: 13, subtask: 'test subtask 13', subtask_due_at: date7},
        {task_id_fk: 14, subtask: 'test subtask 14', subtask_due_at: date8},
        {task_id_fk: 15, subtask: 'test subtask 15', subtask_due_at: date9},
        {task_id_fk: 16, subtask: 'test subtask 16', subtask_due_at: date10},
        {task_id_fk: 17, subtask: 'test subtask 17', subtask_due_at: date11},
        {task_id_fk: 18, subtask: 'test subtask 18', subtask_due_at: date12},
        {task_id_fk: 19, subtask: 'test subtask 19', subtask_due_at: date13},
        {task_id_fk: 20, subtask: 'test subtask 20', subtask_due_at: date14},
        {task_id_fk: 21, subtask: 'test subtask 21', subtask_due_at: date1},
        {task_id_fk: 22, subtask: 'test subtask 22', subtask_due_at: date2},
        {task_id_fk: 23, subtask: 'test subtask 23', subtask_due_at: date3},
        {task_id_fk: 24, subtask: 'test subtask 24', subtask_due_at: date4},
        {task_id_fk: 25, subtask: 'test subtask 25', subtask_due_at: date5},
        {task_id_fk: 26, subtask: 'test subtask 26', subtask_due_at: date6},
        {task_id_fk: 27, subtask: 'test subtask 27', subtask_due_at: date7},
        {task_id_fk: 28, subtask: 'test subtask 28', subtask_due_at: date8},
        {task_id_fk: 29, subtask: 'test subtask 29', subtask_due_at: date9},
        {task_id_fk: 30, subtask: 'test subtask 30', subtask_due_at: date10},
        {task_id_fk: 31, subtask: 'test subtask 31', subtask_due_at: date11},
        {task_id_fk: 32, subtask: 'test subtask 32', subtask_due_at: date12},
        {task_id_fk: 33, subtask: 'test subtask 33', subtask_due_at: date13},
        {task_id_fk: 34, subtask: 'test subtask 34', subtask_due_at: date14},
        {task_id_fk: 35, subtask: 'test subtask 35', subtask_due_at: date1},
        {task_id_fk: 36, subtask: 'test subtask 36', subtask_due_at: date2},
        {task_id_fk: 1, subtask: 'test subtask 1', subtask_due_at: date3},
        {task_id_fk: 2, subtask: 'test subtask 2', subtask_due_at: date4},
        {task_id_fk: 3, subtask: 'test subtask 3', subtask_due_at: date5},
        {task_id_fk: 4, subtask: 'test subtask 4', subtask_due_at: date6},
        {task_id_fk: 5, subtask: 'test subtask 5', subtask_due_at: date7},
        {task_id_fk: 6, subtask: 'test subtask 6', subtask_due_at: date8},
        {task_id_fk: 7, subtask: 'test subtask 7', subtask_due_at: date9},
        {task_id_fk: 8, subtask: 'test subtask 8', subtask_due_at: date10},
        {task_id_fk: 9, subtask: 'test subtask 9', subtask_due_at: date11},
        {task_id_fk: 10, subtask: 'test subtask 10', subtask_due_at: date12},
        {task_id_fk: 11, subtask: 'test subtask 11', subtask_due_at: date13},
        {task_id_fk: 12, subtask: 'test subtask 12', subtask_due_at: date14},
        {task_id_fk: 13, subtask: 'test subtask 13', subtask_due_at: date1},
        {task_id_fk: 14, subtask: 'test subtask 14', subtask_due_at: date2},
        {task_id_fk: 15, subtask: 'test subtask 15', subtask_due_at: date3},
        {task_id_fk: 16, subtask: 'test subtask 16', subtask_due_at: date4},
        {task_id_fk: 17, subtask: 'test subtask 17', subtask_due_at: date5},
        {task_id_fk: 18, subtask: 'test subtask 18', subtask_due_at: date6},
        {task_id_fk: 19, subtask: 'test subtask 19', subtask_due_at: date7},
        {task_id_fk: 20, subtask: 'test subtask 20', subtask_due_at: date8},
        {task_id_fk: 21, subtask: 'test subtask 21', subtask_due_at: date9},
        {task_id_fk: 22, subtask: 'test subtask 22', subtask_due_at: date10},
        {task_id_fk: 23, subtask: 'test subtask 23', subtask_due_at: date11},
        {task_id_fk: 24, subtask: 'test subtask 24', subtask_due_at: date12},
        {task_id_fk: 25, subtask: 'test subtask 25', subtask_due_at: date13},
        {task_id_fk: 26, subtask: 'test subtask 26', subtask_due_at: date14},
        {task_id_fk: 27, subtask: 'test subtask 27', subtask_due_at: date1},
        {task_id_fk: 28, subtask: 'test subtask 28', subtask_due_at: date2},
        {task_id_fk: 29, subtask: 'test subtask 29', subtask_due_at: date3},
        {task_id_fk: 30, subtask: 'test subtask 30', subtask_due_at: date4},
        {task_id_fk: 31, subtask: 'test subtask 31', subtask_due_at: date5},
        {task_id_fk: 32, subtask: 'test subtask 32', subtask_due_at: date6},
        {task_id_fk: 33, subtask: 'test subtask 33', subtask_due_at: date7},
        {task_id_fk: 34, subtask: 'test subtask 34', subtask_due_at: date8},
        {task_id_fk: 35, subtask: 'test subtask 35', subtask_due_at: date9},
        {task_id_fk: 36, subtask: 'test subtask 36', subtask_due_at: date10},
        {task_id_fk: 1, subtask: 'test subtask 1', subtask_due_at: date1},
        {task_id_fk: 2, subtask: 'test subtask 2', subtask_due_at: date2},
        {task_id_fk: 3, subtask: 'test subtask 3', subtask_due_at: date3},
        {task_id_fk: 4, subtask: 'test subtask 4', subtask_due_at: date4},
        {task_id_fk: 5, subtask: 'test subtask 5', subtask_due_at: date5},
        {task_id_fk: 6, subtask: 'test subtask 6', subtask_due_at: date6},
        {task_id_fk: 7, subtask: 'test subtask 7', subtask_due_at: date7},
        {task_id_fk: 8, subtask: 'test subtask 8', subtask_due_at: date8},
        {task_id_fk: 9, subtask: 'test subtask 9', subtask_due_at: date9},
        {task_id_fk: 10, subtask: 'test subtask 10', subtask_due_at: date10},
        {task_id_fk: 11, subtask: 'test subtask 11', subtask_due_at: date11},
        {task_id_fk: 12, subtask: 'test subtask 12', subtask_due_at: date12},
        {task_id_fk: 13, subtask: 'test subtask 13', subtask_due_at: date13},
        {task_id_fk: 14, subtask: 'test subtask 14', subtask_due_at: date14},
        {task_id_fk: 15, subtask: 'test subtask 15', subtask_due_at: date1},
        {task_id_fk: 16, subtask: 'test subtask 16', subtask_due_at: date2},
        {task_id_fk: 17, subtask: 'test subtask 17', subtask_due_at: date3},
        {task_id_fk: 18, subtask: 'test subtask 18', subtask_due_at: date4},
        {task_id_fk: 19, subtask: 'test subtask 19', subtask_due_at: date5},
        {task_id_fk: 20, subtask: 'test subtask 20', subtask_due_at: date6},
        {task_id_fk: 21, subtask: 'test subtask 21', subtask_due_at: date7},
        {task_id_fk: 22, subtask: 'test subtask 22', subtask_due_at: date8},
        {task_id_fk: 23, subtask: 'test subtask 23', subtask_due_at: date9},
        {task_id_fk: 24, subtask: 'test subtask 24', subtask_due_at: date10},
        {task_id_fk: 25, subtask: 'test subtask 25', subtask_due_at: date11},
        {task_id_fk: 26, subtask: 'test subtask 26', subtask_due_at: date12},
        {task_id_fk: 27, subtask: 'test subtask 27', subtask_due_at: date13},
        {task_id_fk: 28, subtask: 'test subtask 28', subtask_due_at: date14},
        {task_id_fk: 29, subtask: 'test subtask 29', subtask_due_at: date1},
        {task_id_fk: 30, subtask: 'test subtask 30', subtask_due_at: date2},
        {task_id_fk: 31, subtask: 'test subtask 31', subtask_due_at: date3},
        {task_id_fk: 32, subtask: 'test subtask 32', subtask_due_at: date4},
        {task_id_fk: 33, subtask: 'test subtask 33', subtask_due_at: date5},
        {task_id_fk: 34, subtask: 'test subtask 34', subtask_due_at: date6},
        {task_id_fk: 35, subtask: 'test subtask 35', subtask_due_at: date7},
        {task_id_fk: 36, subtask: 'test subtask 36', subtask_due_at: date8},
      ]);
    });
};
