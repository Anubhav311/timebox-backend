
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


//SEEDS FOR NUMBER BASED DATES SCHEMA
// exports.seed = function(knex) {
//   let currentDate = new Date()
//   let currentDay = currentDate.getDay();
//   let date1 = new Date(); date1.setDate(date1.getDate() - currentDay + 1)
//   let date2 = new Date(); date2.setDate(date2.getDate() - currentDay + 2)
//   let date3 = new Date(); date3.setDate(date3.getDate() - currentDay + 3)
//   let date4 = new Date(); date4.setDate(date4.getDate() - currentDay + 4)
//   let date5 = new Date(); date5.setDate(date5.getDate() - currentDay + 5)
//   let date6 = new Date(); date6.setDate(date6.getDate() - currentDay + 6)
//   let date7 = new Date(); date7.setDate(date7.getDate() - currentDay + 7)
//   let date8 = new Date(); date8.setDate(date8.getDate() - currentDay + 8)
//   let date9 = new Date(); date9.setDate(date9.getDate() - currentDay + 9)
//   let date10 = new Date(); date10.setDate(date10.getDate() - currentDay + 10)
//   let date11 = new Date(); date11.setDate(date11.getDate() - currentDay + 11)
//   let date12 = new Date(); date12.setDate(date12.getDate() - currentDay + 12)
//   let date13 = new Date(); date13.setDate(date13.getDate() - currentDay + 13)
//   let date14 = new Date(); date14.setDate(date14.getDate() - currentDay + 14)
//   let date15 = new Date(); date15.setDate(date15.getDate() - currentDay + 1)
//   let date16 = new Date(); date16.setDate(date16.getDate() - currentDay + 2)
//   let date17 = new Date(); date17.setDate(date17.getDate() - currentDay + 3)
//   let date18 = new Date(); date18.setDate(date18.getDate() - currentDay + 4)
//   let date19 = new Date(); date19.setDate(date19.getDate() - currentDay + 5)
//   let date20 = new Date(); date20.setDate(date20.getDate() - currentDay + 6)
//   let date21 = new Date(); date21.setDate(date21.getDate() - currentDay + 7)
//   let date22 = new Date(); date22.setDate(date22.getDate() - currentDay + 8)
//   let date23 = new Date(); date23.setDate(date23.getDate() - currentDay + 9)
//   let date24 = new Date(); date24.setDate(date24.getDate() - currentDay + 10)
//   let date25 = new Date(); date25.setDate(date25.getDate() - currentDay + 11)
//   let date26 = new Date(); date26.setDate(date26.getDate() - currentDay + 12)
//   let date27 = new Date(); date27.setDate(date27.getDate() - currentDay + 13)
//   let date28 = new Date(); date28.setDate(date28.getDate() - currentDay + 14)
//   let date29 = new Date(); date29.setDate(date29.getDate() - currentDay + 1)
//   let date30 = new Date(); date30.setDate(date30.getDate() - currentDay + 2)
//   let date31 = new Date(); date31.setDate(date31.getDate() - currentDay + 3)
//   let date32 = new Date(); date32.setDate(date32.getDate() - currentDay + 4)
//   let date33 = new Date(); date33.setDate(date33.getDate() - currentDay + 5)
//   let date34 = new Date(); date34.setDate(date34.getDate() - currentDay + 6)
//   let date35 = new Date(); date35.setDate(date35.getDate() - currentDay + 7)
//   let date36 = new Date(); date36.setDate(date36.getDate() - currentDay + 8)
//   // Deletes ALL existing entries
//   return knex('tasks').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('tasks').insert([
//         {
//           user_id_fk: 1, 
//           task: 'test task heading 1', 
//           task_created_at_year: date1.getFullYear(), 
//           task_created_at_month: date1.getMonth(), 
//           task_created_at_date: date1.getDate(), 
//           task_created_at_hour: date1.getHours(), 
//           task_created_at_minute: date1.getMinutes(), 
//           task_created_at_second: date1.getSeconds(),
//           task_due_at_year: date1.getFullYear(),
//           task_due_at_month: date1.getMonth(),
//           task_due_at_date: date1.getDate(),
//           task_due_at_hour: date1.getHours(),
//           task_due_at_minute: date1.getMinutes(),
//           task_due_at_seconds: date1.getSeconds()
//         },
//         {
//           user_id_fk: 2, 
//           task: 'test task heading 1', 
//           task_created_at_year: date2.getFullYear(), 
//           task_created_at_month: date2.getMonth(), 
//           task_created_at_date: date2.getDate(), 
//           task_created_at_hour: date2.getHours(), 
//           task_created_at_minute: date2.getMinutes(), 
//           task_created_at_second: date2.getSeconds(),
//           task_due_at_year: date2.getFullYear(),
//           task_due_at_month: date2.getMonth(),
//           task_due_at_date: date2.getDate(),
//           task_due_at_hour: date2.getHours(),
//           task_due_at_minute: date2.getMinutes(),
//           task_due_at_seconds: date2.getSeconds()
//         },
//         {
//           user_id_fk: 3, 
//           task: 'test task heading 1', 
//           task_created_at_year: date3.getFullYear(), 
//           task_created_at_month: date3.getMonth(), 
//           task_created_at_date: date3.getDate(), 
//           task_created_at_hour: date3.getHours(), 
//           task_created_at_minute: date3.getMinutes(), 
//           task_created_at_second: date3.getSeconds(),
//           task_due_at_year: date3.getFullYear(),
//           task_due_at_month: date3.getMonth(),
//           task_due_at_date: date3.getDate(),
//           task_due_at_hour: date3.getHours(),
//           task_due_at_minute: date3.getMinutes(),
//           task_due_at_seconds: date3.getSeconds()
//         },
//         {
//           user_id_fk: 1, 
//           task: 'test task heading 2', 
//           task_created_at_year: date4.getFullYear(), 
//           task_created_at_month: date4.getMonth(), 
//           task_created_at_date: date4.getDate(), 
//           task_created_at_hour: date4.getHours(), 
//           task_created_at_minute: date4.getMinutes(), 
//           task_created_at_second: date4.getSeconds(),
//           task_due_at_year: date4.getFullYear(),
//           task_due_at_month: date4.getMonth(),
//           task_due_at_date: date4.getDate(),
//           task_due_at_hour: date4.getHours(),
//           task_due_at_minute: date4.getMinutes(),
//           task_due_at_seconds: date4.getSeconds()
//         },
//         {
//           user_id_fk: 2, 
//           task: 'test task heading 2', 
//           task_created_at_year: date5.getFullYear(), 
//           task_created_at_month: date5.getMonth(), 
//           task_created_at_date: date5.getDate(), 
//           task_created_at_hour: date5.getHours(), 
//           task_created_at_minute: date5.getMinutes(), 
//           task_created_at_second: date5.getSeconds(),
//           task_due_at_year: date5.getFullYear(),
//           task_due_at_month: date5.getMonth(),
//           task_due_at_date: date5.getDate(),
//           task_due_at_hour: date5.getHours(),
//           task_due_at_minute: date5.getMinutes(),
//           task_due_at_seconds: date5.getSeconds()
//         },
//         {
//           user_id_fk: 3, 
//           task: 'test task heading 2', 
//           task_created_at_year: date6.getFullYear(), 
//           task_created_at_month: date6.getMonth(), 
//           task_created_at_date: date6.getDate(), 
//           task_created_at_hour: date6.getHours(), 
//           task_created_at_minute: date6.getMinutes(), 
//           task_created_at_second: date6.getSeconds(),
//           task_due_at_year: date6.getFullYear(),
//           task_due_at_month: date6.getMonth(),
//           task_due_at_date: date6.getDate(),
//           task_due_at_hour: date6.getHours(),
//           task_due_at_minute: date6.getMinutes(),
//           task_due_at_seconds: date6.getSeconds()
//         },
//         {
//           user_id_fk: 1, 
//           task: 'test task heading 3', 
//           task_created_at_year: date7.getFullYear(), 
//           task_created_at_month: date7.getMonth(), 
//           task_created_at_date: date7.getDate(), 
//           task_created_at_hour: date7.getHours(), 
//           task_created_at_minute: date7.getMinutes(), 
//           task_created_at_second: date7.getSeconds(),
//           task_due_at_year: date7.getFullYear(),
//           task_due_at_month: date7.getMonth(),
//           task_due_at_date: date7.getDate(),
//           task_due_at_hour: date7.getHours(),
//           task_due_at_minute: date7.getMinutes(),
//           task_due_at_seconds: date7.getSeconds()
//         },
//         {
//           user_id_fk: 2, 
//           task: 'test task heading 3', 
//           task_created_at_year: date8.getFullYear(), 
//           task_created_at_month: date8.getMonth(), 
//           task_created_at_date: date8.getDate(), 
//           task_created_at_hour: date8.getHours(), 
//           task_created_at_minute: date8.getMinutes(), 
//           task_created_at_second: date8.getSeconds(),
//           task_due_at_year: date8.getFullYear(),
//           task_due_at_month: date8.getMonth(),
//           task_due_at_date: date8.getDate(),
//           task_due_at_hour: date8.getHours(),
//           task_due_at_minute: date8.getMinutes(),
//           task_due_at_seconds: date8.getSeconds()
//         },
//         {
//           user_id_fk: 3, 
//           task: 'test task heading 3', 
//           task_created_at_year: date9.getFullYear(), 
//           task_created_at_month: date9.getMonth(), 
//           task_created_at_date: date9.getDate(), 
//           task_created_at_hour: date9.getHours(), 
//           task_created_at_minute: date9.getMinutes(), 
//           task_created_at_second: date9.getSeconds(),
//           task_due_at_year: date9.getFullYear(),
//           task_due_at_month: date9.getMonth(),
//           task_due_at_date: date9.getDate(),
//           task_due_at_hour: date9.getHours(),
//           task_due_at_minute: date9.getMinutes(),
//           task_due_at_seconds: date9.getSeconds()
//         },
//         {
//           user_id_fk: 1, 
//           task: 'test task heading 4', 
//           task_created_at_year: date10.getFullYear(), 
//           task_created_at_month: date10.getMonth(), 
//           task_created_at_date: date10.getDate(), 
//           task_created_at_hour: date10.getHours(), 
//           task_created_at_minute: date10.getMinutes(), 
//           task_created_at_second: date10.getSeconds(),
//           task_due_at_year: date10.getFullYear(),
//           task_due_at_month: date10.getMonth(),
//           task_due_at_date: date10.getDate(),
//           task_due_at_hour: date10.getHours(),
//           task_due_at_minute: date10.getMinutes(),
//           task_due_at_seconds: date10.getSeconds()
//         },
//         {
//           user_id_fk: 2, 
//           task: 'test task heading 4', 
//           task_created_at_year: date11.getFullYear(), 
//           task_created_at_month: date11.getMonth(), 
//           task_created_at_date: date11.getDate(), 
//           task_created_at_hour: date11.getHours(), 
//           task_created_at_minute: date11.getMinutes(), 
//           task_created_at_second: date11.getSeconds(),
//           task_due_at_year: date11.getFullYear(),
//           task_due_at_month: date11.getMonth(),
//           task_due_at_date: date11.getDate(),
//           task_due_at_hour: date11.getHours(),
//           task_due_at_minute: date11.getMinutes(),
//           task_due_at_seconds: date11.getSeconds()
//         },
//         {
//           user_id_fk: 3, 
//           task: 'test task heading 4', 
//           task_created_at_year: date12.getFullYear(), 
//           task_created_at_month: date12.getMonth(), 
//           task_created_at_date: date12.getDate(), 
//           task_created_at_hour: date12.getHours(), 
//           task_created_at_minute: date12.getMinutes(), 
//           task_created_at_second: date12.getSeconds(),
//           task_due_at_year: date12.getFullYear(),
//           task_due_at_month: date12.getMonth(),
//           task_due_at_date: date12.getDate(),
//           task_due_at_hour: date12.getHours(),
//           task_due_at_minute: date12.getMinutes(),
//           task_due_at_seconds: date12.getSeconds()
//         },
//         {
//           user_id_fk: 1, 
//           task: 'test task heading 5', 
//           task_created_at_year: date13.getFullYear(), 
//           task_created_at_month: date13.getMonth(), 
//           task_created_at_date: date13.getDate(), 
//           task_created_at_hour: date13.getHours(), 
//           task_created_at_minute: date13.getMinutes(), 
//           task_created_at_second: date13.getSeconds(),
//           task_due_at_year: date13.getFullYear(),
//           task_due_at_month: date13.getMonth(),
//           task_due_at_date: date13.getDate(),
//           task_due_at_hour: date13.getHours(),
//           task_due_at_minute: date13.getMinutes(),
//           task_due_at_seconds: date13.getSeconds()
//         },
//         {
//           user_id_fk: 2, 
//           task: 'test task heading 5', 
//           task_created_at_year: date14.getFullYear(), 
//           task_created_at_month: date14.getMonth(), 
//           task_created_at_date: date14.getDate(), 
//           task_created_at_hour: date14.getHours(), 
//           task_created_at_minute: date14.getMinutes(), 
//           task_created_at_second: date14.getSeconds(),
//           task_due_at_year: date14.getFullYear(),
//           task_due_at_month: date14.getMonth(),
//           task_due_at_date: date14.getDate(),
//           task_due_at_hour: date14.getHours(),
//           task_due_at_minute: date14.getMinutes(),
//           task_due_at_seconds: date14.getSeconds()
//         },
//         {
//           user_id_fk: 3, 
//           task: 'test task heading 5', 
//           task_created_at_year: date15.getFullYear(), 
//           task_created_at_month: date15.getMonth(), 
//           task_created_at_date: date15.getDate(), 
//           task_created_at_hour: date15.getHours(), 
//           task_created_at_minute: date15.getMinutes(), 
//           task_created_at_second: date15.getSeconds(),
//           task_due_at_year: date15.getFullYear(),
//           task_due_at_month: date15.getMonth(),
//           task_due_at_date: date15.getDate(),
//           task_due_at_hour: date15.getHours(),
//           task_due_at_minute: date15.getMinutes(),
//           task_due_at_seconds: date15.getSeconds()
//         },
//         {
//           user_id_fk: 1, 
//           task: 'test task heading 6', 
//           task_created_at_year: date16.getFullYear(), 
//           task_created_at_month: date16.getMonth(), 
//           task_created_at_date: date16.getDate(), 
//           task_created_at_hour: date16.getHours(), 
//           task_created_at_minute: date16.getMinutes(), 
//           task_created_at_second: date16.getSeconds(),
//           task_due_at_year: date16.getFullYear(),
//           task_due_at_month: date16.getMonth(),
//           task_due_at_date: date16.getDate(),
//           task_due_at_hour: date16.getHours(),
//           task_due_at_minute: date16.getMinutes(),
//           task_due_at_seconds: date16.getSeconds()
//         },
//         {
//           user_id_fk: 2, 
//           task: 'test task heading 6', 
//           task_created_at_year: date17.getFullYear(), 
//           task_created_at_month: date17.getMonth(), 
//           task_created_at_date: date17.getDate(), 
//           task_created_at_hour: date17.getHours(), 
//           task_created_at_minute: date17.getMinutes(), 
//           task_created_at_second: date17.getSeconds(),
//           task_due_at_year: date17.getFullYear(),
//           task_due_at_month: date17.getMonth(),
//           task_due_at_date: date17.getDate(),
//           task_due_at_hour: date17.getHours(),
//           task_due_at_minute: date17.getMinutes(),
//           task_due_at_seconds: date17.getSeconds()
//         },
//         {
//           user_id_fk: 3, 
//           task: 'test task heading 6', 
//           task_created_at_year: date18.getFullYear(), 
//           task_created_at_month: date18.getMonth(), 
//           task_created_at_date: date18.getDate(), 
//           task_created_at_hour: date18.getHours(), 
//           task_created_at_minute: date18.getMinutes(), 
//           task_created_at_second: date18.getSeconds(),
//           task_due_at_year: date18.getFullYear(),
//           task_due_at_month: date18.getMonth(),
//           task_due_at_date: date18.getDate(),
//           task_due_at_hour: date18.getHours(),
//           task_due_at_minute: date18.getMinutes(),
//           task_due_at_seconds: date18.getSeconds()
//         },
//         {
//           user_id_fk: 1, 
//           task: 'test task heading 7', 
//           task_created_at_year: date19.getFullYear(), 
//           task_created_at_month: date19.getMonth(), 
//           task_created_at_date: date19.getDate(), 
//           task_created_at_hour: date19.getHours(), 
//           task_created_at_minute: date19.getMinutes(), 
//           task_created_at_second: date19.getSeconds(),
//           task_due_at_year: date19.getFullYear(),
//           task_due_at_month: date19.getMonth(),
//           task_due_at_date: date19.getDate(),
//           task_due_at_hour: date19.getHours(),
//           task_due_at_minute: date19.getMinutes(),
//           task_due_at_seconds: date19.getSeconds()
//         },
//         {
//           user_id_fk: 2, 
//           task: 'test task heading 7', 
//           task_created_at_year: date20.getFullYear(), 
//           task_created_at_month: date20.getMonth(), 
//           task_created_at_date: date20.getDate(), 
//           task_created_at_hour: date20.getHours(), 
//           task_created_at_minute: date20.getMinutes(), 
//           task_created_at_second: date20.getSeconds(),
//           task_due_at_year: date20.getFullYear(),
//           task_due_at_month: date20.getMonth(),
//           task_due_at_date: date20.getDate(),
//           task_due_at_hour: date20.getHours(),
//           task_due_at_minute: date20.getMinutes(),
//           task_due_at_seconds: date20.getSeconds()
//         },
//         {
//           user_id_fk: 3, 
//           task: 'test task heading 7', 
//           task_created_at_year: date21.getFullYear(), 
//           task_created_at_month: date21.getMonth(), 
//           task_created_at_date: date21.getDate(), 
//           task_created_at_hour: date21.getHours(), 
//           task_created_at_minute: date21.getMinutes(), 
//           task_created_at_second: date21.getSeconds(),
//           task_due_at_year: date21.getFullYear(),
//           task_due_at_month: date21.getMonth(),
//           task_due_at_date: date21.getDate(),
//           task_due_at_hour: date21.getHours(),
//           task_due_at_minute: date21.getMinutes(),
//           task_due_at_seconds: date21.getSeconds()
//         },
//         {
//           user_id_fk: 1, 
//           task: 'test task heading 8', 
//           task_created_at_year: date22.getFullYear(), 
//           task_created_at_month: date22.getMonth(), 
//           task_created_at_date: date22.getDate(), 
//           task_created_at_hour: date22.getHours(), 
//           task_created_at_minute: date22.getMinutes(), 
//           task_created_at_second: date22.getSeconds(),
//           task_due_at_year: date22.getFullYear(),
//           task_due_at_month: date22.getMonth(),
//           task_due_at_date: date22.getDate(),
//           task_due_at_hour: date22.getHours(),
//           task_due_at_minute: date22.getMinutes(),
//           task_due_at_seconds: date22.getSeconds()
//         },
//         {
//           user_id_fk: 2, 
//           task: 'test task heading 8', 
//           task_created_at_year: date23.getFullYear(), 
//           task_created_at_month: date23.getMonth(), 
//           task_created_at_date: date23.getDate(), 
//           task_created_at_hour: date23.getHours(), 
//           task_created_at_minute: date23.getMinutes(), 
//           task_created_at_second: date23.getSeconds(),
//           task_due_at_year: date23.getFullYear(),
//           task_due_at_month: date23.getMonth(),
//           task_due_at_date: date23.getDate(),
//           task_due_at_hour: date23.getHours(),
//           task_due_at_minute: date23.getMinutes(),
//           task_due_at_seconds: date23.getSeconds()
//         },
//         {
//           user_id_fk: 3, 
//           task: 'test task heading 8', 
//           task_created_at_year: date24.getFullYear(), 
//           task_created_at_month: date24.getMonth(), 
//           task_created_at_date: date24.getDate(), 
//           task_created_at_hour: date24.getHours(), 
//           task_created_at_minute: date24.getMinutes(), 
//           task_created_at_second: date24.getSeconds(),
//           task_due_at_year: date24.getFullYear(),
//           task_due_at_month: date24.getMonth(),
//           task_due_at_date: date24.getDate(),
//           task_due_at_hour: date24.getHours(),
//           task_due_at_minute: date24.getMinutes(),
//           task_due_at_seconds: date24.getSeconds()
//         },
//         {
//           user_id_fk: 1, 
//           task: 'test task heading 9', 
//           task_created_at_year: date25.getFullYear(), 
//           task_created_at_month: date25.getMonth(), 
//           task_created_at_date: date25.getDate(), 
//           task_created_at_hour: date25.getHours(), 
//           task_created_at_minute: date25.getMinutes(), 
//           task_created_at_second: date25.getSeconds(),
//           task_due_at_year: date25.getFullYear(),
//           task_due_at_month: date25.getMonth(),
//           task_due_at_date: date25.getDate(),
//           task_due_at_hour: date25.getHours(),
//           task_due_at_minute: date25.getMinutes(),
//           task_due_at_seconds: date25.getSeconds()
//         },
//         {
//           user_id_fk: 2, 
//           task: 'test task heading 9', 
//           task_created_at_year: date26.getFullYear(), 
//           task_created_at_month: date26.getMonth(), 
//           task_created_at_date: date26.getDate(), 
//           task_created_at_hour: date26.getHours(), 
//           task_created_at_minute: date26.getMinutes(), 
//           task_created_at_second: date26.getSeconds(),
//           task_due_at_year: date26.getFullYear(),
//           task_due_at_month: date26.getMonth(),
//           task_due_at_date: date26.getDate(),
//           task_due_at_hour: date26.getHours(),
//           task_due_at_minute: date26.getMinutes(),
//           task_due_at_seconds: date26.getSeconds()
//         },
//         {
//           user_id_fk: 3, 
//           task: 'test task heading 9', 
//           task_created_at_year: date27.getFullYear(), 
//           task_created_at_month: date27.getMonth(), 
//           task_created_at_date: date27.getDate(), 
//           task_created_at_hour: date27.getHours(), 
//           task_created_at_minute: date27.getMinutes(), 
//           task_created_at_second: date27.getSeconds(),
//           task_due_at_year: date27.getFullYear(),
//           task_due_at_month: date27.getMonth(),
//           task_due_at_date: date27.getDate(),
//           task_due_at_hour: date27.getHours(),
//           task_due_at_minute: date27.getMinutes(),
//           task_due_at_seconds: date27.getSeconds()
//         },
//         {
//           user_id_fk: 1, 
//           task: 'test task heading 10', 
//           task_created_at_year: date28.getFullYear(), 
//           task_created_at_month: date28.getMonth(), 
//           task_created_at_date: date28.getDate(), 
//           task_created_at_hour: date28.getHours(), 
//           task_created_at_minute: date28.getMinutes(), 
//           task_created_at_second: date28.getSeconds(),
//           task_due_at_year: date28.getFullYear(),
//           task_due_at_month: date28.getMonth(),
//           task_due_at_date: date28.getDate(),
//           task_due_at_hour: date28.getHours(),
//           task_due_at_minute: date28.getMinutes(),
//           task_due_at_seconds: date28.getSeconds()
//         },
//         {
//           user_id_fk: 2, 
//           task: 'test task heading 10', 
//           task_created_at_year: date29.getFullYear(), 
//           task_created_at_month: date29.getMonth(), 
//           task_created_at_date: date29.getDate(), 
//           task_created_at_hour: date29.getHours(), 
//           task_created_at_minute: date29.getMinutes(), 
//           task_created_at_second: date29.getSeconds(),
//           task_due_at_year: date29.getFullYear(),
//           task_due_at_month: date29.getMonth(),
//           task_due_at_date: date29.getDate(),
//           task_due_at_hour: date29.getHours(),
//           task_due_at_minute: date29.getMinutes(),
//           task_due_at_seconds: date29.getSeconds()
//         },
//         {
//           user_id_fk: 3, 
//           task: 'test task heading 10', 
//           task_created_at_year: date30.getFullYear(), 
//           task_created_at_month: date30.getMonth(), 
//           task_created_at_date: date30.getDate(), 
//           task_created_at_hour: date30.getHours(), 
//           task_created_at_minute: date30.getMinutes(), 
//           task_created_at_second: date30.getSeconds(),
//           task_due_at_year: date30.getFullYear(),
//           task_due_at_month: date30.getMonth(),
//           task_due_at_date: date30.getDate(),
//           task_due_at_hour: date30.getHours(),
//           task_due_at_minute: date30.getMinutes(),
//           task_due_at_seconds: date30.getSeconds()
//         },
//         {
//           user_id_fk: 1, 
//           task: 'test task heading 11', 
//           task_created_at_year: date31.getFullYear(), 
//           task_created_at_month: date31.getMonth(), 
//           task_created_at_date: date31.getDate(), 
//           task_created_at_hour: date31.getHours(), 
//           task_created_at_minute: date31.getMinutes(), 
//           task_created_at_second: date31.getSeconds(),
//           task_due_at_year: date31.getFullYear(),
//           task_due_at_month: date31.getMonth(),
//           task_due_at_date: date31.getDate(),
//           task_due_at_hour: date31.getHours(),
//           task_due_at_minute: date31.getMinutes(),
//           task_due_at_seconds: date31.getSeconds()
//         },
//         {
//           user_id_fk: 2, 
//           task: 'test task heading 11', 
//           task_created_at_year: date32.getFullYear(), 
//           task_created_at_month: date32.getMonth(), 
//           task_created_at_date: date32.getDate(), 
//           task_created_at_hour: date32.getHours(), 
//           task_created_at_minute: date32.getMinutes(), 
//           task_created_at_second: date32.getSeconds(),
//           task_due_at_year: date32.getFullYear(),
//           task_due_at_month: date32.getMonth(),
//           task_due_at_date: date32.getDate(),
//           task_due_at_hour: date32.getHours(),
//           task_due_at_minute: date32.getMinutes(),
//           task_due_at_seconds: date32.getSeconds()
//         },
//         {
//           user_id_fk: 3, 
//           task: 'test task heading 11', 
//           task_created_at_year: date33.getFullYear(), 
//           task_created_at_month: date33.getMonth(), 
//           task_created_at_date: date33.getDate(), 
//           task_created_at_hour: date33.getHours(), 
//           task_created_at_minute: date33.getMinutes(), 
//           task_created_at_second: date33.getSeconds(),
//           task_due_at_year: date33.getFullYear(),
//           task_due_at_month: date33.getMonth(),
//           task_due_at_date: date33.getDate(),
//           task_due_at_hour: date33.getHours(),
//           task_due_at_minute: date33.getMinutes(),
//           task_due_at_seconds: date33.getSeconds()
//         },
//         {
//           user_id_fk: 1, 
//           task: 'test task heading 12', 
//           task_created_at_year: date34.getFullYear(), 
//           task_created_at_month: date34.getMonth(), 
//           task_created_at_date: date34.getDate(), 
//           task_created_at_hour: date34.getHours(), 
//           task_created_at_minute: date34.getMinutes(), 
//           task_created_at_second: date34.getSeconds(),
//           task_due_at_year: date34.getFullYear(),
//           task_due_at_month: date34.getMonth(),
//           task_due_at_date: date34.getDate(),
//           task_due_at_hour: date34.getHours(),
//           task_due_at_minute: date34.getMinutes(),
//           task_due_at_seconds: date34.getSeconds()
//         },
//         {
//           user_id_fk: 2, 
//           task: 'test task heading 12', 
//           task_created_at_year: date35.getFullYear(), 
//           task_created_at_month: date35.getMonth(), 
//           task_created_at_date: date35.getDate(), 
//           task_created_at_hour: date35.getHours(), 
//           task_created_at_minute: date35.getMinutes(), 
//           task_created_at_second: date35.getSeconds(),
//           task_due_at_year: date35.getFullYear(),
//           task_due_at_month: date35.getMonth(),
//           task_due_at_date: date35.getDate(),
//           task_due_at_hour: date35.getHours(),
//           task_due_at_minute: date35.getMinutes(),
//           task_due_at_seconds: date35.getSeconds()
//         },
//         {
//           user_id_fk: 3, 
//           task: 'test task heading 12', 
//           task_created_at_year: date36.getFullYear(), 
//           task_created_at_month: date36.getMonth(), 
//           task_created_at_date: date36.getDate(), 
//           task_created_at_hour: date36.getHours(), 
//           task_created_at_minute: date36.getMinutes(), 
//           task_created_at_second: date36.getSeconds(),
//           task_due_at_year: date36.getFullYear(),
//           task_due_at_month: date36.getMonth(),
//           task_due_at_date: date36.getDate(),
//           task_due_at_hour: date36.getHours(),
//           task_due_at_minute: date36.getMinutes(),
//           task_due_at_seconds: date36.getSeconds()
//         },
//       ]);
//     });
// };
