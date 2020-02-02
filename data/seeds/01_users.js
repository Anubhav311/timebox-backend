
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: "test name", email: 'test@testmail.com', password: 'test password'},
        {name: "test name", email: 'test@testmail.com', password: 'test password'},
        {name: "test name", email: 'test@testmail.com', password: 'test password'}
      ]);
    });
};
