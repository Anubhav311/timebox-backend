
exports.seed = function(knex) {
  let currentDate = new Date()
  let currentDay = currentDate.getDate();
  let date1 = new Date(); date1.setDate(date1.getDate() - currentDay + 1)
  let date2 = new Date(); date2.setDate(date2.getDate() - currentDay + 2)
  let date3 = new Date(); date3.setDate(date3.getDate() - currentDay + 3)
  let date4 = new Date(); date4.setDate(date4.getDate() - currentDay + 4)
  let date5 = new Date(); date5.setDate(date5.getDate() - currentDay + 5)
  let date6 = new Date(); date6.setDate(date6.getDate() - currentDay + 6)
  let date7 = new Date(); date7.setDate(date7.getDate() - currentDay + 7)
  let date8 = new Date(); date8.setDate(date8.getDate() - currentDay + 8)
  let date9 = new Date(); date9.setDate(date9.getDate() - currentDay + 9)
  let date10 = new Date(); date10.setDate(date10.getDate() - currentDay + 10)
  let date11 = new Date(); date11.setDate(date11.getDate() - currentDay + 11)
  let date12 = new Date(); date12.setDate(date12.getDate() - currentDay + 12)
  let date13 = new Date(); date13.setDate(date13.getDate() - currentDay + 13)
  let date14 = new Date(); date14.setDate(date14.getDate() - currentDay + 14)
  let date15 = new Date(); date15.setDate(date15.getDate() - currentDay + 1)
  let date16 = new Date(); date16.setDate(date16.getDate() - currentDay + 2)
  let date17 = new Date(); date17.setDate(date17.getDate() - currentDay + 3)
  let date18 = new Date(); date18.setDate(date18.getDate() - currentDay + 4)
  let date19 = new Date(); date19.setDate(date19.getDate() - currentDay + 5)
  let date20 = new Date(); date20.setDate(date20.getDate() - currentDay + 6)
  let date21 = new Date(); date21.setDate(date21.getDate() - currentDay + 7)
  let date22 = new Date(); date22.setDate(date22.getDate() - currentDay + 8)
  let date23 = new Date(); date23.setDate(date23.getDate() - currentDay + 9)
  let date24 = new Date(); date24.setDate(date24.getDate() - currentDay + 10)
  let date25 = new Date(); date25.setDate(date25.getDate() - currentDay + 11)
  let date26 = new Date(); date26.setDate(date26.getDate() - currentDay + 12)
  let date27 = new Date(); date27.setDate(date27.getDate() - currentDay + 13)
  let date28 = new Date(); date28.setDate(date28.getDate() - currentDay + 14)
  let date29 = new Date(); date29.setDate(date29.getDate() - currentDay + 1)
  let date30 = new Date(); date30.setDate(date30.getDate() - currentDay + 2)
  let date31 = new Date(); date31.setDate(date31.getDate() - currentDay + 3)
  let date32 = new Date(); date32.setDate(date32.getDate() - currentDay + 4)
  let date33 = new Date(); date33.setDate(date33.getDate() - currentDay + 5)
  let date34 = new Date(); date34.setDate(date34.getDate() - currentDay + 6)
  let date35 = new Date(); date35.setDate(date35.getDate() - currentDay + 7)
  let date36 = new Date(); date36.setDate(date36.getDate() - currentDay + 8)
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {user_id_fk: 1, task: 'test task heading 1', task_due_at: date1},
        {user_id_fk: 2, task: 'test task heading 1', task_due_at: date2},
        {user_id_fk: 3, task: 'test task heading 1', task_due_at: date3},
        {user_id_fk: 1, task: 'test task heading 2', task_due_at: date4},
        {user_id_fk: 2, task: 'test task heading 2', task_due_at: date5},
        {user_id_fk: 3, task: 'test task heading 2', task_due_at: date6},
        {user_id_fk: 1, task: 'test task heading 3', task_due_at: date7},
        {user_id_fk: 2, task: 'test task heading 3', task_due_at: date8},
        {user_id_fk: 3, task: 'test task heading 3', task_due_at: date9},
        {user_id_fk: 1, task: 'test task heading 4', task_due_at: date10},
        {user_id_fk: 2, task: 'test task heading 4', task_due_at: date11},
        {user_id_fk: 3, task: 'test task heading 4', task_due_at: date12},
        {user_id_fk: 1, task: 'test task heading 5', task_due_at: date13},
        {user_id_fk: 2, task: 'test task heading 5', task_due_at: date14},
        {user_id_fk: 3, task: 'test task heading 5', task_due_at: date15},
        {user_id_fk: 1, task: 'test task heading 6', task_due_at: date16},
        {user_id_fk: 2, task: 'test task heading 6', task_due_at: date17},
        {user_id_fk: 3, task: 'test task heading 6', task_due_at: date18},
        {user_id_fk: 1, task: 'test task heading 7', task_due_at: date19},
        {user_id_fk: 2, task: 'test task heading 7', task_due_at: date20},
        {user_id_fk: 3, task: 'test task heading 7', task_due_at: date21},
        {user_id_fk: 1, task: 'test task heading 8', task_due_at: date22},
        {user_id_fk: 2, task: 'test task heading 8', task_due_at: date23},
        {user_id_fk: 3, task: 'test task heading 8', task_due_at: date24},
        {user_id_fk: 1, task: 'test task heading 9', task_due_at: date25},
        {user_id_fk: 2, task: 'test task heading 9', task_due_at: date26},
        {user_id_fk: 3, task: 'test task heading 9', task_due_at: date27},
        {user_id_fk: 1, task: 'test task heading 10', task_due_at: date28},
        {user_id_fk: 2, task: 'test task heading 10', task_due_at: date29},
        {user_id_fk: 3, task: 'test task heading 10', task_due_at: date30},
        {user_id_fk: 1, task: 'test task heading 11', task_due_at: date31},
        {user_id_fk: 2, task: 'test task heading 11', task_due_at: date32},
        {user_id_fk: 3, task: 'test task heading 11', task_due_at: date33},
        {user_id_fk: 1, task: 'test task heading 12', task_due_at: date34},
        {user_id_fk: 2, task: 'test task heading 12', task_due_at: date35},
        {user_id_fk: 3, task: 'test task heading 12', task_due_at: date36},
      ]);
    });
};
