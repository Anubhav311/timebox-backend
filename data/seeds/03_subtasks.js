
exports.seed = function(knex) {
  let currentDate = new Date()
  let currentDay = currentDate.getDay();
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
  return knex('subtasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('subtasks').insert([
        {task_id_fk: 1, subtask: 'test subtask 2'},
        {task_id_fk: 2, subtask: 'test subtask 1'},
        {task_id_fk: 3, subtask: 'test subtask 3'},
        {task_id_fk: 4, subtask: 'test subtask 4'},
        {task_id_fk: 5, subtask: 'test subtask 5'},
        {task_id_fk: 6, subtask: 'test subtask 6'},
        {task_id_fk: 7, subtask: 'test subtask 7'},
        {task_id_fk: 8, subtask: 'test subtask 8'},
        {task_id_fk: 9, subtask: 'test subtask 9'},
        {task_id_fk: 10, subtask: 'test subtask 10'},
        {task_id_fk: 11, subtask: 'test subtask 11'},
        {task_id_fk: 12, subtask: 'test subtask 12'},
        {task_id_fk: 13, subtask: 'test subtask 13'},
        {task_id_fk: 14, subtask: 'test subtask 14'},
        {task_id_fk: 15, subtask: 'test subtask 15'},
        {task_id_fk: 16, subtask: 'test subtask 16'},
        {task_id_fk: 17, subtask: 'test subtask 17'},
        {task_id_fk: 18, subtask: 'test subtask 18'},
        {task_id_fk: 19, subtask: 'test subtask 19'},
        {task_id_fk: 20, subtask: 'test subtask 20'},
        {task_id_fk: 21, subtask: 'test subtask 21'},
        {task_id_fk: 22, subtask: 'test subtask 22'},
        {task_id_fk: 23, subtask: 'test subtask 23'},
        {task_id_fk: 24, subtask: 'test subtask 24'},
        {task_id_fk: 25, subtask: 'test subtask 25'},
        {task_id_fk: 26, subtask: 'test subtask 26'},
        {task_id_fk: 27, subtask: 'test subtask 27'},
        {task_id_fk: 28, subtask: 'test subtask 28'},
        {task_id_fk: 29, subtask: 'test subtask 29'},
        {task_id_fk: 30, subtask: 'test subtask 30'},
        {task_id_fk: 31, subtask: 'test subtask 31'},
        {task_id_fk: 32, subtask: 'test subtask 32'},
        {task_id_fk: 33, subtask: 'test subtask 33'},
        {task_id_fk: 34, subtask: 'test subtask 34'},
        {task_id_fk: 35, subtask: 'test subtask 35'},
        {task_id_fk: 36, subtask: 'test subtask 36'},
        {task_id_fk: 1, subtask: 'test subtask 1'},
        {task_id_fk: 2, subtask: 'test subtask 2'},
        {task_id_fk: 3, subtask: 'test subtask 3'},
        {task_id_fk: 4, subtask: 'test subtask 4'},
        {task_id_fk: 5, subtask: 'test subtask 5'},
        {task_id_fk: 6, subtask: 'test subtask 6'},
        {task_id_fk: 7, subtask: 'test subtask 7'},
        {task_id_fk: 8, subtask: 'test subtask 8'},
        {task_id_fk: 9, subtask: 'test subtask 9'},
        {task_id_fk: 10, subtask: 'test subtask 10'},
        {task_id_fk: 11, subtask: 'test subtask 11'},
        {task_id_fk: 12, subtask: 'test subtask 12'},
        {task_id_fk: 13, subtask: 'test subtask 13'},
        {task_id_fk: 14, subtask: 'test subtask 14'},
        {task_id_fk: 15, subtask: 'test subtask 15'},
        {task_id_fk: 16, subtask: 'test subtask 16'},
        {task_id_fk: 17, subtask: 'test subtask 17'},
        {task_id_fk: 18, subtask: 'test subtask 18'},
        {task_id_fk: 19, subtask: 'test subtask 19'},
        {task_id_fk: 20, subtask: 'test subtask 20'},
        {task_id_fk: 21, subtask: 'test subtask 21'},
        {task_id_fk: 22, subtask: 'test subtask 22'},
        {task_id_fk: 23, subtask: 'test subtask 23'},
        {task_id_fk: 24, subtask: 'test subtask 24'},
        {task_id_fk: 25, subtask: 'test subtask 25'},
        {task_id_fk: 26, subtask: 'test subtask 26'},
        {task_id_fk: 27, subtask: 'test subtask 27'},
        {task_id_fk: 28, subtask: 'test subtask 28'},
        {task_id_fk: 29, subtask: 'test subtask 29'},
        {task_id_fk: 30, subtask: 'test subtask 30'},
        {task_id_fk: 31, subtask: 'test subtask 31'},
        {task_id_fk: 32, subtask: 'test subtask 32'},
        {task_id_fk: 33, subtask: 'test subtask 33'},
        {task_id_fk: 34, subtask: 'test subtask 34'},
        {task_id_fk: 35, subtask: 'test subtask 35'},
        {task_id_fk: 36, subtask: 'test subtask 36'},
        {task_id_fk: 1, subtask: 'test subtask 1'},
        {task_id_fk: 2, subtask: 'test subtask 2'},
        {task_id_fk: 3, subtask: 'test subtask 3'},
        {task_id_fk: 4, subtask: 'test subtask 4'},
        {task_id_fk: 5, subtask: 'test subtask 5'},
        {task_id_fk: 6, subtask: 'test subtask 6'},
        {task_id_fk: 7, subtask: 'test subtask 7'},
        {task_id_fk: 8, subtask: 'test subtask 8'},
        {task_id_fk: 9, subtask: 'test subtask 9'},
        {task_id_fk: 10, subtask: 'test subtask 10'},
        {task_id_fk: 11, subtask: 'test subtask 11'},
        {task_id_fk: 12, subtask: 'test subtask 12'},
        {task_id_fk: 13, subtask: 'test subtask 13'},
        {task_id_fk: 14, subtask: 'test subtask 14'},
        {task_id_fk: 15, subtask: 'test subtask 15'},
        {task_id_fk: 16, subtask: 'test subtask 16'},
        {task_id_fk: 17, subtask: 'test subtask 17'},
        {task_id_fk: 18, subtask: 'test subtask 18'},
        {task_id_fk: 19, subtask: 'test subtask 19'},
        {task_id_fk: 20, subtask: 'test subtask 20'},
        {task_id_fk: 21, subtask: 'test subtask 21'},
        {task_id_fk: 22, subtask: 'test subtask 22'},
        {task_id_fk: 23, subtask: 'test subtask 23'},
        {task_id_fk: 24, subtask: 'test subtask 24'},
        {task_id_fk: 25, subtask: 'test subtask 25'},
        {task_id_fk: 26, subtask: 'test subtask 26'},
        {task_id_fk: 27, subtask: 'test subtask 27'},
        {task_id_fk: 28, subtask: 'test subtask 28'},
        {task_id_fk: 29, subtask: 'test subtask 29'},
        {task_id_fk: 30, subtask: 'test subtask 30'},
        {task_id_fk: 31, subtask: 'test subtask 31'},
        {task_id_fk: 32, subtask: 'test subtask 32'},
        {task_id_fk: 33, subtask: 'test subtask 33'},
        {task_id_fk: 34, subtask: 'test subtask 34'},
        {task_id_fk: 35, subtask: 'test subtask 35'},
        {task_id_fk: 36, subtask: 'test subtask 36'},
        {task_id_fk: 1, subtask: 'test subtask 1'},
        {task_id_fk: 2, subtask: 'test subtask 2'},
        {task_id_fk: 3, subtask: 'test subtask 3'},
        {task_id_fk: 4, subtask: 'test subtask 4'},
        {task_id_fk: 5, subtask: 'test subtask 5'},
        {task_id_fk: 6, subtask: 'test subtask 6'},
        {task_id_fk: 7, subtask: 'test subtask 7'},
        {task_id_fk: 8, subtask: 'test subtask 8'},
        {task_id_fk: 9, subtask: 'test subtask 9'},
        {task_id_fk: 10, subtask: 'test subtask 10'},
        {task_id_fk: 11, subtask: 'test subtask 11'},
        {task_id_fk: 12, subtask: 'test subtask 12'},
        {task_id_fk: 13, subtask: 'test subtask 13'},
        {task_id_fk: 14, subtask: 'test subtask 14'},
        {task_id_fk: 15, subtask: 'test subtask 15'},
        {task_id_fk: 16, subtask: 'test subtask 16'},
        {task_id_fk: 17, subtask: 'test subtask 17'},
        {task_id_fk: 18, subtask: 'test subtask 18'},
        {task_id_fk: 19, subtask: 'test subtask 19'},
        {task_id_fk: 20, subtask: 'test subtask 20'},
        {task_id_fk: 21, subtask: 'test subtask 21'},
        {task_id_fk: 22, subtask: 'test subtask 22'},
        {task_id_fk: 23, subtask: 'test subtask 23'},
        {task_id_fk: 24, subtask: 'test subtask 24'},
        {task_id_fk: 25, subtask: 'test subtask 25'},
        {task_id_fk: 26, subtask: 'test subtask 26'},
        {task_id_fk: 27, subtask: 'test subtask 27'},
        {task_id_fk: 28, subtask: 'test subtask 28'},
        {task_id_fk: 29, subtask: 'test subtask 29'},
        {task_id_fk: 30, subtask: 'test subtask 30'},
        {task_id_fk: 31, subtask: 'test subtask 31'},
        {task_id_fk: 32, subtask: 'test subtask 32'},
        {task_id_fk: 33, subtask: 'test subtask 33'},
        {task_id_fk: 34, subtask: 'test subtask 34'},
        {task_id_fk: 35, subtask: 'test subtask 35'},
        {task_id_fk: 36, subtask: 'test subtask 36'},
      ]);
    });
};
